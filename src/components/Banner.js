import React ,{ useEffect , useState} from 'react'
import homebanner from '../assets/images/banner3.jpg'
import ScrollTrigger from 'react-scroll-trigger'
import Aos from "aos";
import "aos/dist/aos.css"


const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 90000 });
    }, [])

    const [Counter, setCounter] = useState();


    return (
        <section>
            <div className='banner'>
                <img src={homebanner} alt="trybusiness banner" />
                <div className='text-contain'>
                    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                        {Counter && <div data-aos="fade-down">
                            <span >
                                We help the Next Generation
                            </span>
                            <span>
                                Organisations to stay Capable and
                            </span>
                            <span>
                                Resilient
                            </span>
                        </div>}
                    </ScrollTrigger>
                </div>
            </div>
        </section>
    )
}

export default Banner