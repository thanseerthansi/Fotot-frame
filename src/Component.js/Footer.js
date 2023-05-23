import React from 'react'
// import { FaTwitter,FaInstagram,FaFacebookF,FaYoutube,FaArrowUp } from "react-icons/fa";
// import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div>
            <footer className="bg-light">
                <div className="container py-13 py-md-15">
                    <div className="row gy-6 gy-lg-0">
                        <div className="col-md-4 col-lg-3">
                            <div className="widget">
                                <img className="mb-4" src="\assets\img\photos\logo-fotoframe.png"  height={70} alt="img"/>
                                <p className="mb-4">© 2023 FotoFrame. <br className="d-none d-lg-block" />All rights reserved.</p>
                                {/* <nav className="nav social ">
                                    <a href="/"><FaTwitter size={18} color=" #5daed5" /></a>
                                    <a href="/"><FaFacebookF size={15} color="#4470cf" /></a>
                                    <a href="/"><FaInstagram color='#d53581'/></a>
                                    <a href="/"><FaYoutube color='#c8312b' /></a>
                                </nav> */}
                                
                            </div>
                            {/* /.widget */}
                        </div>
                        {/* /column */}
                        <div className="col-md-4 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title  mb-3">Get in Touch</h4>
                                <address className="pe-xl-15 pe-xxl-17 mb-1">Dubai,UAE,al-qusais manzil bldg</address>
                                {/* <a href="mailto:email@example.com">Send Email</a> */}
                               <span className="" data-cfemail="aac3c4ccc5eacfc7cbc3c684c9c5c7"><a href="mailto:email@example.com">fotoframe@gmail.com</a></span><br />04-451 9623
                            </div>
                            {/* /.widget */}
                        </div>
                        {/* /column */}
                        <div className="col-md-4 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title  mb-3">Learn More</h4>
                                <ul className="list-unstyled text-reset mb-0">
                                    <li><Link to="/">About Us</Link></li>
                                    {/* <li><a href="/">Our Story</a></li> */}
                                    {/* <li><Link to="/">Projects</Link></li> */}
                                    <li><Link to="/terms">Terms of Use</Link></li>
                                    <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                            {/* /.widget */}
                        </div>

                        <div className="col-md-12 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title  mb-3">Frames</h4>
                                <div className="widget">
                                <ul className="list-unstyled text-reset mb-0">
                    
                                    {/* <li><Link to="/shopping">Our Store</Link></li> */}
                                    <li><Link to="/miniframe">MiniFrame</Link></li>
                                    <li><Link to="/college">College</Link></li>
                                    <li><Link to="/canavstype">Canvas</Link></li>
                                    {/* <li><Link to="/papertype">Print</Link></li> */}
                                </ul>
                            </div>
                               
                       
                            </div>
        
                        </div>
                
                    </div>
      
                </div>
 
            </footer>
            <div className="progress-wrap">
    
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    
                </svg>
                
            </div>
        </div>
    )
}
