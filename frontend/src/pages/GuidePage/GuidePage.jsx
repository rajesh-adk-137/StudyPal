import React from 'react';
import { Link } from 'react-router-dom';
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { CopilotPopup } from "@copilotkit/react-ui";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Navbar from '../../components/Navbar'; // Import the Navbar component

const longParagraph = "This is a sample paragraph. It contains multiple sentences. Each sentence is separated by a period. This paragraph will be broken down into points based on the sentence breaks. The points will be displayed in an ordered list. Each point will be a list item. The list items will be styled using Tailwind CSS classes."

const GuidePage = () => {
  const points = longParagraph.split(". ");

  return (
    <div className="bg-black min-h-screen">
      <Navbar /> {/* Include the Navbar component here */}
      {/* <div className="bg-black text-white">Copilotkit testing</div> */}
      <CopilotKit url="http://localhost:5174/api">
        <div style={{ "--copilot-kit-primary-color": "#7D5BA6" }}>
          {/* Homepage structure */}
          <CopilotPopup
            instructions={
              "Help the user manage a todo list. If the user provides a high level goal, " +
              "break it down into a few specific tasks and add them to the list"
            }
            defaultOpen={false}
            labels={{
              title: "Study Guide Copilot",
              initial: "Hi you! 👋 I can help you with the questions?",
            }}
            clickOutsideToClose={false}
          />

          {/* Headings */}
          <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-green-400">Quick Revision Material</h1>
            <p className="text-lg text-[#aaabc4] text-center mb-8">
              Prepare for the topic by studying from our intelligently created revision materials. After revising, you may prepare more with our MCQs.
            </p>

            {/* Points */}
            <div className="bg-gradient-to-r from-[#0055b8] to-black p-8 rounded-lg shadow-md">
              <ol className="space-y-4">
                {points.map((point, index) => (
                  <li key={index} className="text-lg font-medium bg-white p-4 rounded-md shadow text-black">
                    {point}
                  </li>
                ))}
              </ol>
            </div>

            {/* Button */}
            <div className='flex flex-row gap-10 justify-center mt-8'>
              <Link to="/">
                <button className='bg-[#171a8d] text-[#5ce1ff] font-bold px-5 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-[#0f0e69] hover:shadow-lg'>
                  <span>Practice MCQs</span>
                  <MdKeyboardDoubleArrowRight className="text-xl" />
                </button>
              </Link>
              <button className='bg-[#4fe331] text-black font-bold px-5 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-[#3fb427] hover:shadow-lg'>
                <span>Vote on Quine</span>
                <MdKeyboardDoubleArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </CopilotKit>
    </div>
  )
}

export default GuidePage;
