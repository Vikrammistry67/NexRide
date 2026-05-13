import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import authRoute from './routes/auth.route.js';
import captainRoute from './routes/captain.route.js';
import cors from 'cors'
const app = express();

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/auth/users', authRoute);
app.use('/api/captains', captainRoute);


export default app;