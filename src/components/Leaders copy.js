import React from 'react'
import slack from '../assets/social/slack.svg'
import twitter from '../assets/social/twitter.svg'
import meetup from '../assets/social/meetup.svg'
import linkedin from '../assets/social/linkedin-in.svg'


const Leader2 = (props) => {

    const {Twitter, Linkedin, Slack, Meetup, Name, Caption , Image , bg} = props;


    return (
        <section>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <div className='leader-card-box'>
                            {Image ? <img src={Image} /> : ""}
                            <div className='card-name' style={{background:`${bg}`}}>

                                {Name ? <p>{Name}</p> : <p>name</p>}
                                {Caption ? <h6>{Caption}</h6> : <h6>Caption</h6> }
                                {Twitter ? <a href={Twitter} target="_blank" className='link_one'>
                                <i className="fa twitter"><img src={twitter} /></i>
                                </a> : <a href="#twitter" target="_blank" className='link_one'>
                                <i className="fa twitter"><img src={twitter} /></i>
                                </a>}

                                {Linkedin? <a href={Linkedin} target="_blank" className='link_two'>
                                <i className="fa linkedin"><img src={linkedin} /></i>
                                </a> : <a href="#linkedin" target="_blank" className='link_two'>
                                <i className="fa linkedin"><img src={linkedin} /></i>
                                </a>}

                                {Slack ? <a href={Slack} target="_blank" className='link_three'>
                                <i className="fa slack"><img src={slack} /></i>
                                </a>:<a href="#Slack" target="_blank" className='link_three'>
                                <i className="fa slack"><img src={slack} /></i>
                                </a>}
                                {Meetup ? <a href={Meetup} target="_blank" className='link_four'>
                                <i className="fa meetup"><img src={meetup} /></i>
                                </a>: <a href="#Meetup" target="_blank" className='link_four'>
                                <i className="fa meetup"><img src={meetup} /></i>
                                </a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Leader2