// import React from 'react'
import '../mainapp/MainApp.scss';

const RightSection = () => {
    return (
        <div className="mid-right-section-3">
            <div className="right-side-1">


                {/* <!-- r-top start --> */}
                <div className="right-top p-2 d-flex justify-content-between align-items-center">

                    {/* <!-- Button trigger modal --> */}
                    <a type="button" className="btn modal-btn-general text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                        <i className="fa-solid fa-hashtag"></i> general <i
                            className="fa-solid fa-caret-down text-white"></i>
                    </a>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">General</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    xyz
                                </div>
                                <div className="modal-footer">

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
                                            <input className='modal-body-input' type="search" name="" id="" placeholder='Search Here'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="user-top-count">
                            <span><i className="fa-solid fa-user text-dark"></i></span>
                            <span><i className="fa-solid fa-user text-dark"></i></span>
                            <span className="count">3</span>
                        </div>

                        <div className="huddle-top">
                            <div className="btn btn-huddle">
                                <a className="btn text-white btn-sm" type="button">
                                    <i className="fa-solid fa-headphones-simple" style={{ fontSize: '1rem' }}></i><span style={{ fontSize: '1rem', padding: '5px' }}>Huddle</span>
                                </a>
                                <a type="button"
                                    className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden"></span>
                                </a>
                                <ul className="dropdown-menu bg-dark p-2">
                                    <li><a href="#" className="text-white"><i className="fa-solid fa-headphones-simple"></i>
                                        &nbsp;Start
                                        huddle</a></li>
                                    <li><a href="#" className="text-white"><i className="fa-solid fa-link"></i>
                                        &nbsp;Copy huddle link</a>
                                    </li>
                                </ul>
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
                        <span><i className="fa-solid fa-plus"></i>&nbsp;Add a bookmark</span>
                    </div>
                    <hr />
                </div>
                {/* <!-- bookmarks add end--> */}





                {/* <!-- msg show-section start --> */}
                <div className="scrollable-content">
                    {/* <!-- channel-something-section start --> */}
                    <div className="channel-inner-section px-2">
                        <h1>
                            <span><i className="fa-solid fa-bullhorn"></i></span>
                            &nbsp;You’re looking at the&nbsp;
                            <span>
                                <i className="fa-solid fa-hashtag"></i>general
                            </span>
                        </h1>
                        <p>This is the one channel that will always include everyone. It’s a great spot for
                            announcements and team-wide conversations.</p>
                        <p className="edit-desc"><a className="text-primary" href="#">Edit description</a></p>



                        <div className="btns">
                            {/* <!-- modals for add colleagues start --> */}
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="btn" data-bs-toggle="modal"
                                data-bs-target="#exampleModal1">
                                <i className="fa-solid fa-user-plus"></i>&nbsp;Add colleagues
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal1" tabIndex="-1"
                                aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h2 className="modal-title" id="exampleModalLabel1">
                                                Add people to&nbsp;
                                                <span>
                                                    <i className="fa-solid fa-hashtag"></i> general
                                                </span>
                                            </h2>
                                            <button type="button" className="btn-close border-0" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <input type="text" name="colleague" id="colleague"
                                                placeholder="e.g. Nathalie, ou james@a1saklin.com" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn border-0">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- modals for add colleagues end --> */}

                            <div className="btns1">
                                {/* <!-- modals for Forward email start --> */}
                                {/* <!-- Button trigger modal --> */}
                                <button type="button" className="btn btn-modal" data-bs-toggle="modal"
                                    data-bs-target="#exampleModalF">
                                    <i className="fa-solid fa-envelope-circle-check"></i>&nbsp; Forward emails to
                                    this
                                    channel
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModalF" tabIndex="-1"
                                    aria-labelledby="exampleModalLabel3" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">

                                                <h3 className="modal-title" id="exampleModalLabel3">
                                                    Send emails to #general<span className="pro">PRO</span>
                                                </h3>

                                                <button type="button" className="btn-close border-0"
                                                    data-bs-dismiss="modal" aria-label="Close">
                                                </button>

                                            </div>
                                            <div className="modal-body">
                                                <p>Emails sent to this email address will be posted in the
                                                    #general
                                                    channel.</p>
                                                <p className="how-to"><a className="text-primary" href="#">How to use
                                                    this
                                                    address</a>.</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-success">Get email
                                                    address</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- modals for Forward email end --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- channel-something-section end --> */}

                    <hr />
                    {/* <!-- add/join msg-section-start --> */}
                    <div className="msg-section px-2">
                        <div className="msg-inner-section d-flex gap-2">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                className="rounded" />
                            <div className="msg-desc">
                                <div className="msg-desc-top d-flex gap-2">
                                    <p>saklinmustak</p>
                                    <span>5:21 PM</span>
                                </div>
                                <p className="msg-desc-bottom">joined #general. supriyo and Saklin also joined.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- add/join msg-section-end --> */}

                    {/* <!-- actual msg section start --> */}

                    <div className="actual-conversation d-block">
                        <hr />
                        <div className="msg-section px-2 py-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>pradiptabhuin</p>
                                        <span>9:29 PM</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@Saklin Wind</a>
                                            </span>
                                            &nbsp;ei same ui ta banate hbe.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span>
                                            &nbsp;Ok.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span>
                                            &nbsp;Ok.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span>
                                            &nbsp;Ok.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span>
                                            &nbsp;Ok.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span>
                                            &nbsp;Ok.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span>
                                            &nbsp;Ok.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span>
                                            &nbsp;Ok.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span>
                                            &nbsp;Ok.
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
                <div className="reply-section-main bg-dark">
                    <div className="reply-section-inner">
                        <div className="menu-operations d-flex align-items-center">
                            <span><i className="fa-solid fa-solid fa-b"></i></span>
                            <span><i className="fa-solid fa-italic"></i></span>
                            <span><i className="fa-solid fa-strikethrough"></i></span>
                            {/* <!-- <span className="line">|</span> --> */}
                            <span><i className="fa-solid fa-link"></i></span>
                            {/* <!-- <span className="line">|</span> --> */}
                            <span><i className="fa-solid fa-list-ul"></i></span>
                            <span><i className="fa-solid fa-list-ul"></i></span>
                            {/* <!-- <span className="line">|</span> --> */}
                            <span><i className="fa-solid fa-bars-staggered"></i></span>
                            {/* <!-- <span className="line">|</span> --> */}
                            <span><i className="fa-solid fa-code"></i></span>
                            <span><i className="fa-regular fa-file-code"></i></span>
                        </div>

                        <div className="reply-box">
                            <input type="text" name="reply" id="reply" placeholder="Message #general" />
                        </div>

                        <div className="reply-section-bottom-operations d-flex justify-content-between">
                            <div className="bottom-operations-inner d-flex justify-content-center align-items-center">
                                <span><i className="fa-solid fa-plus"></i></span>
                                <span><i className="fa-solid fa-arrow-up-a-z"></i></span>
                                <span><i className="fa-regular fa-face-smile"></i></span>
                                <span><i className="fa-solid fa-at"></i></span>
                                {/* <!-- <span className="line">|</span> --> */}
                                <span><i className="fa-solid fa-video"></i></span>
                                <span><i className="fa-solid fa-microphone"></i></span>
                                {/* <!-- <span className="line">|</span> --> */}
                                <span><i className="fa-regular fa-keyboard"></i></span>
                            </div>

                            <div
                                className="bootom-reply-section-right d-flex justify-content-center align-items-center">
                                <p className="send-btn d-flex gap-2 justify-content-center align-items-center"
                                    style={{ marginbottom: '0' }}>
                                    <span className="btn"><i className="fa-regular fa-paper-plane"></i></span>
                                    <span className="btn"><i className="fa-solid fa-caret-down"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- to type any msg / reply section end --> */}



            </div>
        </div>
    )
}

export default RightSection
