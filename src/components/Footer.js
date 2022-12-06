import React from 'react'
import footerlogo from '../assets/images/trybusinessagility_footer.png'

const Footer = () => {
    return (
        <div>
            <div className="text-center text-lg-start text-white" style={{backgroundColor: "#022c46"}}>

                <div className="container-fluid">

                    <div className="container p-5 pb-0">

                        <section className="">

                            <div className="row">

                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                       <a href="#footer"><img src ={footerlogo} height="65px" width="195px" /></a> 
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>


                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
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
                                    </p>
                                </div>


                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
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
                                    </p>
                                </div>


                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i className="fa fa-envelope mr-3"></i> trybusiness@gmail.com</p>
                                    <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>

                            </div>

                        </section>


                        <hr className="my-3" />


                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">

                                <div className="col-md-7 col-lg-8 text-center text-md-start">

                                    <div className="p-3">
                                        © 2020 Copyright:
                                        <a className="text-white" href="https://mdbootstrap.com/"
                                        > Trybusiness.com</a
                                        >
                                    </div>

                                </div>

                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                        role="button"
                                    ><i className="fa fa-facebook-f"></i
                                    ></a>

                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                        role="button"
                                    ><i className="fa fa-twitter"></i
                                    ></a>

                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                        role="button"
                                    ><i className="fa fa-google"></i
                                    ></a>
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 text-white"
                                        role="button"
                                    ><i className="fa fa-instagram"></i
                                    ></a>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer