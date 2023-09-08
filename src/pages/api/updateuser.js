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
    let user = await User.findOneAndUpdate({ _id: id }, {
        name: data.name,
        username: data.username,
        avatar: data.avatar,
        bio: data.bio,
        title: data.title,
        title: data.title,
        course: data.course,
        from: data.from,
        to: data.to,
        facebook: data.facebook,
        twitter: data.twitter,
        instagram: data.instagram,
        whatsapp: data.whatsapp
    })
    if (!user) {
        return res.json({ success: false, msg: 'Password Incorrect' })
    }
    return res.json({ success: true, msg: "Updated Successfully" });
}

export default page;