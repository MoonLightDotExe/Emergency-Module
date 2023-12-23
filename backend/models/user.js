import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    personalInformation: {
        bloodType: String,
        medicalHistory: [String],
        dateOfBirth: Date
    },
    email: {
        type: String,
        required: [true, 'Please Enter Email']
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password']
    },
    contact: {
        personal: {
            type: String,
            required: [true, 'Enter Personal Contact']
        },
        family: {
            type: String,
            required: [true, 'Enter Family Contact']
        },
    },
    aadharId: {
        type: String,
        required: [true, 'Enter Aadhar Number']
    },
    address: {
        type: String,
        required: [true, 'Enter Address']
    },
    pingHistory: {
        activePings: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Ping'
        },
        pastPings: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Ping'
        }
    },
    trustFactor: {
        type: Number,
        default: 100
    }
})

export default mongoose.model('User', userSchema)