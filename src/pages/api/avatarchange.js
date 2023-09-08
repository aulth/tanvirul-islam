import User from '../../../models/User';
import connectToDb from "../../../middleware/connectToDb";
import jwt from 'jsonwebtoken'
connectToDb();
const JWTSECRET = "HELLO"
const page = async (req, res) => {
    if (req.method != 'POST') {
        return res.json({ success: false, msg: "Method not allowed" })
    }
    let {avatar, authtoken} = req.body;
    let { id } = jwt.verify(authtoken, JWTSECRET);
    if (!id) {
        return res.json({ success: false, msg: "User not authenticated" })
    }
    let user = await User.findOneAndUpdate({ _id: id }, {
        avatar:avatar
    })
    if (!user) {
        return res.json({ success: false, msg: 'Failed' })
    }
    return res.json({ success: true, msg: "Updated Successfully" });
}

export default page;