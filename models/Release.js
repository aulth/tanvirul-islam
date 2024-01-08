import mongoose from 'mongoose'
const ReleaseSchema = new mongoose.Schema({
    title: String,
    document: String,
    disable: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

mongoose.models = {};
export default mongoose.model('ReleaseSchema', ReleaseSchema);