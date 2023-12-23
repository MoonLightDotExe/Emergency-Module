import mongoose from "mongoose";

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

export default mongoose.model('Police', policeSchema)