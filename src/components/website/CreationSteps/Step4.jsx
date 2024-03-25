// import React from 'react';
import { Link } from 'react-router-dom';
import './Common.scss';
import './Step4.scss';

const Step4 = () => {
    return (
        <div className='Main'>
            <div className="mid-section-300 mt-5">

                {/* <!-- sidebar start --> */}
                <div className="mid-sidebar-section-300">
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
                <div className="mid-left-section-300">
                    {/* <!-- left-section start --> */}
                    <div className="left-side h-100" style={{ backgroundColor: '#131618' }}>

                        <div className="left-top d-flex p-2 gap-2 justify-content-between">
                            <div className="acc-name dropdown d-flex justify-content-between mt-2">
                                <p style={{ border: 'none', fontWeight: 600 }}>
                                    SaklinTesting
                                </p>
                            </div>
                        </div>

                        <div className="bottom-mid">
                            <div className="lb-top d-flex">

                                <div className="channels dropdown">
                                    <a style={{ border: 'none' }} className="btn dropdown-toggle text-white" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    </a>
                                </div>

                                <div className="channel-heading">
                                    <div className="channels dropdown" style={{ marginLeft: '-28%', marginTop: '16%' }}>
                                        <a style={{ border: 'none', color: 'rgb(185, 186, 189)' }}>
                                            &nbsp;Channels
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <ul className="mid channels nav-link" style={{ lineHeight: '7px', marginLeft: '1rem' }}>
                                <p><a href="#"><i className="fa-solid fa-hashtag"></i> general</a></p>
                                {/* <!-- <p><a href="#"><i className="fa-solid fa-hashtag"></i> random</a></p> --> */}
                            </ul>
                        </div>
                    </div>
                    {/* <!-- left-section end --> */}
                </div>
                {/* <!-- left side end --> */}


                {/* <!-- right side start --> */}
                <div className="mid-right-section-300">
                    <div className="right-side">
                        <div className="r-s-main-inner">
                            <div className="right-inner-side-300">
                                <div className="steps">
                                    <p>Step 4 of 5</p>
                                </div>
                                <div className="r-heading">
                                    <h1>What’s your team working on right now?</h1>
                                </div>
                                <div className="r-desc-1">
                                    <p>This could be anything: a project, campaign, event, or the deal you’re trying to close.</p>
                                </div>
                                <form action="#">
                                    <input className="inp-1 rounded" type="text" name="comapny-name" id="comapny-name"
                                        placeholder="Ex: general" style={{ padding: '14px' }} />

                                    <div className="btn-300 btn mt-4 gr" style={{ padding: '4px' }}>
                                        <Link to="/step5" className="btn cw" style={{ fontWeight: '600' }}>Next</Link>
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

export default Step4
