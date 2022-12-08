import React, { useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"



const Leader2 = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, [])

    const {Name, Caption, Image, bg } = props;


    return (
        <div className="col" >
            <div className='leader-card-box'>
                {Image ? <img src={Image} data-aos="fade-zoom-in" /> : ""}
                <div data-aos="zoom-up" className='card-name' style={{ background: `${bg}` }}>
                    {Name ? <p>{Name}</p> : <p>name</p>}
                    {Caption ? <h6>{Caption}</h6> : <h6>Caption</h6>}
                </div>
            </div>
        </div>
    )
}

export default Leader2