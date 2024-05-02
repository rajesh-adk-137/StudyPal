import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            {/* Homepage structure */}
            <div className="bg-white p-8 rounded shadow-md">
                <div className="bg-black text-white py-4 text-center">
                    <h1 className="text-3xl font-bold">Your Study Guide</h1>
                    <p className="mt-2">Select your requirements below and get content for quick revision.</p>
                </div>
                <div className="container mx-auto mt-8">
                    <div className="flex justify-center">
                        <div className="w-full md:w-1/3 px-4">
                            <h2 className="text-xl font-bold mb-2">Select Category</h2>
                            <select className="w-full border border-gray-300 rounded py-2 px-3 mb-4 focus:outline-none focus:border-indigo-500">
                                <option value="">Select Category</option>
                                <option value="science">Science</option>
                                <option value="math">Math</option>
                                <option value="history">History</option>
                                <option value="physics">Physics</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/3 px-4">
                            <h2 className="text-xl font-bold mb-2">Select Qualifications</h2>
                            <select className="w-full border border-gray-300 rounded py-2 px-3 mb-4 focus:outline-none focus:border-indigo-500">
                                <option value="">Select Qualifications</option>
                                <option value="primary">Primary</option>
                                <option value="middle_school">Middle School</option>
                                <option value="high_school">High School</option>
                                <option value="undergrad">Undergrad</option>
                                <option value="above">Above</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="additionalContext" className="block text-xl font-bold mb-2">Additional Context</label>
                        <textarea id="additionalContext" className="w-full border border-gray-300 rounded py-2 px-3 mb-4 focus:outline-none focus:border-indigo-500"></textarea>
                    </div>
                    <div className="text-center">
                        <Link to="/guide">
                            <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700">Generate Revision</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* End of Homepage structure */}
        </>
    )
}

export default HomePage;
