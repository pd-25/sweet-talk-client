// import React from 'react'
import { Link } from 'react-router-dom'
import './CreateWs.scss';

import ws from '../../../assets/workspace.png'

const CreateWs = () => {
    return (
        <div className="c-container-main">
            <div className="c-container-inner mt-5">
                <div className="logo-1">
                    <img src="" alt="#" />
                </div>

                <div className="top-email-sec">
                    <div className="email-inner d-flex justify-content-center">
                        <p className="gr">Confirmed as <span className=""
                            style={{ textShadow: "0 1px 2px rgb(0, 0, 0)", fontWeight: "500" }}>&nbsp;bororo@gmail.com&nbsp;</span>
                            <span><a href="sign-in-email.html">&nbsp;Change</a></span>
                        </p>
                    </div>
                </div>

                <div className="mid-main-sec">

                    <div className="imgages-1">
                        <div className="back-img bk-img gr">
                            <img src={ws} alt="#" />
                        </div>

                        <div className="back-img2 bk-img tndImg gr">
                            <img src={ws} alt="#" />
                        </div>
                    </div>

                    <div className="right-mid-sub lr-mid">
                        <div className="right-sub">
                            <div className="heading-2">
                                <h1>Create a new XYZ workspace</h1>
                            </div>
                            <div className="desc-2">
                                <p>XYZ gives your team a home — a place where they can talk and work together. To create a
                                    new workspace, click the button below.</p>
                            </div>
                            <div className="btn11 rounded gr" style={{padding:'4px'}}>
                                <Link to="/step-one" className="btn btn-c text-white">Create a Workspace</Link>
                            </div>
                            <div className="desc-3">
                                <p>By continuing, you’re agreeing to our Main Services Agreement, User Terms of Service, and
                                    Slack Supplemental Terms. Additional disclosures are available in our Privacy Policy and
                                    Cookie Policy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateWs
