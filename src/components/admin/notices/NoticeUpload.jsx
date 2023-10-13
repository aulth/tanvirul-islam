import React, { useState } from 'react'

const NoticeUpload = () => {
    const [uploaded, setUploaded] = useState(false);
    const handleUpload = async () => {
        setUploaded(true);
    }
    return (
        <>
            <div className="w-full">
            <h3 className="text-2xl font-bold flex gap-2 justify-start  items-center mb-2">Releases</h3>
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-16 border border-gray-300 border-dashed rounded cursor-pointer bg-gray-50">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                    </div>
                    <input id="dropzone-file" onChange={handleUpload} type="file" className="hidden" accept='/pdf' />
                </label>
            </div>
            {
                uploaded &&
                <div className="full flex gap-1 items-center mt-2 text-sm">
                    <input type="text" className='w-full focus:outline-none border rounded focus:border-blue-400 p-1' />
                    <button className="px-2 py-1 text-white bg-green-500 rounded">Save</button>
                </div>
            }
        </>
    )
}

export default NoticeUpload