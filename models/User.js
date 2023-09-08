import mongoose from 'mongoose'
const UserSchema  = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    avatar: String,
    phone: String,
    bio: String,
    title: String,
    course: String,
    from: String,
    to: String,
    facebook: String,
    twitter: String,
    instagram: String,
    whatsapp: String,
    password: String,
    images:Array,
    verified:Boolean
},{timestamps:true})

mongoose.models={};
export default mongoose.model('UserTanvirulIslam', UserSchema);