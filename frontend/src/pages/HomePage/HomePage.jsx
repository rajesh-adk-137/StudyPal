import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Navbar from '../../components/Navbar';

const HomePage = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');

  const gradientStyle = {
    background: 'radial-gradient(circle, rgba(0,85,184,1) 0%, rgba(0,0,0,1) 55%)'
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleQualificationChange = (event) => {
    setSelectedQualification(event.target.value);
  };

  const handleAdditionalContextChange = (event) => {
    setAdditionalContext(event.target.value);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="container mx-auto p-8 rounded-lg shadow-md bg-white" style={gradientStyle}>
          <div className="px-16 py-20 rounded-lg shadow-md bg-gradient-to-r from-[#0055b8] to-black">
            <div className="text-center mb-12">
              <h1 className="text-6xl font-bold text-green-400">Your Study Guide</h1>
              <p className="text-xl text-white mt-6">Select your requirements below and get content for quick revision.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center">
              <div className="w-full md:w-1/3 px-6 mb-12 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 text-white">Subjects</h2>
                <select 
                  value={selectedSubject} 
                  onChange={handleSubjectChange} 
                  className="w-full border border-gray-300 rounded py-4 px-6 bg-white text-xl focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select a subject</option>
                  <option value="science">Physics</option>
                  <option value="math">Math</option>
                  <option value="history">History</option>
                  <option value="physics">Chemistry</option>
                  <option value="grammar">Grammar</option>
                </select>
              </div>
              <div className="w-full md:w-1/3 px-6 mb-12 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 text-white">Qualification</h2>
                <select 
                  value={selectedQualification} 
                  onChange={handleQualificationChange} 
                  className="w-full border border-gray-300 rounded py-4 px-6 bg-white text-xl focus:outline-none focus:border-indigo-500"
                >
                  <option value=""> Educational background</option>
                  <option value="primary">Primary</option>
                  <option value="middle_school">Middle School</option>
                  <option value="high_school">High School</option>
                  <option value="undergrad">Undergrad</option>
                  <option value="postgrad">Postgrad</option>
                </select>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="w-full md:w-1/3 px-6">
                {/* <h2 className="text-3xl font-bold mb-4 text-white text-center">Additional Context</h2> */}
                <textarea 
                  value={additionalContext} 
                  onChange={handleAdditionalContextChange} 
                  placeholder="Any additional information to share?" 
                  className="w-full border border-gray-300 rounded py-4 px-6 bg-white text-xl focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className='flex flex-row gap-6 justify-center'>
                <Link to="/guide">
                  <button className='bg-blue-500 text-white font-bold px-8 py-5 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg'>
                    <span className="text-xl">Generate Revision</span>
                    <MdKeyboardDoubleArrowRight className="text-3xl" />
                  </button>
                </Link>
                <Link to="/">
                  <button className='bg-green-500 text-white font-bold px-8 py-5 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-green-600 hover:shadow-lg'>
                    <span className="text-xl">Practice MCQs</span>
                    <MdKeyboardDoubleArrowRight className="text-3xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;