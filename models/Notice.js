import mongoose from 'mongoose'
const NoticeSchema  = new mongoose.Schema({
    description:String
},{timestamps:true})

mongoose.models={};
export default mongoose.model('NoticeSchema', NoticeSchema);