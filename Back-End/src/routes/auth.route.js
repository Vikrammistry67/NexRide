import express from 'express';
const Router = express.Router();
import { getUserDetails, loginUser, logoutUser, registerUser } from '../controllers/auth.controller.js';
import { loginUserValidation, registerUserValidation } from '../validation/auth.validator.js';
import authMiddleware from '../middlewares/auth.middleware.js';

Router.post('/register', registerUserValidation, registerUser);
Router.post('/login', loginUserValidation, loginUser);
Router.get('/me', authMiddleware, getUserDetails);
Router.post('/logout', logoutUser);

export default Router;