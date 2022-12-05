import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import about1 from "../assets/images/group-people.jpg";
import about1 from "../assets/images/group-people.webp";
// import about1 from "../assets/images/Students.jpg";

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




  render() {

    console.log(this.state.startCounter);
    return (
      <section style={{background: "#f8f9fa"}} >
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <div className="about-content py-5">
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
                  <img src={about1} alt="about" />
                  <div className="our_mission_counter">
                    <div className="circle-one">
                      <div className="circle-two">
                        <span className="text">
                          Trusted by
                          <VisibilitySensor
                            onChange={this.onVisibilityChange}
                            offset={{ top: 10 }}
                            delayedCall
                          >
                            <strong style={{ display: "flex", flexDirection: "row" }}><CountUp end={this.state.startCounter ? 10000 : 0} />+</strong>
                          </VisibilitySensor>
                          Students
                        </span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
