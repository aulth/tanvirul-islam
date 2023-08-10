import React, { useState } from 'react'
import { MdEmail, MdPassword } from "react-icons/md";
import Link from 'next/link';
import { BsEye, BsEyeSlash } from "react-icons/bs";

const ForgotPassword = () => {
    const [showPass, setShowPass] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpVerified, setOtpVerified] = useState(false);
    const [passwordSaved, setPasswordSaved] = useState(false);
    const [data, setData] = useState({});
    function generateOTP() {
        const digits = '0123456789';
        let otp = '';

        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            otp += digits[randomIndex];
        }

        return otp;
    }
    const handleOnChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data)
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("login");
    }
    const handleOnSendOtp = async (e) => {
        e.preventDefault();
        if (!data.email) {
            return;
        }
        let newOtp = generateOTP();
        console.log(newOtp);
        setOtp(newOtp);
        //send otp;
    }
    const handleOnVerifyOTP = async (e) => {
        e.preventDefault();
        if (data.otp != otp) {
            alert("Incorrect OTP");
            return;
        }
        setOtpVerified(true);
    }
    const handleOnSavePassword = async (e) => {
        e.preventDefault();
        if (!data.password) {
            alert("Please enter password");
            return;
        }
        alert("Password resetted successfully");
        setPasswordSaved(true)
        //save password to database;
    }
    return (
        <div className="container mx-auto p-8 md:h-[calc(100vh-64px)] md:flex md:justify-center md:items-center">
            <div className="w-full md:w-[468px]  mx-auto md:border md:p-4 md:rounded md:shadow">
                {
                    !passwordSaved &&
                    <>
                        <h2 className="font-bold text-2xl">Forgot Password</h2>
                        <p className="font-semibold text-sm text-gray-500 mt-1">Reset your password to regain access and resume using our app.</p>

                        <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col gap-3 mt-4">
                            <div className="w-full flex items-center border rounded">
                                <MdEmail className="text-sm p-3 w-10 bg-gray-200 h-10 rounded-l" /> <input type="email" disabled={otp} onChange={handleOnChange} placeholder="Email" name="email" className="h-10 pl-2 w-full focus:outline-none focus:border-y focus:border-r border-gray-200" />
                            </div>
                            {
                                !otp &&
                                <div className="w-full flex items-center border rounded">
                                    <button type="button" onClick={handleOnSendOtp} className="h-10 pl-2 w-full font-semibold bg-[#46a999] text-white rounded">Send OTP</button>
                                </div>
                            }
                            {
                                otp &&
                                <>
                                    <div className="w-full flex items-center border rounded">
                                        <span className="text-[0.75rem] p-3 w-10 bg-gray-200 h-10 flex items-center rounded-l" >OTP </span>
                                        <input type="text" onChange={handleOnChange} disabled={otpVerified} placeholder="Otp" name="otp" className="h-10 pl-2 w-full focus:outline-none focus:border focus:border-r border-gray-200" />
                                        <button onClick={handleOnSendOtp} disabled={otpVerified} className="text-sm p-3 w-20 bg-gray-200 h-10 flex items-center rounded-r" >Resend </button>
                                    </div>
                                    {
                                        !otpVerified &&
                                        <div className="w-full flex items-center border rounded">
                                            <button type="button" onClick={handleOnVerifyOTP} className="h-10 pl-2 w-full font-semibold bg-[#46a999] text-white rounded">Verify</button>
                                        </div>
                                    }
                                </>
                            }
                            {
                                otpVerified &&
                                <>
                                    <div className="w-full flex items-center border rounded">
                                        <MdPassword className="text-sm p-3 w-10 bg-gray-200 h-10 rounded-l" /> <input type={showPass ? 'text' : 'password'} onChange={handleOnChange} placeholder="Set Password" name="password" className="h-10 pl-2 w-full focus:outline-none focus:border-y border-gray-200" />
                                        <button onClick={(e) => { e.preventDefault(); setShowPass(pass => !pass) }} className="h-10 w-10 bg-gray-200 flex justify-center items-center">
                                            {showPass ? <BsEyeSlash /> : <BsEye />}
                                        </button>
                                    </div>
                                    <div className="w-full flex items-center border rounded">
                                        <button type="button" onClick={handleOnSavePassword} className="h-10 pl-2 w-full font-semibold bg-[#46a999] text-white rounded">Update Password</button>
                                    </div>
                                </>
                            }
                        </form>
                    </>
                }
                {
                    passwordSaved &&
                    <div className="flex justify-center flex-col gap-1 items-center p-4">
                        <h3 className="font-bold uppercase">Congratulations!</h3>
                        <h4 className="font-semibold text-center">Your password has been successfully resetted</h4>
                    </div>
                }
            </div>
        </div>
    )
}

export default ForgotPassword