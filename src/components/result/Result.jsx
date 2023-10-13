import React from 'react'
import Data from './Data'

const subjects = [
    { name: "Math", marks: 100, obtained: 90 },
    { name: "Science", marks: 95, obtained: 88 },
    { name: "History", marks: 80, obtained: 75 },
];
const totalMarks = subjects.reduce((acc, subject) => acc + subject.marks, 0);
const totalObtained = subjects.reduce((acc, subject) => acc + subject.obtained, 0);
const overallPercentage = (totalObtained / totalMarks) * 100;
const overallResult = overallPercentage >= 50 ? "Pass" : "Fail";
const Result = () => {
    return (
        <div className="w-full p-4 text-sm">
            <Data />
            <div>
                <table className="w-full border mt-4">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 font-semibold text-left">Subject</th>
                            <th className="p-2 font-semibold text-left">Marks</th>
                            <th className="p-2 font-semibold text-left">Obtained</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((subject, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-2">{subject.name}</td>
                                <td className="p-2">{subject.marks}</td>
                                <td className="p-2">{subject.obtained}</td>
                            </tr>
                        ))}
                        <tr className="bg-gray-100">
                            <th className="p-2 font-semibold text-left">Total</th>
                            <th className="p-2 font-semibold text-left">{totalMarks}</th>
                            <th className="p-2 font-semibold text-left">{totalObtained}</th>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-4">
                    <p className="font-semibold">Result: {overallResult}</p>
                    <p>Percentage: {overallPercentage.toFixed(2)}%</p>
                </div>
            </div>
        </div>
    )
}

export default Result