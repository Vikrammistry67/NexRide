import mongoose from "mongoose";
import _config from '../config/config.js';


const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        }
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,

    },
    // googleId: {
    //     type: String,
    //     required: function () { return !this.googleId }

    // },


    role: {
        type: String,
        enum: ['DRIVER', 'USER', 'CAPTAIN'],
        default: 'USER'
    }

}, { timestamps: true });

const userModel = mongoose.model('user', userSchema);
export default userModel;