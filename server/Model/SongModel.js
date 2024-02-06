import mongoose from 'mongoose'
const songSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Artist: {
        type: String,
        required: true
    },
    Album: {
        type: String,
        required: true,
        
    },
    Genre: {
        type: [String],
        required: true
    }
}, {timestamps: true})


const SongSchema = mongoose.model('Song', songSchema)

export default SongSchema;
