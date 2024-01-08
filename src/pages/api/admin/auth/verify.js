import jwt from 'jsonwebtoken'

const verify = async (req, res) => {
    const JWTSECRET = "HELLO"
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        let {authtoken} = req.body;
        console.log(authtoken)
        if (!authtoken) {
            return res.json({ success: false, msg: 'token not provided' });
        }
        let { id } = jwt.verify(authtoken, JWTSECRET);
        if (!id) {
            return res.json({ success: false, msg: 'unauthorized' });
        }
        return res.status(200).json({ success: true, msg: 'Verified', authtoken: authtoken })
    } catch (error) {
        return res.json({ success: false, msg: "Verification failed" })
    }
}

export default verify;