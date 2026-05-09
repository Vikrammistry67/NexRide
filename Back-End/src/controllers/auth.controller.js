import _config from "../config/config.js";
import redis from "../config/redis.js";
import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res, next) => {
    const { email, password, role, fullName } = req.body;
    const { firstName, lastName } = fullName;

    const isUserAlreadyExist = await userModel.findOne({ email });

    if (isUserAlreadyExist) {
        return res.status(409).json({
            message: 'user already exist'
        });
    };

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        email,
        fullName: {
            firstName, lastName
        },
        password: hashPassword,
        role
    });

    const token = jwt.sign({
        id: user._id,
        email: user.email,
        role: user.role
    }, _config.JWT_SECRET, {
        expiresIn: '2d'
    });

    res.cookie('token', token);

    res.status(201).json({
        message: 'User registered succcessfully',
        user: {
            fullName: user.fullName,
            email: user.email
        }
    });
};


export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    const isValidEmail = await userModel.findOne({ email });

    if (!isValidEmail) {
        return res.status(409).json({
            success: false,
            message: 'Invalid Email',
        });
    };

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return res.status(401).json({
            success: false,
            message: 'Invalid password',
        });
    };

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, _config.JWT_SECRET);

    res.cookie('token', token);

    res.status(200).json({
        success: true,
        message: 'User LoggedIn successfully'
    })

};


export const getUserDetails = async (req, res, next) => {
    try {
        // req.user should come from auth middleware (JWT decode)
        const userId = req.user?._id;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access',
            });
        }

        const user = await userModel.findById(userId).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: user,
        });
    } catch (error) {
        next(error);
    }
};


export const logoutUser = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(400).json({
                message: 'No token found'
            });
        }

        await redis.set(`blacklist_${token}`, token, 'EX', 24 * 60 * 60);

        res.clearCookie('token');

        return res.status(200).json({
            message: 'User logged out successfully'
        });

    } catch (error) {
        next(error);
    }
};