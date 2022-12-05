import React from 'react'
import Banner from './Banner'
import AboutTwo from './OurMission'
import Navbar from './Navbar'
import Capabilities from './Capabilities'
import OurLeader from './OurLeader'


const Header = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutTwo />  
            <Capabilities /> 
            <OurLeader />
        </div>
    )
}

export default Header