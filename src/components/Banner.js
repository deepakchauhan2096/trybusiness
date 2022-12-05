import React from 'react'
import homebanner from '../assets/images/banner-bg.jpg'

const Banner = () => {
    return (
        <section>
            <div className="banner">
                <img src={homebanner} alt="trybusiness banner" />
                <div className="container">
                    <h1 className='banner-text'>
                        <p>We help next-generation organisations to stay capable and resilient</p>
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Banner