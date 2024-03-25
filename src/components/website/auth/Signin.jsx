// import React from 'react'
import {  Link } from 'react-router-dom'
import './Signin.scss';

const Signin = () => {
  return (
    <div className="s-container-main">
    <div className="s-container-inner mt-3">
        <div className="logo-1">
            <img src="" alt="#" />
        </div>

        <div className="heading-1">
            <h1>First of all, enter your email address</h1>
        </div>

        <div className="desc-1">
            <p>We suggest using the <b>email address that you use at work.</b></p>
        </div>

        <div className="form1">
            <form action="#">
                <div className="all-inputs">
                    <input type="email" name="email" id="email" placeholder="work@email.com" required/>
                    <br/> <br/>
                    <input type="password" name="password" id="password" placeholder="e.g-A-Z+0-9+a-z!@#" required/>
                    <br/> <br/>
                    <div className="btn1 gr d-flex justify-content-center rounded"
                        style={{padding: "8px"}}>
                        <Link to="/otp" className="btn text-white">Continue</Link>
                    </div>
                </div>


                {/* <!-- divider-or  --> */}
                <div className="divider-or">
                    <hr className="text-white"/>
                    <span>OR</span>
                    <hr className="text-white"/>
                </div>
            </form>
        </div>

        <div className="btns-1 mt-4">
            <div className="btn gr">
                <button className="btn text-white"><i className="fa-brands fa-google text-white"></i>&nbsp; Continue with
                    Google</button>
            </div>
            <div className="btn btn-2 gr">
                <button className="btn text-white"><i className="fa-brands fa-apple text-white"></i>&nbsp; Continue with
                    Apple</button>
            </div>
        </div>

        <div className="sub-texts-container d-flex justify-content-center mt-5">
            <div className="sub-texts-inner d-block">
                <p>Already using XYZ ?</p>
                <p className='pt-3'><Link to="/login">Sign in to an existing workspace</Link></p>
            </div>
        </div>

        <div className="useful-links d-flex justify-content-center gap-4 mt-5">
            <p><a href="#">Privacy & terms</a></p>
            <p><a href="#">Contact us</a></p>
            <p><a href="#">About us</a></p>
        </div>
    </div>


</div>
  )
}

export default Signin
