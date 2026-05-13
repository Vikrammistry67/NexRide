import captainModel from '../models/captain.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import _config from '../config/config.js';
import redis from '../config/redis.js';


export const registerCaptain = async (req, res, next) => {
    try {
        const { fullName, email, password, status, vehicle, location } = req.body;
        const { firstName, lastName } = fullName;
        const { color, numberPlate, capacity, vehicleType } = vehicle;
        const { latitude, longitude } = location;


        const captainAlreadyExist = await captainModel.findOne({ email });

        if (captainAlreadyExist) {
            return res.status(401).json({
                message: 'captain already exist'
            });
        };

        const hashPassword = await bcrypt.hash(password, 10);

        const captain = await captainModel.create({
            email,
            fullName,
            status,
            location,
            vehicle,
            password: hashPassword
        });

        const token = jwt.sign({
            id: captain._id,
            email: captain.email
        }, _config.JWT_SECRET, {
            expiresIn: '2d'
        });

        res.cookie('captainToken', token);

        res.status(201).json({
            message: 'Captain Registered Successfully',
            captain: captain
        })

    } catch (error) {
        console.log(`failed to registed captain : ${error}`);
    };
};

export const loginCaptain = async (req, res, next) => {
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email });
    const isValidEmail = await captainModel.findOne({ email });

    if (!isValidEmail) {
        return res.status(409).json({
            success: false,
            message: 'Invalid Email',
        });
    };

    const isValidPassword = await bcrypt.compare(password, captain.password);

    if (!isValidPassword) {
        return res.status(401).json({
            success: false,
            message: 'Invalid password',
        });
    };

    const token = jwt.sign({
        id: captain._id,
        email: captain.email
    }, _config.JWT_SECRET);

    res.cookie('captainToken', token);

    res.status(200).json({
        success: true,
        message: 'Captain LoggedIn successfully'
    })
};

export const getCaptainDetails = async (req, res, next) => {
    try {
        // req.user should come from auth middleware (JWT decode)
        const captainId = req.captain?._id;

        if (!captainId) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access',
            });
        }

        const captain = await captainModel.findById(captainId).select('-password');

        if (!captain) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Captain fetched successfully',
            data: captain,
        });
    } catch (error) {
        next(error);
    }
};

export const logoutCaptain = async (req, res, next) => {
    try {
        const captainToken = req.cookies?.captainToken;

        if (!captainToken) {
            return res.status(400).json({
                message: 'No captain token found'
            });
        }

        await redis.set(`blacklist_${captainToken}`, captainToken, 'EX', 24 * 60 * 60);

        res.clearCookie('captainToken');

        return res.status(200).json({
            message: 'Captain logged out successfully'
        });

    } catch (error) {
        next(error);
    }
};