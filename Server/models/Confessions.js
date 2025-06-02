import mongoose from 'mongoose'


const ConfessionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

const Confession = mongoose.model('Confession', ConfessionSchema);
export default Confession;