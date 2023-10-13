import Spinner from '@/components/Spinner';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const ImageUpload = ({getAllImages}) => {
    const [data, setData] = useState({ title: "", url: ""});
    const [processing, setProcessing] = useState(false);
    const [uploading, setUploading] = useState(false);
    const handleUpload = async () => {
        if (!data.title) {
            return toast.error("Please write title")
        }
        setUploading(true);
        const res = await fetch('/api/admin/gallery/upload', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({title:data.title, url:data.url, adminPin:process.env.NEXT_PUBLIC_ADMIN_PIN})
        })
        const json = await res.json();
        if (json.success) {
            toast.success(json.msg);
        } else {
            toast.error(json.msg)
        }
        setData({ title: "", url: "" });
        setUploading(false)
        getAllImages();
    }
    const setTitle = (e) => {
        e.preventDefault();
        setData({ ...data, title: e.target.value })
    }
    const getUrl = async (e) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            const files = e.target.files;
            setProcessing(true)
            let data = new FormData();
            data.append('file', files[0]);
            data.append('upload_preset', 'myspaceitem');
            let response = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY, {
                method: "POST",
                body: data
            })
            let file = await response.json();
            setData({ ...data, url: file.url });
            setProcessing(false)
        }
    }
    return (
        <>
            <Toaster />
            {
                !processing &&
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-16 border border-gray-300 border-dashed rounded cursor-pointer bg-gray-50">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                    </div>
                    <input id="dropzone-file" onChange={getUrl} type="file" className="hidden" accept='/image*' />
                </label>
            }
            {
                processing &&
                <div className="w-full flex justify-center">
                    <Spinner/>
                </div>
            }
            {
                data.url &&
                <div className="full flex gap-1 items-center mt-2 text-sm">
                    <input onChange={setTitle} placeholder='Title' name='title' type="text" className='w-full focus:outline-none border rounded focus:border-blue-400 p-1' />
                    {
                        !uploading?
                        <button onClick={handleUpload} className="px-2 py-1 text-white bg-green-500 rounded">Save</button>
                        :<Spinner/>
                    }
                </div>
            }
        </>
    )
}

export default ImageUpload