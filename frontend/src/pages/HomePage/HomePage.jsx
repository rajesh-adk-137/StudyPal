import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CopilotKit, CopilotTask, useCopilotContext, useCopilotAction, useMakeCopilotDocumentReadable } from '@copilotkit/react-core';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const HomePage = () => {
  return (
    <>
      <CopilotKit url="http://localhost:5174/api">
        <HomePageExtend />
      </CopilotKit>
    </>
  )
}

const HomePageExtend = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');
  const [topicSummary, setTopicSummary] = useState('');
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();
  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleQualificationChange = (event) => {
    setSelectedQualification(event.target.value);
  };

  const handleAdditionalContextChange = (event) => {
    setAdditionalContext(event.target.value);
  };

  useMakeCopilotDocumentReadable("This is the subject, user qualification and additional information about subject for which summary has to be generated:" + JSON.stringify({
    "subject": selectedSubject,
    "qualification": selectedQualification,
    "additionalInfo": additionalContext,
  }));


  // const generateSummary = new CopilotTask({
  //   instructions: "Generate a revision summary based on subject, user qualification and additional information.",
  //   data: [
  //     {
  //       "subject": selectedSubject,
  //       "qualification": selectedQualification,
  //       "additionalInfo": additionalContext,
  //     }
  //   ],
  //   actions: [
  //     {
  //       name: "setMessage",
  //       description: "Set the summary.",
  //       argumentAnnotations: [
  //         {
  //           name: "summary",
  //           type: "string",
  //           description: "A short summary of given topic.",
  //           required: true,
  //         }
  //       ],
  //       implementation: async ({ summary }) => {
  //         setTopicSummary(summary);
  //       },
  //     }
  //   ],
  //   includeCopilotReadable: false, // Don't use current context
  //   includeCopilotActions: false, // Don't use current actions
  // });


  // const context = useCopilotContext();

  const generateRevision = async (e) => {
    const data= { selectedSubject, selectedQualification, additionalContext}

    setLoading(true);
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:5174/guide', data);

        if (response.status == 200) {
            console.log("data submitted successfully.");
            console.log(response)
        }
        else {
            console.error("submission failed", response.statusText);
        }
    } catch (err) {
        console.log("Error", err);
    }

    setLoading(false)
    navigate('/guide');
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="flex items-center justify-center bg-black">
        <div className="container mx-auto p-8 rounded-lg shadow-md bg-black">
          <div className="px-16 py-20 rounded-lg shadow-md bg-black">
            <div className="text-center mb-12">
              <h1 className="text-6xl font-bold text-green-400">Your Study Guide</h1>
              <p className="text-xl text-white mt-6">Select your requirements below and get content for quick revision.</p>
            </div>
            {loading == true && <p className=' text-gray-200 text-center text-2xl'>Loading...</p>}
            {loading == false && <>
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
                  {/* <Link to="/guide"> */}
                  <button className='bg-blue-500 text-white font-bold px-8 py-5 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg' onClick={generateRevision}>
                    <span className="text-xl">Generate Revision</span>
                    <MdKeyboardDoubleArrowRight className="text-3xl" />
                  </button>
                  {/* </Link> */}
                  {/* <Link to="/mcq">
                    <button className='bg-green-500 text-white font-bold px-8 py-5 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-green-600 hover:shadow-lg'>
                      <span className="text-xl">Practice MCQs</span>
                      <MdKeyboardDoubleArrowRight className="text-3xl" />
                    </button>
                  </Link> */}
                </div>
              </div>
            </>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
