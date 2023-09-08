import jwt from 'jsonwebtoken'
import connectToDb from '../../../middleware/connectToDb';
import User from '../../../models/User';
connectToDb();

const postSignup = async (req, res) => {
    const JWTSECRET = "HELLO"
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        let data = req.body;
        data.email = data.email.toLowerCase();
        let user =await User.findOne({'email':data.email});
        if(user){
            return res.json({success:false, msg:'User already exists'})
        }
        let username = data.name.toLowerCase().split(" ").join("-")+ Math.floor(Math.random() * (100000 - 999999 + 1));
        user = await User.create({
            name:data.name,
            email:data.email,
            password:data.password,
            username: username
        })
        if (user) {
            let authtoken = jwt.sign({ id: user._id }, JWTSECRET)
            return res.json({ success: true, msg: 'Signup succesfull', authtoken: authtoken, userid:user._id, name:user.name})
        }else{
            return res.json({success:false, msg:"Sign up failed 1"})
        }
    } catch (error) {
        return res.json({success:false, msg:"Sign up failed 2"})
    }
}

export default postSignup;