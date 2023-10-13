import React, { useState } from 'react'
import Result from './Result';

const CheckResult = () => {
    const [data, setData] = useState({ rollNumber: "", year: "", course: "", class: "" })
    const handleChange = (e)=>{
        e.preventDefault();
        setData({...data, [e.target.name]:e.target.value})
    }
    return (
        <>
            <div className="flex flex-wrap justify-center p-4">
                <input type="text" placeholder='Roll No' className="border focus:border-blue-500 focus:outline-none p-2" />
                <select name="year" onChange={handleChange} id="year" className="px-4 py-2 border focus:outline-none focus:border-blue-500">
                    <option value="">Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                </select>
                <select name="course" onChange={handleChange}  id="course" className="px-4 py-2 border focus:outline-none focus:border-blue-500">
                    <option value="">Course</option>
                    <option value="molvi">Molvi</option>
                    <option value="hifz">Hifz</option>
                    <option value="qirat">Qirat</option>
                    <option value="nursery">Nursery</option>
                </select>
                <select name="term" onChange={handleChange}  id="term" className="px-4 py-2 border focus:outline-none focus:border-blue-500">
                    <option value="">Term</option>
                    <option value="half">Half Yearly</option>
                    <option value="annual">Annual</option>
                </select>
                {
                    data.course == "nursery" &&
                    <select name="class"  onChange={handleChange} id="class" className="px-4 py-2 border focus:outline-none focus:border-blue-500">
                        <option value="">Class</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                }
                <button className="px-4 py-2  text-white bg-[#46a999]">
                    Search
                </button>
            </div>
            <Result/>
        </>
    )
}

export default CheckResult