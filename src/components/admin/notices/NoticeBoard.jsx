import React, { useState, useEffect } from 'react'
import { BiSave } from 'react-icons/bi'
import dynamic from 'next/dynamic';
import { BsPencil } from 'react-icons/bs'
import 'react-quill/dist/quill.snow.css';
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '@/components/Spinner';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})
const NoticeBoard = () => {
    const [processing, setProcessing] = useState(false)
    const [data, setData] = useState('')
    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{
                'color': [
                    "#FF4136", // Red
                    "#FF851B", // Orange
                    "#FFDC00", // Yellow
                    "#2ECC40", // Green
                    "#0074D9", // Blue
                    "#001f3f", // Navy
                    "#7FDBFF", // Sky Blue
                    "#F012BE", // Magenta
                    "#B10DC9", // Purple
                    "#85144b", // Maroon
                    "#39CCCC", // Teal
                    "#3D9970", // Olive
                    "#2E2E2E", // Dark Gray
                    "#AAAAAA", // Gray
                    "#F5F5F5", // Light Gray
                    "#FF6F61", // Coral
                    "#A463F2", // Lavender
                    "#FFA07A", // Light Salmon
                    "#40E0D0", // Turquoise
                    "#C71585", // Medium Violet Red
                    "#8B0000", // Dark Red
                    "#FFD700", // Gold
                    "#FF1493", // Deep Pink
                    "#7CFC00", // Lawn Green
                    "#4169E1", // Royal Blue
                    "#800080", // Purple
                    "#008080", // Teal
                    "#696969", // Dim Gray
                    "#DCDCDC", // Gainsboro
                    "#F08080", // Light Coral
                    "#DA70D6", // Orchid
                    "#FF6347", // Tomato
                    "#7B68EE", // Medium Slate Blue
                    "#20B2AA", // Light Sea Green
                    "#DAA520", // Golden Rod
                    "#00CED1", // Dark Turquoise
                    "#F4A460", // Sandy Brown
                    "#BA55D3", // Medium Orchid
                    "#FFC0CB", // Pink
                    "#00FA9A", // Medium Spring Green
                    "rgb(6,182,212)",
                    "rgb(248,113,113)"
                ]
            },
            {
                'background': [
                    "#FF4136", // Red
                    "#FF851B", // Orange
                    "#FFDC00", // Yellow
                    "#2ECC40", // Green
                    "#0074D9", // Blue
                    "#001f3f", // Navy
                    "#7FDBFF", // Sky Blue
                    "#F012BE", // Magenta
                    "#B10DC9", // Purple
                    "#85144b", // Maroon
                    "#39CCCC", // Teal
                    "#3D9970", // Olive
                    "#2E2E2E", // Dark Gray
                    "#AAAAAA", // Gray
                    "#F5F5F5", // Light Gray
                    "#FF6F61", // Coral
                    "#A463F2", // Lavender
                    "#FFA07A", // Light Salmon
                    "#40E0D0", // Turquoise
                    "#C71585", // Medium Violet Red
                    "#8B0000", // Dark Red
                    "#FFD700", // Gold
                    "#FF1493", // Deep Pink
                    "#7CFC00", // Lawn Green
                    "#4169E1", // Royal Blue
                    "#800080", // Purple
                    "#008080", // Teal
                    "#696969", // Dim Gray
                    "#DCDCDC", // Gainsboro
                    "#F08080", // Light Coral
                    "#DA70D6", // Orchid
                    "#FF6347", // Tomato
                    "#7B68EE", // Medium Slate Blue
                    "#20B2AA", // Light Sea Green
                    "#DAA520", // Golden Rod
                    "#00CED1", // Dark Turquoise
                    "#F4A460", // Sandy Brown
                    "#BA55D3", // Medium Orchid
                    "#FFC0CB", // Pink
                    "#00FA9A", // Medium Spring Green
                    "rgb(6,182,212)",
                    "rgb(248,113,113)"
                ]
            }],
            ['link', 'code-block'],
            ['clean'],
            [{ 'direction': 'rtl' }],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    }
    const handleOnContentChange = (e) => {
        setData(e);
    }

    const handleSave = async () => {
        setProcessing(true);
        const res = await fetch("/api/admin/notice/upload", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ description: data, adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        const json = await res.json()
        if (json.success) {
            toast.success(json.msg);
        } else {
            toast.error(json.msg);
        }
        setProcessing(false)
    }
    const fetchNotice = async () => {
        const res = await fetch("/api/admin/notice/get", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        const json = await res.json()
        if (json.success) {
            setData(json.notice[0].description)
        }
    }
    useEffect(() => {
        fetchNotice();
    }, [])

    return (
        <>
            <Toaster position='top-right' />
            <div className="w-full md:mt-0 mt-4 mb-10">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold flex gap-2 justify-end  items-center mb-2">Notice <BsPencil className='mt-1 text-lg shrink-0' /></h3>
                    {
                        !processing ?
                            <button onClick={handleSave} className="px-4  py-2 flex items-center gap-1 bg-green-500 text-white">
                                <BiSave className='shrink-0' />Save
                            </button> :
                            <Spinner />
                    }
                </div>
                <QuillNoSSRWrapper value={data} modules={modules} onChange={handleOnContentChange} className='h-64 ' theme="snow" />
            </div>
        </>
    )
}

export default NoticeBoard