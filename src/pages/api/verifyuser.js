import User from '../../../models/User';
import connectToDb from "../../../middleware/connectToDb";
import jwt from 'jsonwebtoken'
connectToDb();
const JWTSECRET = "HELLO"
const login = async (req, res)=>{
    if(req.method!='POST'){
        return res.json({success:false, msg:"Method not allowed"})
    }
    let data = req.body;
    let {id} = jwt.verify(data.authtoken, JWTSECRET);
    if(!id){
        return res.json({success:false, msg:"User not authenticated"})
    }
    const user = await User.findById(id);
    if(!user){
    return res.json({success:false, msg:"User does not exist"});
    }
    const userData = {
        name:user.name,
        avatar:user.avatar,
        images:user.images
    }
    return res.json({ success: true, msg: 'User verfied', user})
}

export default login;