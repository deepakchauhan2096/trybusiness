import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import about1 from "../assets/images/group-people.jpg";
import about1 from "../assets/images/group-people.webp";
import trybusiness from "../assets/images/symbol-trybusinessagility-logo.png";

import { Link } from "gatsby";

export default class AboutTwo extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false
    };
  }



  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };


  Reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  Reveal;
  




  render() {

    console.log(this.state.startCounter);
    return (
      <section style={{ background: "#f8f9fa" }} className="py-4">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div className="about-content py-5 reveal active fade-bottom">
                <h1 className="line-green">OUR MISSION</h1>
                <p className='paragraph'>
                  Our mission is to discover, preserve and distribute knowledge and capabilities to enable the next generation of organisations to be capable and resilient.
                </p>
                <Link to="/about/" className="btn btn-danger">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div className="our_mission">
                <img src={about1} alt="about" className="image_one" />
                <img src={trybusiness} className="image_two" />
                {/* <div className="our_mission_counter"> */}

                {/* <div className="circle-one">*/}
                {/* <div className="circle-two"> */}
                <span className="text">
                  Trusted by
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <strong style={{ display: "flex", flexDirection: "row" }}><CountUp end={this.state.startCounter ? 50 : 0} />+</strong>
                  </VisibilitySensor>
                  Organisations
                </span>
                {/* </div>s */}
                {/*</div> */}
                {/* </img> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
