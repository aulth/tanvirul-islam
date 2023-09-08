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
    data.email = data.email.toLowerCase();
    let user = await User.findOne({'email':data.email});
    if(user){
        if(user.password==data.password){
            let authtoken = jwt.sign({  id: user._id }, JWTSECRET)
            return res.json({ success: true, msg: 'Login succesfull', authtoken: authtoken, name:user.name })
        }
        return res.json({success:false, msg:'Password Incorrect'})
    }
    return res.json({success:false, msg:"User does not exist"});
}

export default login;