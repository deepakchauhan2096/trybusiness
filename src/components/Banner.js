import React, { useEffect } from 'react'
import homebanner from '../assets/images/banner3.jpg'
import Aos from "aos";
import "aos/dist/aos.css"

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 90000 });
    }, [])


    return (
        <section>
            <div className='banner'>
                <img src={homebanner} alt="trybusiness banner" />
                <div className='text-contain'>
                    <div className="div" data-aos="fade-down">
                        <span >
                            We help Next-generation
                        </span>
                        <span>
                            Organisations
                        </span>
                        <span>
                            To stay
                        </span>
                        <span>
                            Capable and resilient
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner