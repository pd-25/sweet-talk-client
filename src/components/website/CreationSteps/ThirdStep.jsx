// import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/bl-profile.webp';
import './Common.scss';
import './ThirdStep.scss';

const ThirdStep = () => {
    return (
        <div className='Main'>
            <div className="mid-section-200 mt-5">

                {/* <!-- sidebar start --> */}
                <div className="mid-sidebar-section-200">
                    <div className="inner-sidebar d-flex flex-column align-items-center align-items-sm-start text-white">

                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
                            id="menu" style={{ fontSize: '12px' }}>

                            <li className="nav-item w-100 pb-3 pt-3">
                                <a href="#"
                                    className="d-flex align-items-center text-white text-decoration-none justify-content-center">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="36" height="34"
                                        className="rounded" />
                                </a>
                            </li>

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
                <div className="mid-left-section-200">
                    {/* <!-- left-section start --> */}
                    <div className="left-side h-100" style={{ backgroundColor: '#131618' }}>

                        <div className="left-top d-flex p-2 gap-2 justify-content-between">
                            <div className="acc-name dropdown d-flex justify-content-between mt-2">
                                <p style={{ border: 'none', fontWeight: 600 }}>
                                    SaklinTesting
                                </p>
                            </div>
                        </div>

                        <div className="mid DMs">
                            <div className="lb-mid-top d-flex">

                                <div className="channels dropdown">
                                    <a style={{ border: 'none' }} className="btn dropdown-toggle text-white"
                                        type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </a>
                                    {/* <!-- <ul className="dropdown-menu bg-dark">
                                    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                </ul> --> */}
                                </div>

                                <div className="channel-heading">
                                    <div className="channels dropdown c-d">
                                        <a style={{ border: 'none', color: 'rgb(185, 186, 189)', marginLeft: "-22%", fontSize: '1rem', opacity: '0.8', fontWeight: 'normal' }}
                                            className="btn drp dm" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            &nbsp;Direct messages
                                        </a>
                                        {/* <ul className="dropdown-menu bg-dark position-relative">
                                            <li><a className="dropdown-item text-white" href="#">Something else
                                                here</a>
                                            </li>
                                            <li><a className="dropdown-item text-white" href="#">Something else
                                                here</a>
                                            </li>
                                            <li><a className="dropdown-item text-white" href="#">Something else
                                                here</a>
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="mid channels nav-link" style={{ marginLeft: '1rem', lineHeight: '' }}>

                            <div className="dms-main" style={{ marginTop: '-0.5rem' }}>
                                <div className="sub-dms">
                                    <img src={profile} alt="hugenerd" width="26" height="26"
                                        className="rounded" />
                                    <span className="px-2">Animallo</span>
                                </div>

                                {/* <!-- <div className="sub-dms">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="26" height="26"
                                        className="rounded">
                                    <span className="px-2">Rohit S</span>
                                </div>

                                <div className="sub-dms">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="26" height="26"
                                        className="rounded">
                                    <span className="px-2">Mahidra SD</span>
                                </div> --> */}
                            </div>

                            {/* <!-- <div className="add-colleagues">
                                <p><a href="#"><i className="fa-solid fa-plus"></i> &nbspAdd colleagues</a></p>
                            </div> --> */}

                        </ul>
                    </div>
                    {/* <!-- left-section end --> */}
                </div>
                {/* <!-- left side end --> */}


                {/* <!-- right side start --> */}
                <div className="mid-right-section-200">
                    <div className="right-side">
                        <div className="r-s-main-inner-222">
                            <div className="right-inner-side-200">
                                <div className="steps">
                                    <p>Step 3 of 5</p>
                                </div>
                                <div className="r-heading">
                                    <h1>Who else is on the saklin team?</h1>
                                </div>
                                <div className="r-desc-2">
                                    <p className="r-p-1">Add co-worker by email</p>
                                    <p className="r-p-2"><a href="#" className="text-primary"><i
                                        className="fa-brands fa-google"></i>&nbsp;Add from Google Contacts</a></p>
                                </div>
                                <form action="#">
                                    <textarea name="invite-links" id="" cols="90" rows="6"
                                        placeholder="Ex. aimallob@gmail.com"></textarea>

                                    <div className="btns-2">
                                        <div className="btn-14 btn  mt-2 gr" style={{ padding: '4px' }}>
                                            <Link to="/step-four" className="btn cw">Next</Link>
                                        </div>
                                        <div className="btn-14 btn mt-2 gr" style={{ padding: '4px' }}>
                                            <Link to="/step-four" className="btn cw">Skip this step</Link>
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
    )
}

export default ThirdStep
