import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const policeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please Enter Email']
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password']
    },
    areaOfEffect: {
        type: Number
    },
    address: {
        type: String,
        required: [true, 'Enter Address']
    },
    location: {
        lattitude: {
            type: Number,
            required: [true, 'Enter Lattitude']
        },
        longitude: {
            type: Number,
            required: [true, 'Enter Longitude']
        }
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
    resources: {
        staffAvailable: {
            type: Number,
            required: [true, 'Enter Number of Staff']
        },
        vehiclesAvailable: {
            type: Number,
            required: [true, 'Enter Number of Fire Brigades']
        }
    },
    // reports:{

    // }
})

policeSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

policeSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

policeSchema.methods.generateToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
}


export default mongoose.model('Police', policeSchema)