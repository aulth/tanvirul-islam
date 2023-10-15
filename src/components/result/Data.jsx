import React from 'react'

const Data = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                <div className='flex flex-col gap-1'>
                    <div>
                        <span className='font-semibold'>Name: </span>
                        <span className=''>Mohd Noman</span>
                    </div>
                    <div>
                        <span className='font-semibold'>Father&apos;s Name: </span>
                        <span className=''>Mohd Samiullah</span>
                    </div>
                    <div>
                        <span className='font-semibold'>DOB: </span>
                        <span className=''>30/02/2003</span>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div>
                        <span className='font-semibold'>Roll No: </span>
                        <span className=''>12345</span>
                    </div>
                    <div>
                        <span className='font-semibold'>Course: </span>
                        <span className=''>Molvi</span>
                    </div>
                    <div>
                        <span className='font-semibold'>Exam: </span>
                        <span className=''>Half Yearly</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Data