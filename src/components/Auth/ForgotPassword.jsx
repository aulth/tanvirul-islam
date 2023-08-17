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
        if (otp) {
            setOtpLabel("green", "New otp sent to your email")
        }
        console.log(newOtp);
        setOtp(newOtp);
        //send otp;
    }
    const handleOnVerifyOTP = async (e) => {
        e.preventDefault();
        if (data.otp != otp) {
            setOtpLabel("red", "Incorrect otp")
            return;
        }
        setOtpLabel("green", "OTP verified");
        setOtpVerified(true);
    }
    const setOtpLabel = (color, text) => {
        let otpLabel = document.querySelector('.otp-label');
        otpLabel.classList.remove(`text-${color == 'red' ? 'green' : 'red'}-500`)
        otpLabel.classList.add(`text-${color}-500`);
        otpLabel.innerText = text;
    }
    const handleOnSavePassword = async (e) => {
        e.preventDefault();
        if (!data.password) {
            alert("Please enter password");
            return;
        }
        setPasswordSaved(true)
        //save password to database;
    }
    return (
        <>
            <section class="md:bg-gray-50 bg-white dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center md:px-6  md:py-8 px-3 py-4 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg md:shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        {
                            !passwordSaved &&
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Reset your password
                                </h1>
                                <form class="space-y-4 md:space-y-4" onSubmit={(e) => { e.preventDefault() }} action="#">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" required={true} name="email" disabled={otp} id="email" onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                    </div>
                                    {!otp &&
                                        <button type="submit" onClick={handleOnSendOtp} class="w-full text-white  focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#46a999]">Send OTP</button>
                                    }
                                    {
                                        otp &&
                                        <>
                                            <div className='relative'>
                                                <label for="otp" class="block otp-label mb-2 text-sm font-medium text-green-500 dark:text-white">OTP sent to your email</label>
                                                <input type="text" name="otp" id="otp" onChange={handleOnChange} disabled={otpVerified} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="XXXX" required="" />
                                                <button onClick={handleOnSendOtp} disabled={otpVerified} className="md:h-[2.3rem] h-[2.6rem] absolute  right-0.5 rounded-r-lg  bottom-0.5 px-2 bg-gray-200 flex justify-center items-center">Resend</button>
                                            </div>
                                            {
                                                !otpVerified &&
                                                <button type="button" onClick={handleOnVerifyOTP} class="w-full text-white  focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#46a999]">Verify</button>
                                            }
                                        </>
                                    }
                                    {
                                        otpVerified &&
                                        <>
                                            <div className='relative'>
                                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                <input type={showPass ? 'text' : 'password'} onChange={handleOnChange} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                                <button onClick={(e) => { e.preventDefault(); setShowPass(pass => !pass) }} className="md:h-[2.3rem] h-[2.6rem] w-10 absolute  right-0.5 rounded-r-lg  bottom-0.5 bg-gray-200 flex justify-center items-center">
                                                    {showPass ? <BsEyeSlash /> : <BsEye />}
                                                </button>
                                            </div>
                                            <button type="button" onClick={handleOnSavePassword} class="w-full text-white  focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#46a999]">Save Password</button>
                                        </>
                                    }


                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don&apos;t have an account yet? <Link href="/auth/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                    </p>
                                    <Link href="/auth/forgot-password" class="text-sm text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                </form>
                            </div>
                        }
                        {
                            passwordSaved &&
                            <div class="p-6 space-y-2 md:space-y-2 sm:p-8">
                                <h2 class="text-xl font-bold leading-tight text-center tracking-tight text-green-500 md:text-2xl dark:text-white">
                                    Congratulations!
                                </h2>
                                <h2 class="font-semibold  text-center leading-tight tracking-tight text-gray-600 dark:text-white">
                                    Your password has been resetted successfully
                                </h2>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword