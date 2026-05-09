import mongoose from "mongoose";
import _config from '../config/config.js';

const connectToDB = async () => {
    try {
        await mongoose.connect(_config.MONGO_URI);
        console.log('Authentication database is conneted successfully');
    } catch (error) {
        console.log(`ERROR at authentication database connection : ${error}`);
    };
};

export default connectToDB;