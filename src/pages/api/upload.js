// import connectToDb from "../../../middleware/connectToDb";
// import Image from "../../../models/Image";
// connectToDb();
// import jwt from "jsonwebtoken";
// const JWTSECRET = "HELLO"
// const addItem = async (req, res) => {
//     try {
//         if (req.method != 'POST') {
//             return res.json({ success: false, msg: "Method not allowed" })
//         }
//         let { name, url, authtoken } = req.body;
//         if (!name || !url) {
//             return res.json({ success: false, msg: "Please fill all the fields" })
//         }
//         if(!authtoken){
//             return res.json({success:false, msg:"Token not provided, please login to add this item."})
//         }
//         let {id} = jwt.verify(authtoken, JWTSECRET);
//         if(!id){
//             return res.json({success:false, msg:"User not authenticated"})
//         }
//         let image =await Image.create({
//             name:name,
//             url:url,
//             user:id,
//         })
//         if (image) {
//             return res.json({ success: true, msg: 'Image uploaded succesfully'})
//         }else{
//             return res.json({success:false, msg:"Image not uploaded"})
//         }
//     } catch (error) {
//         console.log(error)
//         return res.json({success:false, msg:error.msg})
//     }
// }

// export default addItem;