import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar flex justify-center">
            <header className='w-[80%] h-16 flex justify-between text-white mt-2 items-center mx-5'>
                <Link to='/'> <div className="text-3xl font-[700] tracking-wider">
                    <span>Study</span><span className='text-blue-400'>Pal</span>
                </div>
                </Link>
                <div>
                    <ul className='flex flex-row justify-center gap-3 md:gap-10 place-items-center'>
                        <Link to='/mcq'><li className='items-center font-[500] hover:text-blue-400'>MCQ</li></Link>
                        <Link to='/home'><li className='items-center font-[500] hover:text-blue-400'>REVISION</li></Link>
                    </ul>
                </div>
                <div>
                    {/* <button className='bg-transparent rounded-xl w-20 h-8'>LOGIN</button> */}
                </div>
            </header>
            <div className='flex justify-center items-center'>
                <a href="https://github.com/rajesh-adk-137/StudyPal">
                    <button className='bg-gray-300 hover:bg-gray-400 text-black md:px-5 md:py-2 rounded-md md:flex items-center space-x-2 hidden'>
                        <FaGithub />
                        <span>GitHub</span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Navbar