import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import _config from '../config/config.js';
import captainModel from '../models/captain.model.js';



const captainMiddleware = async (req, res, next) => {
    const captainToken = req.cookies?.captainToken || req.headers?.authorization.spli(' ')[1];
    if (!captainToken) {
        return res.status(401).json({
            message: 'Invalid captain token'
        });
    };

    try {
        const decoded = await jwt.verify(captainToken, _config.JWT_SECRET);
        const captain = await captainModel.findById({ _id: decoded.id });
        req.captain = captain;
        next();

    } catch (error) {
        return res.status(401).json({
            message: 'UnAuthorized Captain'
        });
    }
};

export default captainMiddleware;