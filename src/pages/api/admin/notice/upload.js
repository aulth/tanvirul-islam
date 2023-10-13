import connectToDb from "../../../../../middleware/connectToDb";
import Notice from "../../../../../models/Notice";
connectToDb();

const page = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        let data = req.body;
        if(data.adminPin!=process.env.NEXT_PUBLIC_ADMIN_PIN){
            return 	res.status(401).json({success:false, msg:"Unauthorized"});
        }
        const notice = await Notice.create({
            description:data.description,
        })
        if (!notice) {
            return res.json({ success: false, msg: 'Uploading failed'})
        }
        return res.json({success:true, msg:"Uploaded"})
    } catch (error) {
        return res.json({success:false, msg:error.message})
    }
}

export default page;