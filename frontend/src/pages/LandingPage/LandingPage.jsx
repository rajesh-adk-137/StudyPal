import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'

import Footer from '../../components/Footer'
import FeaturesSection from '../../components/Feature'

const LandingPage = () => {
    return (
        <>
            <div className='bg-black text-white h-screen'>
                <div>
                    <Navbar />
                </div>
                <HeroSection/>
            </div>
            <div className='bg-black text-white'>
                <FeaturesSection/>
            </div>
            <Footer/>
        </>
    )
}

export default LandingPage