import express from 'express';
import { getCaptainDetails, loginCaptain, logoutCaptain, registerCaptain } from '../controllers/captain.controller.js';
import { captainLoginValidation, captainRegisterValidation } from '../validation/captain.validator.js';
import captainMiddleware from '../middlewares/captain.middleware.js';
const Router = express.Router();

// POST - APIS
Router.post('/registerCaptain', captainRegisterValidation, registerCaptain);
Router.post('/captainLogin', captainLoginValidation, loginCaptain);
Router.post('/logoutCaptain', logoutCaptain);


// GET - APIS
Router.get('/me', captainMiddleware, getCaptainDetails);

export default Router;