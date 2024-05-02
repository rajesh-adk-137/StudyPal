import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import heroImage from "../assets/images/learning-with-ai.png";

const HeroSection = () => {
    const gradientStyle = {
        background: 'rgb(0,85,184)',
        background: 'radial-gradient(circle, rgb(0,85,184,1) 0%, rgba(0,0,0,1) 55%)' // Radial gradient
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 m-10 h-[80%] md:px-20'>
            <div className=' flex justify-center items-center col-span-2'>
                <div>
                    <h1 className='text-green-400 text-xl tracking-widest'>LEARNING WITH AI</h1>
                    <h1 className='text-5xl md:text-8xl font-bold my-3'>AMAZINGLY SIMPLE</h1>
                    <p className='text-xl md:text-2xl text-[#aaabc4] my-10'>We designed with CopilotKit to improve your learning performance by explaning questions and their solutions and provide ai assiistant to generate your daily routine.</p>
                    <div className='flex flex-row gap-10'>
                        <button className='bg-[#171a8d] text-[#5ce1ff] font-bold px-5 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-[#0f0e69] hover:shadow-lg'>
                            <span>TRY IT NOW</span>
                            <MdKeyboardDoubleArrowRight className="text-xl" />
                        </button>
                        <button className='bg-[#4fe331] text-black font-bold px-5 py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-[#3fb427] hover:shadow-lg'>
                            <span>VOTE ON QUINE</span>
                            <MdKeyboardDoubleArrowRight className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-span-3 flex justify-center items-center ' style={gradientStyle}>
                <div className='p-2'> {/* Gradient border */}
                    <img src={heroImage} alt="Hero Image" className="w-full h-auto rounded-lg " /> {/* Responsive and rounded image */}
                </div>
            </div>

        </div>
    )
}

export default HeroSection