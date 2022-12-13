import React from 'react'
import footerlogo from '../assets/images/white-web-logo.png'

const Footer = () => {
    return (
        <div>
            <div className="text-center text-lg-start text-white" style={{ backgroundColor: "#022c46" }}>

                <div className="container-fluid">

                    <div className="container p-5 pb-0">

                        <section className="">

                            <div className="row">

                                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        <a href="#footer"><img src={footerlogo} height="55px" width="195px" /></a>
                                    </h6>
                                    <p>
                                        tryBusinessAgility, a flagship of tryScrum. Our mission is to discover, preserve and distribute knowledge and capabilities to enable the next generation of organisations to be capable and resilient.
                                    </p>
                                </div>


                                {/* <hr className="w-100 clearfix d-md-none" /> */}

                                {/* <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"> */}
                                    {/* <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                    <p>
                                        <a className="text-white">link 1</a>
                                    </p>
                                    <p>
                                        <a className="text-white">link 2</a>
                                    </p>
                                    <p>
                                        <a className="text-white">link 3</a>
                                    </p>
                                    <p>
                                        <a className="text-white">link 5</a>
                                    </p> */}
                                {/* </div> */}


                                {/* <hr className="w-100 clearfix d-md-none" /> */}

                                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                                    {/* <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a className="text-white">link 6</a>
                                    </p>
                                    <p>
                                        <a className="text-white">link 7</a>
                                    </p>
                                    <p>
                                        <a className="text-white">link 8</a>
                                    </p>
                                    <p>
                                        <a className="text-white">link 9</a>
                                    </p> */}
                                </div>


                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fa fa-home mr-3"></i> Plot No 244, Fortune Residency, Tambaram,
                                        Chennai–600048</p>
                                    <p><i className="fa fa-envelope mr-3"></i> help@tryscrum.com </p>
                                    <p><i className="fa fa-phone mr-3"></i> +91 9789490848</p>
                                </div>

                            </div>

                        </section>


                        <hr className="my-3" />


                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">

                                <div className="col-md-7 col-lg-8 text-center text-md-start">

                                    <div className="p-3">
                                        © 2022 Copyright:
                                        <a className="text-white" href="https://mdbootstrap.com/"
                                        > trybusiness.com</a
                                        >
                                    </div>

                                </div>

                                {/* <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-primary footer_icon"
                                        role="button"
                                    ><i className="fa fa-facebook-f"></i
                                    ></a>

                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-info footer_icon"
                                        role="button"
                                    ><i className="fa fa-twitter"></i
                                    ></a>

                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-danger footer_icon"
                                        role="button"
                                    ><i className="fa fa-google"></i
                                    ></a>
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-warning footer_icon"
                                        role="button"
                                    ><i className="fa fa-instagram"></i
                                    ></a>
                                </div> */}
                            </div>
                        </section>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer