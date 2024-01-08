import jwt from 'jsonwebtoken'

const verify = async (req, res) => {
    const JWTSECRET = "HELLO"
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        let data = req.body;
        console.log(data)
        if(data.id!=process.env.adminId){
            return res.json({success:false, msg:'Incorrect id'})
        }
        if(data.password!=process.env.adminPassword){
            return res.json({success:false, msg:'Incorrect password'})
        }
        let authtoken = jwt.sign({ id: data.id }, JWTSECRET)
        return res.status(200).json({ success: true, msg: 'Verified', authtoken: authtoken})
    } catch (error) {
        return res.json({success:false, msg:"Verification failed"})
    }
}

export default verify;