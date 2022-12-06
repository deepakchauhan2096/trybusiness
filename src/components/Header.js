import React from 'react'
import Banner from './Banner'
import AboutTwo from './OurMission'
import Navbar from './Navbar'
import Capabilities from './Capabilities'
import OurLeader from './OurLeader'
import StoryTree from './StoryTree'
import Footer from './Footer'


const Header = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutTwo />  
            <Capabilities /> 
            <OurLeader />
            <StoryTree />
            <Footer />
        </div>
    )
}

export default Header