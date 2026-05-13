import mongoose from 'mongoose';

const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    socketId: {
        type: String
    },

    vehicle: {
        color: {
            type: String,
            required: true
        },
        numberPlate: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            maxCap: 5,
            required: true,
            default: 1
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['bike', 'car', 'auto']
        }

    },

    location: {
        latitude: {
            type: Number
        },

        longitude: {
            type: Number
        }
    }

}, {
    timestamps: true
});


const captainModel = mongoose.model('captain', captainSchema);
export default captainModel;