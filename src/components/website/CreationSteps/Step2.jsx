// import React from 'react'
import { Link } from 'react-router-dom';
import './Common.scss';
import './Step2.scss';
import BlackProfile from '../../../assets/bl-profile.webp'

const Step2 = () => {
    return (
        <div className='Main'>
            <div className="mid-section-10 mt-5">

                {/* <!-- sidebar start --> */}
                <div className="mid-sidebar-section-10">
                    <div className="inner-sidebar d-flex flex-column align-items-center align-items-sm-start text-white">

                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
                            id="menu" style={{ fontSize: '12px' }}>

                            <li className="nav-item w-100">
                                <a href="#" className="nav-link align-middle px-0 text-white">
                                    <div className="text-center">
                                        <i className="fa-solid fa-house px-2 py-2 rounded"
                                            style={{ backgroundColor: 'rgba(210, 210, 210, 0.432)' }}></i>
                                    </div>
                                    <div className="text-center">
                                        <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item w-100">
                                <a href="#submenu1" data-bs-toggle="collapse"
                                    className="nav-link px-0 align-middle  text-white">
                                    <div className="text-center">
                                        <i className="fa-regular fa-comments"></i>
                                    </div>
                                    <div className="text-center">
                                        <span className="ms-1 d-none d-sm-inline">DMs</span>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item w-100">
                                <a href="#submenu1" data-bs-toggle="collapse"
                                    className="nav-link px-0 align-middle  text-white">
                                    <div className="text-center">
                                        <i className="fa-regular fa-bell"></i>
                                    </div>
                                    <div className="text-center">
                                        <span className="ms-1 d-none d-sm-inline">Activity</span>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item w-100">
                                <a href="#submenu1" data-bs-toggle="collapse"
                                    className="nav-link px-0 align-middle  text-white">
                                    <div className="text-center">
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="text-center">
                                        <span className="ms-1 d-none d-sm-inline">More</span>
                                    </div>
                                </a>
                            </li>

                        </ul>
                        <hr />
                        <div className="w-100 align-items-center">
                            <div className="d-flex align-items-center text-white text-decoration-none justify-content-center">
                                <a href="#" className="nav-link px-0 align-middle  text-white"><i
                                    className="fa-solid fa-plus px-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- sidebar end --> */}


                {/* <!-- left side start --> */}
                <div className="mid-left-section-100">
                    {/* <!-- left-section start --> */}
                    <div className="left-side h-100" style={{ backgroundColor: '#131618' }}>

                        <div className="left-top d-flex p-2 gap-2 justify-content-between">
                            <div className="acc-name dropdown d-flex justify-content-between mt-2">
                                <p style={{ border: 'none', fontWeight: "600" }}>
                                    Saklinm5333
                                </p>
                            </div>
                        </div>

                        <div className="bottom-mid">
                            {/* <!-- <div className="lb-top d-flex">

                <div className="channels dropdown">
                    <a style="border: none;" className="btn dropdown-toggle text-white" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    </a>
                </div>

                <div className="channel-heading">
                    <div className="channels dropdown">
                        <a style="border: none;color: rgb(185, 186, 189);">
                            &nbsp;Channels
                        </a>
                    </div>
                </div>
            </div>

            <ul className="mid channels nav-link" style="line-height: 7px; margin-left: 0.2rem;">
                <p><a href="#"><i className="fa-solid fa-hashtag"></i> general</a></p>
                <p><a href="#"><i className="fa-solid fa-hashtag"></i> random</a></p>
            </ul> --> */}
                        </div>
                    </div>
                    {/* <!-- left-section end --> */}
                </div>
                {/* <!-- left side end --> */}


                {/* <!-- right side start --> */}
                <div className="mid-right-section-100">
                    <div className="right-side-3">
                        <div className="r-s-main-inner">
                            <div className="right-inner-side-100">
                                <div className="steps">
                                    <p>Step 2 of 5</p>
                                </div>
                                <div className="r-heading">
                                    <h1>What’s your name?</h1>
                                </div>
                                <div className="r-desc-1">
                                    <p>Adding your name and profile photo helps your teammates recognize and connect with
                                        you more easily.</p>
                                </div>
                                <form action="#">
                                    <input className="inp-1 rounded" type="text" name="comapny-name" id="comapny-name"
                                        placeholder="Saklinm5333" />

                                    <div className="checks-optional-upload">
                                        <div className="upload-inner-main">
                                            <div className="upload-heading pt-2">
                                                <p>Upload a profile picture <b>(Optional)</b></p>
                                                <p className="upload-desc-p">Help your teammates know they’re talking to the right person.</p>
                                            </div>
                                            <div className="upload-img">
                                                <div className="upload-img-inner">
                                                    <img src={BlackProfile} alt="#" className="rounded" />

                                                    <div className="btns-100">
                                                        <div className="btn-100 btn mt-2 gr" style={{ padding: '4px' }}>
                                                            <label htmlFor="file-input" style={{ color: 'white', padding: '8px' }}>Upload</label>
                                                            <input type="file" name="" id="file-input" style={{ display: 'none' }} />
                                                        </div>
                                                        <div className="btn-100 btn mt-2 gr" style={{ padding: '4px' }}>
                                                            <Link to="/step3" className="btn" style={{ color: 'white' }}>Next</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- right side eend --> */}

            </div>
        </div>
    );
}

export default Step2;
