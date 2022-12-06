import React from 'react'
import homebanner from '../assets/images/banner-bg.png'

const Banner = () => {
    return (
        <section>
            <div className="banner">
                <img src={homebanner} alt="trybusiness banner" />
                <div className="banner-text">
                    <span>
                        We help
                    </span>
                    <br/>
                    <span>
                        next-generation organisations
                    </span>
                    <br/>
                    <span >
                      to stay capable and resilient
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Banner