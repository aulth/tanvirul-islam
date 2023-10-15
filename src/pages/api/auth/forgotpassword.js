import User from "../../../../models/User";
import connectToDb from "../../../../middleware/connectToDb";
connectToDb();
const JWTSECRET = "HELLO"
const page = async (req, res) => {
    if (req.method != 'POST') {
        return res.json({ success: false, msg: "Method not allowed" })
    }
    let {data, adminPin} = req.body;
    if(adminPin!=process.env.NEXT_PUBLIC_ADMIN_PIN){
        return 	res.status(401).json({success:false, msg:"Unauthorized"});
    }
    let newPassUser = await User.findOneAndUpdate({ email: data.email.toLowerCase() }, {
        password:data.password
    })
    console.log(newPassUser)
    if (!newPassUser) {
        return res.json({ success: false, msg: 'User Does not exist' })
    }
    return res.json({ success: true, msg: "Reset Successfully" });
}

export default page;