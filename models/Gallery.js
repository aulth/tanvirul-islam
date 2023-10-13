import mongoose from 'mongoose'
const GallerySchema  = new mongoose.Schema({
    title:String,
    url:String
},{timestamps:true})

mongoose.models={};
export default mongoose.model('GallerySchema', GallerySchema);