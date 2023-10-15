import { createTransport } from "nodemailer";
const key = process.env.key;
const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.email,
        pass: key
    },
});

const sendContactForm = async (req, res) => {
    const {adminPin, data } = req.body;
    if(adminPin!=process.env.NEXT_PUBLIC_ADMIN_PIN){
        return 	res.status(401).json({success:false, msg:"Unauthorized"});
    }
    const message = `<div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px; text-align: center;"> <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"> <h1 style="color: #46a999; font-size: 24px; margin: 0;">Your OTP Verification Code</h1> <p style="font-size: 16px; color: #555;">Hello,</p> <p style="font-size: 18px; color: #333; margin: 0;">Your OTP verification code is:</p> <p style="font-size: 36px; color: #46a999; margin: 5px 0;">${data.otp}</p> <p style="font-size: 16px; color: #555;">This OTP is valid for a short period of time.</p> <p style="font-size: 16px; color: #555;">Please do not share this OTP with anyone.</p> <p style="font-size: 16px; color: #555;">If you did not request this OTP, please ignore this email.</p> </div> <p style="font-size: 16px; color: #555; margin-top: 20px;">Best regards,<br>Darul Uloom Ahle Sunnat Tanvirul Islam</p> </div>`
    const mailOption = {
        from: `DUATI <mohdusman.developer@gmail.com>`,
        to: data.email.toLowerCase(),
        subject:`OTP | Reset Password | Darul Uloom Ahle Sunnat Tanvirul Islam`,
        html: message
    };
    transporter.sendMail(mailOption, (err, info) => {
        if (err) {
            return res.json({success:false, msg:err.message})
        }
        if (info.rejected && info.rejected.length > 0) {
            console.error("Email was rejected for the following recipients:", info.rejected);
            return res.json({ success: false, msg: "Email rejected for some recipients" });
        }
        return res.json({ success: true, info, msg:"OTP sent" });
    });

}
export default sendContactForm;