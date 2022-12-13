import React, {useState, useEffect} from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Aos from "aos";
import "aos/dist/aos.css"

const StoryTree = () => {

  const [Counter, setCounter] = useState();


  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 py-4">
          <h3 className="brand-narrative" data-aos="flip-up">2018</h3>
          <p style={{ fontSize: "20px" }}>We started with a revolutionist mindset and a mission to help the next-generation organisation by focusing on results, not reports.</p>


          {/* <ul className="timeline">
                  <li>
                    <h3 style={{textAlign:"left", color:"red"}}>2018</h3>
                    <p style={{fontSize:"20px"}}>We started with a revolutionist mindset and a mission to help the next-generation organisation by focusing on results, not reports.</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"green"}}>2019</h3>
                    <p style={{fontSize:"20px"}}>tryScrum was chosen as a preferred partner by one of the Worl’d most respected non-profit Organisation</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"orange"}}>2020</h3>
                    <p style={{fontSize:"20px"}}></p>
                    <p style={{fontSize:"20px"}}>We’ve worked with 50+ big and small brands around</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"purple"}}>2021</h3>
                    <p style={{fontSize:"20px"}}>Ten thousand Practitioners in 24 countries representing our alumni network Trust our brand</p>
                  </li>
                </ul> */}
        </div>
        <div className="col-md-3 py-4">
          <h3 className="brand-narrative" data-aos="flip-up">Awards</h3>
          <p style={{ fontSize: "20px" }}>tryScrum was chosen as a preferred partner by one of the Worl’d most respected non-profit Organisation</p>
          {/* <ul className="timeline">
                  <li>
                    <h3 style={{textAlign:"left", color:"red"}}>2018</h3>
                    <p style={{fontSize:"20px"}}>We started with a revolutionist mindset and a mission to help the next-generation organisation by focusing on results, not reports.</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"green"}}>2019</h3>
                    <p style={{fontSize:"20px"}}>tryScrum was chosen as a preferred partner by one of the Worl’d most respected non-profit Organisation</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"orange"}}>2020</h3>
                    <p style={{fontSize:"20px"}}></p>
                    <p style={{fontSize:"20px"}}>We’ve worked with 50+ big and small brands around</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"purple"}}>2021</h3>
                    <p style={{fontSize:"20px"}}>Ten thousand Practitioners in 24 countries representing our alumni network Trust our brand</p>
                  </li>
                </ul> */}
        </div>
        <div className="col-md-3 py-4">
          <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=> setCounter(false)}>
          <h3 className="brand-narrative">{Counter && <CountUp start={0} end={50} duration={2} delay={0}/>}+</h3>
          <p style={{ fontSize: "20px" }}>We’ve worked with 50+ big and small brands around</p>
          </ScrollTrigger>

          


          {/* <ul className="timeline">
                  <li>
                    <h3 style={{textAlign:"left", color:"red"}}>2018</h3>
                    <p style={{fontSize:"20px"}}>We started with a revolutionist mindset and a mission to help the next-generation organisation by focusing on results, not reports.</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"green"}}>2019</h3>
                    <p style={{fontSize:"20px"}}>tryScrum was chosen as a preferred partner by one of the Worl’d most respected non-profit Organisation</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"orange"}}>2020</h3>
                    <p style={{fontSize:"20px"}}></p>
                    <p style={{fontSize:"20px"}}>We’ve worked with 50+ big and small brands around</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"purple"}}>2021</h3>
                    <p style={{fontSize:"20px"}}>Ten thousand Practitioners in 24 countries representing our alumni network Trust our brand</p>
                  </li>
                </ul> */}
        </div>
        <div className="col-md-3 py-4">
          <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=> setCounter(false)}>
          <h3 className="brand-narrative">{Counter && <CountUp start={0} end={24} duration={2} delay={0}/>}</h3>
          <p style={{fontSize:"20px"}}>Ten thousand Practitioners in 24 countries representing our alumni network Trust our brand</p>
          </ScrollTrigger>


          {/* <ul className="timeline">
                  <li>
                    <h3 style={{textAlign:"left", color:"red"}}>2018</h3>
                    <p style={{fontSize:"20px"}}>We started with a revolutionist mindset and a mission to help the next-generation organisation by focusing on results, not reports.</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"green"}}>2019</h3>
                    <p style={{fontSize:"20px"}}>tryScrum was chosen as a preferred partner by one of the Worl’d most respected non-profit Organisation</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"orange"}}>2020</h3>
                    <p style={{fontSize:"20px"}}></p>
                    <p style={{fontSize:"20px"}}>We’ve worked with 50+ big and small brands around</p>
                  </li>
                  <li>
                    <h3 style={{textAlign:"left", color:"purple"}}>2021</h3>
                    <p style={{fontSize:"20px"}}>Ten thousand Practitioners in 24 countries representing our alumni network Trust our brand</p>
                  </li>
                </ul> */}
        </div>
      </div>
    </div>
  )
}

export default StoryTree