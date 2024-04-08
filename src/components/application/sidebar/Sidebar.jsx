import React, { useState, useEffect } from 'react'
import '../mainapp/MainApp.scss';
import { Link } from 'react-router-dom';
import profile from '../../../assets/bl-profile.webp';
import './Sidebar.scss';
import channelsData from '../bottomnavbar/channels.json';

const Sidebar = () => {

    const [filter, setFilter] = useState('all');
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(channelsData);
    }, [channelsData]);

    // Function to filter channels based on filter type
    const filteredChannels = filter === 'all' ? data : data.filter(item => item.type === filter);
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
                        <Link to='#' data-bs-toggle="modal" data-bs-target="#activity-btn1"
                            className="nav-link px-0 align-middle  text-white" >
                            <div className="text-center">
                                <i className="fa-regular fa-bell"></i>
                            </div>
                            <div className="text-center">
                                <span className="ms-1 d-none d-sm-inline">Activity</span>
                            </div>
                        </Link>

                        <div className="modal fade" id="activity-btn1" tabIndex="-1" aria-labelledby="activity-btn1-Label" aria-hidden="true">
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

                                                <div className="select-btns-activity d-flex justify-content-between" style={{ marginTop: '55px' }}>
                                                    <div className="operation-btns-activity">
                                                        <button className={`btn gr ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                                                        <button className={`btn gr ${filter === 'private' ? 'active' : ''}`} onClick={() => setFilter('private')}>Private</button>
                                                        <button className={`btn gr ${filter === 'public' ? 'active' : ''}`} onClick={() => setFilter('public')}>Public</button>
                                                    </div>
                                                    <div className="add-channels-btn-modal">
                                                        <button type="button" className="btn gr add-btn-activity1" data-bs-toggle="modal" data-bs-target="#add-channel-btn11">
                                                            <i className="fa-solid fa-plus"></i>
                                                        </button>

                                                        <div className="modal fade" id="add-channel-btn11" tabIndex="-1" aria-labelledby="add-channel-btn-label" aria-hidden="true">
                                                            <div className="modal-dialog modal-dialog-centered">
                                                                <div className="modal-content">
                                                                    <form action='#' method='' className="modal-body">
                                                                        <div className="add-channel-heading">
                                                                            <h4>Create <b className="sol">a channel</b></h4>
                                                                        </div>
                                                                        <div className="input-channel pt-4">
                                                                            <label className='pb-2' htmlFor="ChannelName" style={{ fontWeight: '600' }}>Name</label>
                                                                            <input type="text" name="ChannelName" id="ChannelName" placeholder='#e.g. project-02' style={{ border: '1px solid #9d9c9c79' }} />
                                                                            <p className="add-channel-desc pt-1" style={{ lineHeight: '18px', fontSize: '12px', opacity: '0.8' }}>
                                                                                Channels are where conversations happen around a topic. Use a name that is easy to find and understand.
                                                                            </p>
                                                                        </div>

                                                                        <div className="input-visibility" style={{ lineHeight: '24px' }}>
                                                                            <div className="visibility-name">
                                                                                <h6>Visibility</h6>
                                                                                <ul style={{ listStyleType: 'none', marginLeft: '-4%' }}>
                                                                                    <li><input type="radio" name="visibility" value="public" id="visibility" style={{ width: 'fit-content' }} />&nbsp; Public- anyone in <b>project-02</b></li>
                                                                                    <li><input type="radio" name="visibility" value="private" id="visibility" style={{ width: 'fit-content' }} />&nbsp; Private- Only specific people</li>
                                                                                    <ul className='inner-ul' style={{ listStyleType: 'none', marginLeft: '-3%', opacity: '0.7', fontSize: '14px' }}>
                                                                                        <input className='mt-2' type="text" name="private-email" id="private-email" placeholder='Enter Email' style={{ border: '1px solid #9d9c9c79' }} />
                                                                                        <li className='mt-1'>Can only be viewed or joined by invitation</li>
                                                                                    </ul>
                                                                                </ul>
                                                                            </div>
                                                                        </div>

                                                                        <div className="modal-footer2">
                                                                            <button type='submit' className="btn create-channel gr p-2" style={{ float: 'right' }}>Create</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="all-dms-main-scroll pt-3" style={{ marginTop: '30px', maxHeight: '400px', overflowY: 'auto', borderTop: '1px solid #9d9c9c79' }}>
                                            {filteredChannels.map(item => (
                                                <a key={item.id} href="#" className="m-0" data-bs-dismiss="modal">
                                                    <p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                                        <div className="icon-back rounded gr d-flex justify-content-center align-items-center" style={{ width: '35px', height: '35px' }}>
                                                            {item.type === 'public' ? <i className="fa-solid fa-hashtag" style={{ fontSize: '1.1rem' }}></i> : <i className="fa-solid fa-lock" style={{ fontSize: '1.1rem' }}></i>}
                                                        </div>
                                                        <div className="name-msg d-flex flex-column align-items-start w-100">
                                                            <span className="px-2" style={{ fontWeight: '500', fontSize: '16px', float: 'left' }}>{item.name}</span>
                                                            <span style={{ opacity: '0.7', fontWeight: 'normal', fontSize: '14px', float: 'left' }} className="px-2"><span>Members : </span>{item.members}</span>
                                                        </div>
                                                    </p>
                                                </a>
                                            ))}
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
