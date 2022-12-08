import React, {useEffect, useState } from "react";
import CountUp from "react-countup";
import Aos from "aos";
import VisibilitySensor from "react-visibility-sensor";
import about1 from "../assets/images/group-people.png";
import trybusiness from "../assets/images/symbol-trybusinessagility-logo.png";
import "aos/dist/aos.css"
import { Link } from "gatsby";



const AboutTwo = () => {


   const [startCounter, setCounter] =useState(50);



  useEffect(() => {
    Aos.init({ duration: 1000, offset: 100, delay:200
    });
  }, [])





  // console.log(this.state.startCounter);
  return (
    <section style={{ background: "#f8f9fa",height:"auto"}} >
      <div className="container mission-container">
        <div className="row">
          <div className="col-md-6 col-xl-5">
            <div className="about-content" >
              <h1 className="line-green" data-aos="fade-right">OUR MISSION</h1>
              <p className='paragraph paragraph-mobile' data-aos="fade-up">
                Our mission is to discover, preserve and distribute knowledge and capabilities to enable the next generation of organisations to be capable and resilient.
              </p>
              <Link to="/about/" className="btn btn-danger">
                Learn More
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-xl-5 position-relative" style={{}}>
            <div className="our_mission">
              <img src={about1} alt="about" className="image_one" />
              <span className="text">
                <div>Trusted by</div>
                <VisibilitySensor
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <strong style={{ display: "flex", flexDirection: "row" }}><CountUp end={startCounter ? 50 : 0} />+</strong>
                </VisibilitySensor>
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
