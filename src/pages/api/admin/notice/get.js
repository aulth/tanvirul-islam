import connectToDb from "../../../../../middleware/connectToDb";
import Notice from "../../../../../models/Notice";
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
        const latestNotice = await Notice.find({}).sort({ createdAt: -1 }).limit(1);
        if (!latestNotice) {
            return res.json({ success: false, msg: 'No image', notice:latestNotice})
        }
        return res.json({success:true, msg:"Found", notice:latestNotice})
    } catch (error) {
        return res.json({success:false, msg:error.message})
    }
}

export default page;