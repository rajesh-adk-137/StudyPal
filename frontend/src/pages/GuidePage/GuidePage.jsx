import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CopilotKit, useMakeCopilotReadable } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { CopilotPopup } from "@copilotkit/react-ui";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';
const GuidePage = () => {
  return (
    <>
      <CopilotKit url="http://localhost:5174/api">
        <GuidePageExtend />
      </CopilotKit>
    </>
  )
}
const GuidePageExtend = () => {
  const [guides, setGuides] = useState([""])

  useMakeCopilotReadable(
    "This is the list of guides points: " + JSON.stringify(guides)
  );
  // const points = longParagraph.split(". ");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming you might want to use query params, otherwise remove `params`
        const params = {
          key: "value" // Example params, replace or remove as necessary
        };

        // Only the URL is necessary if no params are sent
        const response = await axios.get('http://localhost:5174/getGuide', { params });

        if (response.status === 200) {
          console.log("Data fetched successfully.");
          console.log("Response from guide page:", response.data);

          setGuides(JSON.parse(response.data.revision))
          console.log(guides)
        } else {
          console.error("Fetch failed", response.statusText);
        }
      } catch (err) {
        console.log("Error", err);
      }
    };

    fetchData();
  }, [])

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className='bg-black text-white'>
        <Navbar />

      </div>
      {/* <div className="bg-black text-white">Copilotkit testing</div> */}
      {/* <CopilotKit url="http://localhost:5174/api"> */}
      <div style={{ "--copilot-kit-primary-color": "#7D5BA6" }}>

        <CopilotPopup
          instructions={
            "Help the user understand revision or guide points., " +
            "Here point number is equivalent to content of index+1 element of array."
          }
          defaultOpen={false}
          labels={{
            title: "StudyPal Copilot",
            initial: "Hi you! 👋 I can help you with the guides?",
          }}
          clickOutsideToClose={false}
        />

        {/* Headings */}
        <div className="container mx-auto py-8 px-14 md:px-24">
          <div className='bg-white p-5 mb-5 rounded-md shadow'>
            <h1 className="text-4xl font-bold text-center mb-2 text-green-500">Quick Revision Material</h1>
            <hr />
            <p className="text-lg text-[#8788a3] text-center mb-4 mt-2">
              Prepare for the topic by studying from our intelligently created revision materials. After revising, you may prepare more with our MCQs.
            </p>

          </div>

          {/* Points */}
          <div className=" rounded-lg ">
            <ol className="space-y-4">
              {guides.map((point, index) => (
                <li key={index} className="text-lg font-medium bg-white p-4 rounded-md shadow text-black">
                  {point}
                </li>
              ))}
            </ol>
          </div>

          {/* Button */}
          <div className='flex flex-row gap-10 justify-center mt-8'>
            <Link to="/mcq">
              <button className='bg-[#171a8d] text-[#5ce1ff] font-bold px-5 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-[#0f0e69] hover:shadow-lg'>
                <span>Practice MCQs</span>
                <MdKeyboardDoubleArrowRight className="text-xl" />
              </button>
            </Link>
            <Link to='/home'>
              <button className='bg-[#4fe331] text-black font-bold px-5 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-[#3fb427] hover:shadow-lg'>
                <FaHome className="text-xl" />
                <span>Back to Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* </CopilotKit> */}
      <Footer />
    </div>
  )
}

export default GuidePage;
