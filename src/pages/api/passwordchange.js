import User from '../../../models/User';
import connectToDb from "../../../middleware/connectToDb";
import jwt from 'jsonwebtoken'
connectToDb();
const JWTSECRET = "HELLO"
const page = async (req, res) => {
    if (req.method != 'POST') {
        return res.json({ success: false, msg: "Method not allowed" })
    }
    let {data, authtoken} = req.body;
    let { id } = jwt.verify(authtoken, JWTSECRET);
    if (!id) {
        return res.json({ success: false, msg: "User not authenticated" })
    }
    let user = await User.findById(id);
    if(user.password!=data.oldPassword){
        return res.json({ success: false, msg: 'Password Incorrect' })
    }
    let newPassUser = await User.findOneAndUpdate({ _id: id }, {
        password:data.newPassword
    })
    if (!newPassUser) {
        return res.json({ success: false, msg: 'Failed' })
    }
    return res.json({ success: true, msg: "Updated Successfully" });
}

export default page;