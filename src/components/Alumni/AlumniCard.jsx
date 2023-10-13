import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { MdVerified } from "react-icons/md"
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import Image from "next/image"
import uniqolor from 'uniqolor'
const AlumniCard = ({data}) => {
    let color = uniqolor(data.name);
    color = color.color;
    return (
        <div>
            <div className="rounded-xl border shadow p-2 relative">
                <div className={`w-20 h-20 rounded-full mx-auto mt-4 relative border-b-2 border-r-2 overflow-hidden`} style={{ borderRadius: '75%', borderColor:color }}>
                    <Image src={data.avatar} alt="alumni" layout="fill" objectFit="cover" className="rounded-full border-2 border-white" />
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-center mt-2 inline">{data.name}{data.verified&&<MdVerified className="text-sm text-blue-500 inline shrink-0 ml-1 -mt-0.5" />} </h3>
                    <h4 className="font-semibold  text-sm text-center" style={{color:color}}>{data.profession}</h4>
                    <p className="text-center text-sm text-gray-600">{data.bio}</p>
                    <p className="text-center text-[12px] text-black font-semibold mt-1">({data.from} - {data.to})</p>
                    <ul className="w-full flex gap-2 justify-center items-center my-2 text-2xl">
                        <li className="shrink-0 text-xl">
                            <a href={'https://facebook.com/'+data.facebook} target='_blank' rel='nofollow'>
                                <BsFacebook />
                            </a>
                        </li>
                        <li className="shrink-0">
                            <a href={'https://instagram.com/'+data.instagram}  target='_blank' rel='nofollow'>
                                <AiFillInstagram />
                            </a>
                        </li>
                        <li className="shrink-0 text-xl">
                            <a href={'https://wa.me/+91'+data.whatsapp}  target='_blank' rel='nofollow'>
                                <IoLogoWhatsapp />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AlumniCard