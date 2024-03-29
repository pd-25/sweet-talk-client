// import React from 'react'
import { Link } from 'react-router-dom';
import './Otp.scss';

const Otp = () => {
  return (
    <div className="s-container-main">
    <div className="s-container-inner mt-3">
        <div className="logo-1">
            <img src="" alt="#"/>
        </div>

        <div className="heading-1">
            <h1>Check Your Email For Code</h1>
        </div>

        <div className="desc-1">
            <p>we have sent 4-character code to <span className="" style={{color: "var(--solid)"}}>bororo@gmail.com. </span>
                The code espires
                shortly, so please enter it soon.</p>
        </div>

        <div className="form-main-1">
            <form action="#">
                <div className="all-inputs1-inner">
                    <div className="inputs1 all-inputs1-inner">
                        <input type="text" name="otp1" id="otp" required/>

                            <input type="text" name="otp2" id="otp" required/>

                                <input type="text" name="otp3" id="otp" required/>

                                    <input type="text" name="otp4" id="otp" required/>
                                    </div>

                                    <br/> <br/>
                                        <div className="btn1 d-flex justify-content-center">
                                            <Link to="/create-workspace" className="btn gr text-white"
                                                style={{padding: "16px"}}>Continue</Link>
                                        </div>
                                    </div>
                                    </form>
                                </div>

                                <div className="sub-texts-container d-flex justify-content-center">
                                    <div className="sub-texts-inner">
                                        <div className="sub-texts-left lr-sub">
                                            <a href="#">
                                                <span><i className="fa-solid fa-envelope"></i></span>
                                                <span>&nbsp;Open Gmail</span>
                                            </a>
                                        </div>

                                        <div className="sub-texts-right lr-sub">
                                            <a href="#">
                                                <span><i className="fa-solid fa-envelopes-bulk"></i></span>
                                                <span>&nbsp;Open Outlook</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="useful-links d-flex justify-content-center gap-4">
                                    <p><a href="#">Privacy & terms</a></p>
                                    <p><a href="#">Contact us</a></p>
                                    <p><a href="#">About us</a></p>
                                </div>
                            </div>


                    </div>
  )
}

export default Otp
