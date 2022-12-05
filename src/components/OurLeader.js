import React from 'react'
import venkatesh from '../assets/svg/venkatesh.png'
import Leaders from './Leaders'
import arun from '../assets/svg/arun-new-1.png'


const OurLeader = () => {
    return (
        <section style={{ background: "#f8f9fa" }} className="py-2">
            <div className="container mt-5">
                <h1 className="line-red">Our Business Transformation   Consulting Leaders</h1>
                <div className="row">
                    <div className="col-xl-6">

                        <p className='paragraph capabilities-style'>
                            <Leaders
                                Image={venkatesh}
                                Name={"Venkatesh Rajamani"}
                                Caption={"Founder & Trainer"}
                                Twitter={"https://twitter.com/arunronline"}
                                Linkedin={"https://www.linkedin.com/in/arunvignesh-ramakrishnan/"}
                                Slack={"https://tryscrum-community.slack.com"}
                                Meetup={"https://www.meetup.com/smstudiochn/"}
                                bg="rgb(240, 84, 87)"
                            />
                        </p>

                        <p className="text-style-leader">
                            Venkatesh is a Founder of tryScrum.com, a Management Consulting firm. He is also a Professional Scrum Trainer® with Scrum.org, a Certified Enterprise Coach® with Scrum
                        </p>
                        <p className="text-style-leader">
                            <button className='leader-button'>
                                <a>VISIT PROFILE</a>
                            </button>
                        </p>

                    </div>

                    <div className="col-xl-6">
                        <p className='paragraph capabilities-style'>
                            <Leaders
                                Image={arun}
                                Name={"Arunvignesh Ramakrishnan"}
                                Caption={"Agile Trainer, Coach & Consultant"}
                                Twitter={"https://twitter.com/arunronline"}
                                Linkedin={"https://www.linkedin.com/in/arunvignesh-ramakrishnan/"}
                                Slack={"https://tryscrum-community.slack.com"}
                                Meetup={"https://www.meetup.com/smstudiochn/"}
                            />
                        </p>

                        <p className="text-style-leader">
                            Arunvignesh is a Professional Agile trainer in tryScrum.com. He is a Professional Scrum Trainer® wit Scrum.org, Certified Team Coach® (CTC) with Scrum Alliance, and ICAgile Authorized Instructor.
                        </p>
                        <p className="text-style-leader">
                            <button className='leader-button'>
                                <a>VISIT PROFILE</a>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurLeader