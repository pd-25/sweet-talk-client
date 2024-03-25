// import React from 'react'
import './Footer.scss';

const Footer = () => {
    return (
        <div className="section3">
            <div className="footer-top-main">

                <div className="icons">
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#"><i className="fa-brands fa-discord"></i></a>
                </div>

                <hr className="f-hr1 text-dark mt-5"/>

                    <div className="footer-sub-main mt-5">

                        <div className="footer-subsec logo">
                            <img src="" alt="Logo" className="text-dark"/>
                        </div>

                        <div className="footer-subsec products">
                            <div className="links">
                                <h4>Products</h4>
                                <p><a href="#">Watch demo</a></p>
                                <p><a href="#">Pricing</a></p>
                                <p><a href="#">Paid vs Free</a></p>
                                <p><a href="#">Accessibility</a></p>
                                <p><a href="#">Featured releases</a></p>
                                <p><a href="#">Change log</a></p>
                                <p><a href="#">Status</a></p>
                            </div>
                        </div>

                        <div className="footer-subsec features">
                            <div className="links">
                                <h4>Features</h4>
                                <p><a href="#">Channels</a></p>
                                <p><a href="#">XYZ Connect</a></p>
                                <p><a href="#">Workflow Builder</a></p>
                                <p><a href="#">Messaging</a></p>
                                <p><a href="#">Huddles</a></p>
                                <p><a href="#">Canvas</a></p>
                                <p><a href="#">Clips</a></p>
                            </div>
                        </div>

                        <div className="footer-subsec solution">
                            <div className="links">
                                <h4>Solutions</h4>
                                <p><a href="#">Engineering</a></p>
                                <p><a href="#">IT</a></p>
                                <p><a href="#">Customer service</a></p>
                                <p><a href="#">Sales</a></p>
                                <p><a href="#">Project management</a></p>
                                <p><a href="#">Marketing</a></p>
                                <p><a href="#">Security</a></p>
                            </div>
                        </div>

                        <div className="footer-subsec resources">
                            <div className="links">
                                <h4>Resources</h4>
                                <p><a href="#">elp Centre</a></p>
                                <p><a href="#">hat’s new</a></p>
                                <p><a href="#">esources library</a></p>
                                <p><a href="#">lack blog</a></p>
                                <p><a href="#">ommunity</a></p>
                                <p><a href="#">ustomer stories</a></p>
                                <p><a href="#">vents</a></p>
                            </div>
                        </div>

                        <div className="footer-subsec company">
                            <div className="links">
                                <h4>Company</h4>
                                <p><a href="#">About us</a></p>
                                <p><a href="#">News</a></p>
                                <p><a href="#">Media kit</a></p>
                                <p><a href="#">Brand centre</a></p>
                                <p><a href="#">Careers</a></p>
                                <p><a href="#">XYZ shop</a></p>
                                <p><a href="#">Engineering blog</a></p>
                            </div>
                        </div>

                    </div>
            </div>


            <hr className="f-hr2 text-dark mt-5"/>
                <div className="footer-bottom-main mt-5">

                    <div className="footer-bottom-subsec1 d-flex gap-4">
                        <p><a href="#">Privacy</a></p>
                        <p><a href="#">Terms</a></p>
                        <p><a href="#">Cookie preferences</a></p>
                        <p><a href="#">Your privacy choices</a></p>
                    </div>

                    <div className="footer-bootom-subsec2">
                        <p>© 2023 xyz-website Inc. All rights reserved.</p>
                        <p>Various trademarks held by their respective owners.</p>
                    </div>

                </div>
        </div>
    )
}

export default Footer;
