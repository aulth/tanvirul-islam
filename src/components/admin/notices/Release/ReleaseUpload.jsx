import React, { useState } from 'react'
import { IKContext, IKUpload } from 'imagekitio-react';
const publicKey = process.env.NEXT_PUBLIC_imagekitPublicKey;
const urlEndpoint = process.env.NEXT_PUBLIC_imagekitUrlEndPoint;
const authenticationEndpoint = 'http://localhost:3000/api/imagekit/get';
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '@/components/Spinner';
import { BiSave } from 'react-icons/bi';
import { MdUploadFile } from 'react-icons/md';

const ReleaseUpload = ({fetchReleases}) => {
    const [uploaded, setUploaded] = useState(false);
    const [uploading, setUploading] = useState(false)
    const [data, setData] = useState({ title: "title1", document: "" });
    const [savedToDb, setSavedToDb] = useState(false)
    const handleChange = async (e) => {
        setData({...data, title:e.target.value})
    }
    const authenticator = async () => {
        const response = await fetch(authenticationEndpoint);
        const json = await response.json();
        const { signature, expire, token } = json;
        return { signature, expire, token }
    };
    const onError = (err) => {
        toast.error("Cover Photo Not Uploaded");
        console.log(err);
    };
    const onSuccess = async (res) => {
        setUploading(false);
        setUploaded(true);
        setData({ ...data, document: res.url, title: res.name });
    }
    const onUploadStart = evt => {
        setUploading(true)
        setUploaded(false);
        setSavedToDb(false)
    };
    const handleSave = async (e) => {
        e.preventDefault();
        setUploading(true);
        const res = await fetch("/api/admin/release/upload", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ title: data.title, document: data.document, adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        const json = await res.json()
        if (json.success) {
            toast.success(json.msg);
            fetchReleases();
        } else {
            toast.error(json.msg);
        }
        setUploading(false)
        setSavedToDb(true)
    }
    return (
        <>
            <Toaster position='top-right' />
            <div className="w-full">
                <h3 className="text-2xl font-bold flex gap-2 justify-start  items-center mb-2">Releases</h3>
                <div className="grid grid-cols-2">
                    <IKContext publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
                        <IKUpload onSuccess={onSuccess}
                            onError={onError}
                            onUploadStart={onUploadStart}
                        />
                    </IKContext>
                    <div className="flex justify-end">
                        {
                            !uploaded && uploading &&
                            <Spinner />
                        }
                    </div>
                </div>
                {
                    uploaded && !savedToDb &&
                    <form onSubmit={handleSave} className="flex justify-center items-center my-2">
                        <div className="w-full flex gap-1 border border-r-0">
                            <input type="text" required placeholder='Title' value={data.title} onChange={handleChange} className='border-none focus:outline-none w-[calc(100%-32px)] p-1 pl-2' />
                        {
                            uploading ?
                               <div className="h-8 flex justify-center items-center border-x pl-2 ">
                                 <Spinner />
                               </div> :
                                <button className="px-2  py-1 flex items-center gap-1 bg-green-500 border border-green-500 text-white">
                                    <MdUploadFile className='shrink-0' />Upload
                                </button>
                        }
                        </div>
                    </form>
                }
            </div>
        </>
    )
}

export default ReleaseUpload