import React, { useRef, useState } from 'react';
import profile from '../../../assets/bl-profile.webp';
import '../../application/mainapp/MainApp.scss';
import './DirectChatRightSection.scss';
import ReplyBox from '../replybox/ReplyBox';
// import './Test.scss';

const DMRightSectionMe = () => {
    const handleKeyDown = (e) => {
        e.preventDefault(); // Prevent default behavior for keydown event
        // Your code logic for handling keydown event
    };




    return (
        <div className="mid-right-section-3" id='right-me' style={{ overflowY: 'hidden' }}>
            <div className="right-side-1" style={{ overflowY: 'hidden' }}>


                {/* <!-- r-top start --> */}
                <div className="right-top p-2 d-flex justify-content-between align-items-center">

                    {/* <!-- Button trigger modal --> */}
                    <a type="button" className="btn modal-btn-general text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                        <img src={profile} alt="" width={32} className='rounded' />&nbsp;Saklin <i className="fa-solid fa-caret-down text-white"></i>
                    </a>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    xyz.....
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Modal --> */}

                    <div className="top-left-general d-flex gap-2">

                        <div className="searchbar-hide-show d-flex">
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#search-bar">
                                <span><i className="fa-solid fa-magnifying-glass"></i></span>
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="search-bar" tabIndex="-1" aria-labelledby="search-bar-show" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <input className='modal-body-input' type="search" name="" id="" placeholder='Search Here' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="huddle-top">
                            <div className="btn btn-canvas">
                                <button className="btn text-white btn-sm" type="button">
                                    <i className="fa-solid fa-file-circle-plus" style={{ fontSize: '1rem' }}></i><span style={{ fontSize: '1rem', padding: '5px' }}>Canvas</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- r-top end --> */}


                {/* <!-- bookmarks add start--> */}
                <div className="bookmark-main stick-top">
                    <div className="bookmark-inner">
                        <span style={{ opacity: '0.8' }}><i className="fa-solid fa-plus"></i>&nbsp;Add a bookmark</span>
                    </div>
                    <hr />
                </div>
                {/* <!-- bookmarks add end--> */}





                {/* <!-- msg show-section start --> */}
                <div className="scrollable-content">
                    {/* <!-- channel-something-section start --> */}
                    <div className="channel-inner-section px-2">
                        <div className="profile-view-directchat-inner p-5 pb-0 pt-3">
                            <div className="profile-direct-chat d-flex align-items-center mt-3 gap-3 flex-column" style={{ width: 'fit-content' }}>
                                <div className="img-prof">
                                    <img className="rounded" src={profile} alt="" width="120px" height="120px" />
                                </div>
                                <div className="direct-chat-name">
                                    <h2>Saklin ( you )</h2>
                                </div>
                            </div>

                            <div className="direct-chat-prof-desc mt-2">
                                <p style={{ opacity: '0.8', fontSize: '0.9rem' }}>This is your space. Draft messages, list your to-dos, or keep links and files handy. You can also talk to yourself here, but please bear in mind you’ll have to supply both sides of the conversation.</p>
                            </div>


                            <div className="profile-view-button-main">
                                <button type="button" className="btn" data-bs-toggle="modal"
                                    data-bs-target="#profile-view-btn">
                                    Edit Profile
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="profile-view-btn" tabIndex="-1"
                                    aria-labelledby="exampleModalLabel1" aria-hidden="true">
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
                                                                <button type="button" className="btn gr" data-bs-toggle="modal" data-bs-target="#prof-edit-btn" >
                                                                    Edit
                                                                </button>

                                                                {/* <!-- Modal --> */}
                                                                <div className="modal fade" id="prof-edit-btn" tabIndex="-1" aria-labelledby="prof-edit-btn-Label" aria-hidden="true">
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

                                                                                            <label htmlFor="uploadprofileimage" className='mt-3 btn'>Upload Photo</label>
                                                                                            <input type="file" name="uploadprofile" id="uploadprofileimage" style={{ display: 'none' }} />

                                                                                            <button type='reset' className="btn remove mt-1">Remove Photo</button>
                                                                                        </div>

                                                                                        <div className="input-fields-profile">
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
                                                                                <button type="submit" className="btn gr">Save changes</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* profile name section end */}



                                                            {/* add-name-pr section start */}
                                                            <div className="add-name-pr">
                                                                <button className="btn"> {/*add modals same as edit*/}
                                                                    <span><i className="fa-solid fa-plus sdd"></i></span>
                                                                    <span className='sdd1'>&nbsp;Add name pronunciation</span>
                                                                </button>

                                                                <div className="active-status">
                                                                    <i className="fa-solid fa-circle active-circle"></i>&nbsp; Active
                                                                </div>

                                                                <div className="profiletimer mt-1">
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

                                                                    <div className="contact-email-view mt-4">
                                                                        <div className="contact-email-details">
                                                                            <div className="email-desc px-2">
                                                                                <span style={{ fontWeight: '600' }}>Start date</span>
                                                                                <span className='ed-span' style={{ color: '#1d8cbc' }}>Apr 1, 2024 (11 hours ago)</span>
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

                        </div>


                    </div>
                    {/* <!-- channel-something-section end --> */}

                    {/* <hr /> */}
                    {/* <!-- add/join msg-section-start --> */}
                    {/* <div className="msg-section px-2">
                        <div className="msg-inner-section d-flex gap-2">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                className="rounded" />
                            <div className="msg-desc">
                                <div className="msg-desc-top d-flex gap-2">
                                    <p>saklinmustak</p>
                                    <span>5:21 PM , 10.03.24</span>
                                </div>
                                <p className="msg-desc-bottom">joined #general. supriyo and Saklin also joined.
                                </p>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- add/join msg-section-end --> */}

                    {/* <!-- actual msg section start --> */}

                    <div className="actual-conversation d-block">
                        <hr />

                        <div className="msg-section px-2 py-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src={profile} alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin</p>
                                        <span>9:29 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            {/* <span className="msg-desc-bottom-inner">
                                                <a href="#">@Saklin Wind</a>
                                            </span> */}
                                            &nbsp;ei same ui ta banate hbe.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 py-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src={profile} alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin</p>
                                        <span>9:29 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            {/* <span className="msg-desc-bottom-inner">
                                                <a href="#">@Saklin Wind</a>
                                            </span> */}
                                            &nbsp;ei same ui ta banate hbe.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 py-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src={profile} alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin</p>
                                        <span>9:29 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            {/* <span className="msg-desc-bottom-inner">
                                                <a href="#">@Saklin Wind</a>
                                            </span> */}
                                            &nbsp;ei same ui ta banate hbe.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 py-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src={profile} alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin</p>
                                        <span>9:29 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            {/* <span className="msg-desc-bottom-inner">
                                                <a href="#">@Saklin Wind</a>
                                            </span> */}
                                            &nbsp;ei same ui ta banate hbe.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 py-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src={profile} alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin</p>
                                        <span>9:29 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            {/* <span className="msg-desc-bottom-inner">
                                                <a href="#">@Saklin Wind</a>
                                            </span> */}
                                            &nbsp;ei same ui ta banate hbe.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 py-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src={profile} alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin</p>
                                        <span>9:29 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            {/* <span className="msg-desc-bottom-inner">
                                                <a href="#">@Saklin Wind</a>
                                            </span> */}
                                            &nbsp;ei same ui ta banate hbe.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- actual msg section end --> */}
                </div>
                {/* <!-- msg show-section end --> */}




                {/* <!-- to type any msg / reply section start --> */}
                <ReplyBox />
                {/* <!-- to type any msg / reply section end --> */}



            </div>
        </div>
    )
}

export default DMRightSectionMe;
