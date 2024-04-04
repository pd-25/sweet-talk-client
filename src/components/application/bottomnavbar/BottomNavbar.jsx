import React, { useState, useEffect } from 'react';
import '../mainapp/MainApp.scss';
import { Link, NavLink } from 'react-router-dom';
import './BottomNavbar.scss';
// import '../../application/direct_chat_rightsection_me/DirectChatRightSection.scss';
import profile from '../../../assets/bl-profile.webp';
import channelsData from './channels.json';

const BootomNavbar = () => {
    const [filter, setFilter] = useState('all');
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(channelsData);
    }, [channelsData]);

    // Function to filter channels based on filter type
    const filteredChannels = filter === 'all' ? data : data.filter(item => item.type === filter);


    return (
        <div className="bottom-main mt-2" style={{ height: 'fit-content' }}>
            <div className="bt-navbar" style={{ height: 'fit-content' }}>
                <div className="bt-inner" style={{ height: 'fit-content' }}>

                    <div className="bt-1 bt-navlink">
                        <NavLink to="/app">
                            <p><i className="fa-solid fa-house"></i></p>
                            <p className="bt-txt mb-0">Home</p>
                        </NavLink>
                    </div>

                    <div className="bt-2 bt-navlink">
                        <NavLink to="/app" data-bs-toggle="modal" data-bs-target="#dms-btn">
                            <p><i className="fa-solid fa-comment"></i></p>
                            <p className="bt-txt mb-0">Dms</p>
                        </NavLink>

                        <div className="modal fade" id="dms-btn" tabIndex="-1" aria-labelledby="dms-btn-Label" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body modal-body-dms">
                                        <div className="dms-main">
                                            <div className="dms-main-inner">
                                                <div className="btn-bar d-flex gap-3 justify-content-start align-items-center">
                                                    <button type="button" className="btn btn-m btn-secondary" data-bs-dismiss="modal"><i className="fa-solid fa-angle-left"></i></button>
                                                    <p>Select chats</p>
                                                </div>
                                                <div className="dm-search-content rounded mt-4">
                                                    <input type="text" name="" id="" placeholder='Search colleagues'/>
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                                <div className="small-heading-fixed mt-4">
                                                    <p>Your Colleagues on XYZ</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="all-dms-main-scroll" style={{ marginTop: '70px', height: '430px', overflowY: 'auto' }}>

                                            <Link to='/only-dm' className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin (you)</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </Link>


                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Rohit Basu</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span></span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Animallo Blogs</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span></span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Supriyo Sir</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span></span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Pabitra Sir</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Sayandip PK</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span></span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Massive</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                            <p className='m-0' data-bs-dismiss="modal"><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                <img src={profile} alt="hugenerd" width="30" height="30"
                                                    className="rounded" />
                                                <div className="name-msg d-flex flex-column align-items-start w-100">
                                                    <span className="px-2" style={{ fontWeight: '500', fontSize: '10px', float: 'left' }}>Saklin</span>
                                                    <span style={{ fontWeight: 'normal', fontSize: '10px', float: 'left' }} className="px-2"><span>You: </span> Last message</span>
                                                </div>
                                            </p>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bt-2 bt-navlink">
                        <NavLink to="/app" data-bs-toggle="modal" data-bs-target="#activity-btn">
                            <p><i className="fa-solid fa-bell"></i></p>
                            <p className="bt-txt mb-0">Activity</p>
                        </NavLink>

                        <div className="modal fade" id="activity-btn" tabIndex="-1" aria-labelledby="activity-btn-Label" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body modal-body-dms">
                                        <div className="dms-main">
                                            <div className="dms-main-inner">
                                                <div className="btn-bar d-flex gap-3 justify-content-start align-items-center">
                                                    <button type="button" className="btn btn-m btn-secondary" data-bs-dismiss="modal"><i className="fa-solid fa-angle-left"></i></button>
                                                    <p>Select channels</p>
                                                </div>
                                                <div className="dm-search-content rounded mt-4">
                                                    <input type="text" name="" id="" placeholder='Search channel' />
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                                <div className="small-heading-fixed mt-4">
                                                    <p>Your Channels on XYZ</p>
                                                </div>

                                                <div className="select-btns-activity" style={{ marginTop: '55px' }}>
                                                    <button className={`btn gr ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                                                    <button className={`btn gr ${filter === 'private' ? 'active' : ''}`} onClick={() => setFilter('private')}>Private</button>
                                                    <button className={`btn gr ${filter === 'public' ? 'active' : ''}`} onClick={() => setFilter('public')}>Public</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="all-dms-main-scroll pt-3" style={{ marginTop: '30px', height: '400px', overflowY: 'auto', borderTop: '1px solid #9d9c9c79' }}>
                                            {filteredChannels.map(item => (
                                                <a key={item.id} href="#" className="m-0" data-bs-dismiss="modal">
                                                    <p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                        <div className="icon-back rounded gr d-flex justify-content-center align-items-center" style={{ width: '35px', height: '35px' }}>
                                                            {item.type === 'public' ? <i className="fa-solid fa-hashtag" style={{ fontSize: '1.1rem' }}></i> : <i className="fa-solid fa-lock" style={{ fontSize: '1.1rem' }}></i>}
                                                        </div>
                                                        <div className="name-msg d-flex flex-column align-items-start w-100">
                                                            <span className="px-2" style={{ fontWeight: '500', fontSize: '12px', float: 'left' }}>{item.name}</span>
                                                            <span style={{ opacity: '0.7', fontWeight: 'normal', fontSize: '12px', float: 'left' }} className="px-2"><span>Members : </span>{item.members}</span>
                                                        </div>
                                                    </p>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bt-4 bt-navlink">
                        <NavLink data-bs-toggle="modal"
                            data-bs-target="#profile-view-btn12">
                            <p><i className="fa-solid fa-user"></i></p>
                            <p className="bt-txt mb-0">Account</p>
                        </NavLink>
                        <div className="modal fade" id="profile-view-btn12" tabIndex="-1"
                            aria-labelledby="profile-view-btn12-Label" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen-xl-down modal-xl">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="profile-view-main-1">

                                            <div className="btn-bar">
                                                <button type="button" className="btn btn-m btn-secondary" data-bs-dismiss="modal"><i className="fa-solid fa-angle-left"></i>&nbsp; Profile</button>
                                            </div>

                                            <div className="coverimg-section">
                                                <div className="inner-coverimg gr">
                                                </div>

                                                <div className="profile-image-section">
                                                    <div className="welcome-text pb-4 text-center">
                                                        Welcome to the team!
                                                    </div>
                                                    <img className='rounded' src={profile} alt="profile" />
                                                </div>

                                            </div>

                                            <div className="profile-manages">
                                                <div className="inner-profile-manages">

                                                    {/* profile name section start */}
                                                    <div className="profilename">
                                                        <h3>saklinwind5333</h3>
                                                        <button type="button" className="btn gr" data-bs-toggle="modal" data-bs-target="#prof-edit-btn12" >
                                                            Edit
                                                        </button>

                                                        {/* <!-- Modal --> */}
                                                        <div className="modal fade" id="prof-edit-btn12" tabIndex="-1" aria-labelledby="prof-edit-btn12-Label" aria-hidden="true">
                                                            <div className="modal-dialog modal-fullscreen-sm-down">
                                                                <div className="modal-content">
                                                                    <div className="modal-body">
                                                                        <div className="form-heading pt-3 mt-3">
                                                                            <h3>Edit <span className='sol' style={{ fontWeight: '700' }}>your profile</span></h3>
                                                                        </div>
                                                                        <div className="form-main">
                                                                            <form action='#' method='' className="form-inner">
                                                                                <div className="profilephoto-update">
                                                                                    <img src={profile} alt="" width={150} className='rounded' />

                                                                                    <label htmlFor="uploadprofileimage" className='mt-2 btn'>Upload Photo</label>
                                                                                    <input type="file" name="uploadprofile" id="uploadprofileimage" style={{ display: 'none' }} />

                                                                                    <button type='reset' className="btn remove">Remove Photo</button>
                                                                                </div>

                                                                                <div className="input-fields-profile mt-2">
                                                                                    <label htmlFor="fname" className='profile-label pb-2'>Full name</label>
                                                                                    <input className='profile-input pb-2' type="text" name="fname" id="fname" value='saklinwind5333' />

                                                                                    <label htmlFor="displayname" className='profile-label pb-2 pt-3'>Display name</label>
                                                                                    <input className='profile-input pb-2' type="text" name="displayname" id="displayname" value='Saklin' />
                                                                                    <p className="display-name-desc pt-1">This could be your first name, or a nickname — however you’d like people to refer to you in XYZ.</p>

                                                                                    <label htmlFor="title" className='profile-label pb-2'>Title</label>
                                                                                    <input className='profile-input pb-2' type="text" name="title" id="title" placeholder='Title' />
                                                                                    <p className="display-name-desc pt-1">Let people know what you do at <b>saklin</b>.</p>

                                                                                    <label htmlFor="namepronounciation" className='profile-label pb-2'>Name pronunciation</label>
                                                                                    <input className='profile-input pb-2' type="text" name="namepronounciation" id="namepronounciation" placeholder='saklin (pronounced "sak-li-n")' />
                                                                                    <p className="display-name-desc pt-1">This could be a phonetic pronunciation, or an example of something your name sounds like.</p>

                                                                                    <label htmlFor="timezone" className='profile-label pb-2'>Time zone</label>
                                                                                    <input className='profile-input pb-2' type="text" name="timezone" id="timezone" placeholder='(UTC+05:30) Chennai,Kolkata...' />
                                                                                    <p className="display-name-desc pt-1">Your current time zone. Used to send summary and notification emails, for times in your activity feeds, and for reminders.</p>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn close" data-bs-dismiss="modal">Cancel</button>
                                                                        <button type="submit" className="btn gr gr-2">Save changes</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* profile name section end */}



                                                    {/* add-name-pr section start */}
                                                    <div className="add-name-pr">
                                                        <div>
                                                            <button className="btn"> {/*add modals same as edit*/}
                                                                <span><i className="fa-solid fa-plus sdd"></i></span>
                                                                <span className='sdd1'>&nbsp;Add name pronunciation</span>
                                                            </button>
                                                        </div>


                                                        <div className="active-status">
                                                            <i className="fa-solid fa-circle active-circle"></i>&nbsp; Active
                                                        </div>

                                                        <div className="profiletimer mt-3 w-100">
                                                            <i className="fa-regular fa-clock"></i>&nbsp; 11:04 AM Local Time
                                                        </div>

                                                        <div className="profile-status-btns mt-4">

                                                            <button className="btn set-status dropdown gr">
                                                                Set a status
                                                            </button>

                                                            <div className="dropdown rounded btn view-as gr">
                                                                <button className="btn" type="button" id="view-as-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    View as
                                                                </button>
                                                                <ul className="dropdown-menu bg-dark" aria-labelledby="view-as-btn">
                                                                    <li><a className="dropdown-item text-white" href="#">Action</a></li>
                                                                    <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                                                    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                                                </ul>
                                                            </div>


                                                            <div className="dropdown rounded btn others-menu gr">
                                                                <button className="btn" type="button" id="others-menu-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul className="dropdown-menu bg-dark" aria-labelledby="others-menu-btn">
                                                                    <li><a className="dropdown-item text-white" href="#">Action</a></li>
                                                                    <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                                                    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                                                </ul>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    {/* add-name-pr section end */}


                                                    <hr />


                                                    {/* contact-info section start */}
                                                    <div className="contact-info-main pb-4 pt-4">
                                                        <div className="contact-info-inner">
                                                            <div className="contact-name">
                                                                <h5>Contact Information</h5>
                                                                <button className="btn gr">Edit</button>
                                                            </div>

                                                            <div className="contact-email-view mt-4">
                                                                <div className="contact-email-details">
                                                                    <div className="contact-email-img">
                                                                        <img className='rounded' src={profile} alt="" />
                                                                    </div>
                                                                    <div className="email-desc px-2">
                                                                        <span className='ed-span' style={{ fontWeight: '600' }}>Email Address</span>
                                                                        <span className='ed-span' style={{ color: '#1d8cbc' }}>saklin@gmail.com</span>
                                                                    </div>
                                                                </div>

                                                                <div className="contact-email-details">
                                                                    <div className="contact-email-img">
                                                                        <img className='rounded' src="https://p.kindpng.com/picc/s/48-480179_png-phone-icons-phone-icon-png-blue-call.png" alt="" />
                                                                    </div>
                                                                    <div className="email-desc px-2">
                                                                        <span className='ed-span' style={{ fontWeight: '600', color: '#1d8cbc' }}>+91 9000006600</span>
                                                                        <span className='ed-span' style={{ fontWeight: '600', color: '#1d8cbc' }}>+91 9008806600</span>
                                                                    </div>
                                                                </div>

                                                                <div className="contact-add-number-btn">
                                                                    <button className="btn"><i className="fa-solid fa-plus add-ph" style={{ fontSize: '14px' }}></i> Add Phone</button>
                                                                    <button className="btn"><i className="fa-solid fa-plus add-ph" style={{ fontSize: '14px' }}></i> Add Email</button>
                                                                </div>
                                                            </div>

                                                            <div className="contact-add2-number-btn pt-3" style={{ display: 'none' }}>
                                                                <button className="btn"><i className="fa-solid fa-plus add-ph" style={{ fontSize: '14px' }}></i> Add Phone</button>
                                                                <button className="btn"><i className="fa-solid fa-plus add-ph" style={{ fontSize: '14px' }}></i> Add Email</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* contact-info section end */}

                                                    <hr />


                                                    {/* about-me section start */}
                                                    <div className="contact-info-main pb-4 pt-4">
                                                        <div className="contact-info-inner">
                                                            <div className="contact-name">
                                                                <h5>About Me</h5>
                                                                <button className="btn gr">Edit</button>
                                                            </div>

                                                            <div className="contact-email-view ">
                                                                <div className="contact-email-details">
                                                                    <div className="email-desc px-2">
                                                                        <span style={{ fontWeight: '600' }}>Start date</span>
                                                                        <span className='ed-span pt-1' style={{ color: '#1d8cbc', fontWeight:'600' }}>Apr 1, 2024 (11 hours ago)</span>
                                                                    </div>
                                                                </div>

                                                                {/* <div className="contact-add-number-btn">
                                                                            <button className="btn"><i className="fa-solid fa-plus add-ph" style={{ fontSize: '14px' }}></i> Add Phone</button>
                                                                        </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* about-me section end */}




                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bt-5 bt-navlink">
                        <a href="">
                            <p><i className="fa-solid fa-ellipsis"></i></p>
                            <p className="bt-txt mb-0">More</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BootomNavbar
