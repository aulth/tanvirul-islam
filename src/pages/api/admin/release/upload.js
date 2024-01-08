import connectToDb from "../../../../../middleware/connectToDb";
import Release from "../../../../../models/Release";
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
        console.log(data);
        const release = await Release.create({
            title:data.title,
            document:data.document
        })
        if (!release) {
            return res.json({ success: false, msg: 'Uploading failed'})
        }
        return res.status(200).json({success:true, msg:"Uploaded"})
    } catch (error) {
        return res.json({success:false, msg:error.message})
    }
}

export default page;