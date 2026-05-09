import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import _config from '../config/config.js';
import userModel from '../models/user.model.js';



const authMiddleware = async (req, res, next) => {
    const token = req.cookies?.token || req.headers?.authorization.spli(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'Invalid token'
        });
    };

    try {
        const decoded = await jwt.verify(token, _config.JWT_SECRET);
        const user = await userModel.findById({ _id: decoded.id });
        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({
            message: 'UnAuthorized User'
        });
    }
};

export default authMiddleware;