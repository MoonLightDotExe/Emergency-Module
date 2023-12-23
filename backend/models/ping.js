import mongoose from 'mongoose';

const pingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Enter User'],
        ref: 'User'
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
    // reports:{

    // }
})

export default mongoose.model('Ping', pingSchema)