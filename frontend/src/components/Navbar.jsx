import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar flex justify-center">
            <header className='w-[80%] h-14 flex justify-between text-white mt-2 items-center mx-5'>
                <Link to='/'> <div className="text-3xl font-[500] tracking-wider">
                    CopilotKit
                </div>
                </Link>
                <div>
                    <ul className='flex flex-row justify-center gap-3 md:gap-10 place-items-center'>
                        <Link to='/home'><li className='items-center font-[500] hover:text-blue-400'>HOME</li></Link>
                        <Link to='/dashboard'><li className='items-center font-[500] hover:text-blue-400'>DASHBOARD</li></Link>
                    </ul>
                </div>
                <div>
                    {/* <button className='bg-transparent rounded-xl w-20 h-8'>LOGIN</button> */}
                </div>
            </header>
            <div className='flex justify-center items-center'> 
                <button className='bg-gray-300 hover:bg-gray-400 text-black md:px-5 md:py-2 rounded-md md:flex items-center space-x-2 hidden'> 
                    <FaGithub />
                    <span>GitHub</span> 
                </button>
            </div>
        </div>
    )
}

export default Navbar