import React, {useEffect} from 'react'
import venkatesh from '../assets/svg/venkatesh.png'
import Leaders from './Leaders'
import LeadersLeft from './LeadersLeft'
import arun from '../assets/svg/arun-new-1.png'
import slack from '../assets/social/slack.png'
import twitter from '../assets/social/twitter.png'
import meetup from '../assets/social/meetup.png'
import linkedin from '../assets/social/linkedin.png'
import Aos from "aos";
import "aos/dist/aos.css"


const OurLeader = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, [])

    return (
        <section style={{ background: "#f8f9fa" }} className="py-2">
            <div className="container py-5">
                <h1 className="line-red" data-aos="fade-up">Our Business Transformation Consulting Leaders</h1>
                <div className="row py-4">
                    <div className="col-xl-6">
                        <p className='paragraph capabilities-style'>
                            <Leaders
                                Image={venkatesh}
                                Name={"Venkatesh Rajamani"}
                                Caption={"Founder & Executive Director"}
                                Twitter={"https://twitter.com/arunronline"}
                                Linkedin={"https://www.linkedin.com/in/arunvignesh-ramakrishnan/"}
                                Slack={"https://tryscrum-community.slack.com"}
                                Meetup={"https://www.meetup.com/smstudiochn/"}
                                bg="rgb(240, 84, 87)"
                            />
                        </p>
                    </div>

                    <div className="col-xl-6 position-relative">
                        <p className='paragraph-visit-profile'>
                            <p className="text-style-leader" data-aos='fade-left'>
                            Venkatesh is a Founder of tryScrum.com, a Management Consulting firm. He is also a Professional Scrum Trainer® with Scrum.org, a Certified Enterprise Coach® with Scrum
                            </p>
                            <p className="text-style-visit-profile">
                                <button className='leader-button'>
                                    <a>VISIT PROFILE</a>
                                </button>
                            </p>
                            <div className="all_link">
                                <a href="https://twitter.com/AtVenk" target="_blank" className='link_one'>
                                    <i className="fa twitter"><img src={twitter} /></i>
                                </a>

                                <a href="https://www.linkedin.com/in/venkatesh-rajamani-b071b15/" target="_blank" className='link_two'>
                                    <i className="fa linkedin"><img src={linkedin} /></i>
                                </a>
                            </div>
                        </p>


                    </div>
                </div>
                <div className="row leader_flex py-4">
                    <div className="col-xl-6 position-relative">
                        <p className="paragraph-visit-profile">
                            <p className="text-style-leader" data-aos='fade-right'>
                                Arunvignesh is a Professional Agile trainer in tryScrum.com. He is a Professional Scrum Trainer® wit Scrum.org, Certified Team Coach® (CTC) with Scrum Alliance, and ICAgile Authorized Instructor.
                            </p>
                            <p className="text-style-visit-profile">
                                <button className='leader-button'>
                                    <a>VISIT PROFILE</a>
                                </button>
                            </p>
                            <div className="all_link">
                                <a href="https://twitter.com/arunronline" target="_blank" className='link_one'>
                                    <i className="fa twitter"><img src={twitter} /></i>
                                </a>

                                <a href="https://www.linkedin.com/in/arunvignesh-ramakrishnan" target="_blank" className='link_two'>
                                    <i className="fa linkedin"><img src={linkedin} /></i>
                                </a>
                            </div>
                        </p>
                    </div>

                    <div className="col-xl-6">
                        <p className='paragraph capabilities-style'>
                            <LeadersLeft
                                Image={arun}
                                Name={"Arunvignesh Ramakrishnan"}
                                Caption={"Agile Trainer, Coach & Consultant"}
                                Twitter={"https://twitter.com/arunronline"}
                                Linkedin={"https://www.linkedin.com/in/arunvignesh-ramakrishnan/"}
                                Slack={"https://tryscrum-community.slack.com"}
                                Meetup={"https://www.meetup.com/smstudiochn/"}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurLeader