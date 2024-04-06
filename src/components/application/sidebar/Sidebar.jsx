// import React from 'react'
import '../mainapp/MainApp.scss';
import { Link } from 'react-router-dom';
import profile from '../../../assets/bl-profile.webp';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="mid-sidebar-section-4">
            <div className="inner-sidebar d-flex flex-column align-items-center align-items-sm-start text-white">

                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
                    id="menu" style={{ fontSize: '12px' }}>

                    <li className="nav-item w-100 pb-3 pt-3 dropdown d-flex flex-column align-items-center">
                        <a
                            className="d-flex align-items-center text-white text-decoration-none justify-content-center"
                            role="button" id="profile-click" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: 'fit-content' }}>
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="36" height="34"
                                className="rounded" />
                        </a>
                        <ul className="dropdown-menu rounded fro-profile mt-2" aria-labelledby="profile-click">
                            {/* <li className='for-sub-profile'><a className="dropdown-item" href="#">Profile View</a></li> */}
                            <li className='for-sub-profile'><a className="dropdown-item" href="#">Swith Account &nbsp;<i className="fa-solid fa-arrows-rotate"></i></a></li>
                            <li className='for-sub-profile'><a className="dropdown-item" href="#">Logout &nbsp;<i className="fa-solid fa-right-from-bracket"></i></a></li>
                        </ul>
                    </li>

                    <li className="nav-item w-100 d-flex flex-column align-items-center">
                        <Link to='/app' className="nav-link align-middle px-0 text-white">
                            <div className="text-center">
                                <i className="fa-solid fa-house px-2 py-2 rounded"
                                    style={{ backgroundColor: "rgba(210, 210, 210, 0.432)" }}></i>
                            </div>
                            <div className="text-center">
                                <span className="ms-1 d-none d-sm-inline">Home</span>
                            </div>
                        </Link>
                    </li>

                    <li className="nav-item w-100 d-flex flex-column align-items-center">
                        <Link to='#' data-bs-toggle="modal" data-bs-target="#dms-btn1"
                            className="nav-link px-0 align-middle  text-white" >
                            <div className="text-center">
                                <i className="fa-regular fa-comments"></i>
                            </div>
                            <div className="text-center">
                                <span className="ms-1 d-none d-sm-inline">DMs</span>
                            </div>
                        </Link>

                        <div className="modal fade" id="dms-btn1" tabIndex="-1" aria-labelledby="dms-btn1-Label" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body modal-body-dms">
                                        <div className="dms-main">
                                            <div className="dms-main-inner">
                                                <div className="btn-bar d-flex gap-3 justify-content-start align-items-center">
                                                    <button type="button" className="btn btn-m btn-secondary" data-bs-dismiss="modal"><i className="fa-solid fa-angle-left"></i></button>
                                                    <p>Select chats</p>
                                                </div>
                                                <div className="dm-search-content rounded mt-4">
                                                    <input type="text" name="" id="" placeholder='Search colleagues' />
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                                <div className="small-heading-fixed mt-4">
                                                    <p>Your Colleagues on XYZ</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="all-dms-main-scroll" style={{ marginTop: '70px', height: '410px', overflowY: 'auto' }}>

                                            <Link to='/direct-chat-app-with-me' className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin (you)</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="name-lastdm1 px-2"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </Link>


                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Rohit Basu</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span></span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Animallo Blogs</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span></span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Supriyo Sir</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span></span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Pabitra Sir</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Sayandip PK</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span></span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Massive</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded image-profile-dms" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2 name-lastdm" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2 name-lastdm1"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                        </div>

                                        <button type="button" className="btn mt-2 gr add-btn-dms1" data-bs-toggle="modal" data-bs-target="#add-coworker-btn11">
                                            Add colleagues
                                        </button>
                                        <div className="modal fade" id="add-coworker-btn11" tabIndex="-1" aria-labelledby="add-coworker-btn11-label" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <form action='' method='' className="modal-body">
                                                        <div className="add-channel-heading pb-4">
                                                            <h4>Invite people <b className="sol">to saklin </b></h4>
                                                        </div>

                                                        <h6 className='label-colle pb-2'>Add colleagues :</h6>

                                                        <div className="email-add-colleagues">
                                                            <textarea className='w-100 p-2 rounded' name="" id="" cols="" rows="5" style={{ background: 'transparent' }} placeholder='name@sweetsever.com'></textarea>
                                                        </div>

                                                        <div className="p-2 mt-3 send-invites-btn" style={{ float: 'right' }}><button className="btn gr w-100">Send Invites</button></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item w-100 d-flex flex-column align-items-center">
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

                    <li className="nav-item w-100 d-flex flex-column align-items-center">
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

                    <li className="nav-item w-100 d-flex flex-column align-items-center">
                        <Link to='/signin' className="nav-link align-middle px-0 text-white">
                            <div className="text-center">
                                <i className="fa-solid fa-plus px-2 py-2 rounded"
                                    style={{ backgroundColor: "rgba(210, 210, 210, 0.432)" }}></i>
                            </div>
                        </Link>
                    </li>

                </ul>
                {/* <!-- <hr>
                    <div className="w-100 align-items-center">
                        <div className="d-flex align-items-center text-white text-decoration-none justify-content-center">
                            <a href="#" className="nav-link px-0 align-middle  text-white"><i
                                    className="fa-solid fa-plus px-2"></i></a>
                        </div>
                    </div> --> */}
            </div>
        </div>

    )
}

export default Sidebar
