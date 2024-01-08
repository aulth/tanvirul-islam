import connectToDb from "../../../../../middleware/connectToDb";
import Release from "../../../../../models/Release";
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
        const release = await Release.find({}).sort({ createdAt: -1 })
        if (!release) {
            return res.status(401).json({ success: false, msg: 'No release', release:release})
        }
        return res.status(200).json({success:true, msg:"Found", release:release})
    } catch (error) {
        return res.json({success:false, msg:error.message})
    }
}

export default page;