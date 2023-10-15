import connectToDb from "../../../../../middleware/connectToDb";
import User from "../../../../../models/User";
connectToDb();

const page = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        const data = req.body;
        if(data.adminPin!=process.env.NEXT_PUBLIC_ADMIN_PIN){
            return 	res.status(401).json({success:false, msg:"Unauthorized"});
        }
        const users = await User.find({})
        if (!users) {
            return res.json({ success: false, msg: 'No user', users})
        }
        return res.json({success:true, msg:"Found", users})
    } catch (error) {
        return res.json({success:false, msg:error.message})
    }
}

export default page;