import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import leadership from '../assets/images/leadership.png'
import customersatisfaction from '../assets/images/customer-satisfaction.png'
import digitalstrategy from '../assets/images/digital-strategy.png'
import agiletransformation from '../assets/images/agile-transformation.png'
import taster from '../assets/images/taster.png'
import businesscoaching from '../assets/images/business-coaching.png'


const Capabilities = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])



    return (
        <section className="py-2">
            <div className="container my-5">
                <h1 className="line-yellow" data-aos="fade-up">OUR CAPABILITIES</h1>
                <div className="row">

                    <div className="col-6 col-xl-4 py-5">
                        <div className='paragraph capabilities-style paragraph-cap-mobile' data-aos="fade-left">
                            <img src={leadership} className="icons-capabilties" />
                            <p>Leadership</p>
                            <p>Coaching</p>
                        </div>
                    </div>

                    <div className="col-6 col-xl-4 py-5 ">
                        <div className='paragraph capabilities-style paragraph-cap-mobile' data-aos="fade-left">
                            <img src={customersatisfaction} className="icons-capabilties" />
                            <p>Customer</p>
                            <p>Experience</p>
                        </div>
                    </div>

                    <div className="col-6 col-xl-4 py-5">
                        <div className='paragraph capabilities-style paragraph-cap-mobile' data-aos="fade-left">
                            <img src={digitalstrategy} className="icons-capabilties" />
                            <p>Digital</p>
                            <p>Strategy</p>
                        </div>
                    </div>

                    <div className="col-6 col-xl-4 py-5">
                        <div className='paragraph capabilities-style paragraph-cap-mobile' data-aos="fade-left">
                            <img src={agiletransformation} className="icons-capabilties" />
                            <p>Agile</p>
                            <p>Transformation</p>
                        </div>
                    </div>

                    <div className="col-6 col-xl-4 py-5">
                        <div className='paragraph capabilities-style paragraph-cap-mobile' data-aos="fade-left">
                            <img src={taster} className="icons-capabilties" />
                            <p>Taster</p>
                            <p>Consulting</p>
                        </div>
                    </div>

                    <div className="col-6 col-xl-4 py-5">
                        <div className='paragraph capabilities-style paragraph-cap-mobile' data-aos="fade-left">
                            <img src={businesscoaching} className="icons-capabilties" />
                            <p>Business</p>
                            <p>Coaching</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Capabilities