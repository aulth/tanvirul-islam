import connectToDb from "../../../../../middleware/connectToDb";
import Gallery from "../../../../../models/Gallery";
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
        const gallery = await Gallery.create({
            title:data.title,
            url:data.url,
        })
        if (!gallery) {
            return res.json({ success: false, msg: 'Uploading failed'})
        }
        return res.json({success:true, msg:"Uploaded"})
    } catch (error) {
        return res.json({success:false, msg:error.message})
    }
}

export default page;