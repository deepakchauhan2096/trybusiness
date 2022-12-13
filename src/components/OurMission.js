import React, { useEffect, useState } from "react";
import Aos from "aos";
import about1 from "../assets/images/group-people.png";
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'
import "aos/dist/aos.css"
import { Link } from "gatsby";



const AboutTwo = () => {



  const [Counter, setCounter] = useState();



  useEffect(() => {
    Aos.init({
      duration: 1000, offset: 100, delay: 200
    });
  }, [])





  // console.log(this.state.startCounter);
  return (
    <section style={{ background: "#f8f9fa", height: "auto" }} >
      <div className="container mission-container">
        <div className="row">
          <div className="col-md-6 col-xl-5">
            <div className="about-content" >
              <h1 className="line-green" data-aos="fade-up">OUR MISSION</h1>
              <p className='paragraph paragraph-mobile' data-aos="fade-up">
                Our mission is to discover, preserve and distribute knowledge and capabilities to enable the next generation of organisations to be capable and resilient.
              </p>
              {/* <Link to="/about/" className="btn btn-danger">
                Learn More
              </Link> */}
              <Link to="/about/" className="try-btn">
                <div className="button_slide slide_down">Learn More</div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-xl-5 position-relative" style={{}}>
            <div className="our_mission">
              <img src={about1} alt="about" className="image_one" />
              <span className="text">
                <div>Trusted by</div>
                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                  <strong style={{ display: "flex", flexDirection: "row" }}>{Counter && <CountUp start={0} end={50} duration={2} delay={0} />}+</strong>
                </ScrollTrigger>
                <div>Organisations</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTwo
