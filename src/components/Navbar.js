import React from 'react'
import { Helmet } from 'react-helmet'
import logo from '../assets/images/trybusinessagility.png'

const Navbar = () => {
    return (
        <div>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container" id="footer">
                    <a className="navbar-brand" href="#" alt="trybusiness"><img src={logo} className="logo-trybusiness" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            {/* navbar */}

            {/* strp */}
            <div className='strips-container' >
                <div className="strip-green"></div>
                <div className="strip-red"></div>
                <div className="strip-yellow"></div>
            </div>
            {/* strip */}
        </div>
    )
}

export default Navbar