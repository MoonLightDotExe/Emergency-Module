import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
}

export default mongoose.model('User', userSchema)