import React from 'react'
import { Link } from 'react-router-dom';
import profile from '../../../assets/bl-profile.webp';
import '../mainapp/MainApp.scss';
import './LeftSection.scss';

const LeftSection = () => {
    return (
        <div className="mid-left-section-1">
            {/* <!-- left-section start --> */}
            <div className="left-side" style={{ backgroundColor: "#131618" }}>

                <div className="left-top d-flex p-2 gap-2 justify-content-between">
                    <div className="acc-name dropdown d-flex justify-content-between">
                        <p style={{ border: 'none', fontWeight: '600' }}>
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
                            <div className="channels dropdown d">
                                <a style={{ border: 'none', color: 'rgb(185, 186, 189)' }}>
                                    &nbsp;Channels
                                </a>
                            </div>
                        </div>
                    </div>

                    <ul className="mid channels nav-link" style={{ lineHeight: '7px', marginLeft: '0.2rem', listStyle:'none' }}>
                        <li className='hide-scroll1' style={{maxHeight:'225px' ,overflowY:'auto'}}>
                            <p><Link to="/app"><i className="fa-solid fa-hashtag"></i> general</Link></p>
                            <p><Link to="/app"><i className="fa-solid fa-hashtag"></i> random</Link></p>
                            <p><Link to="/app"><i className="fa-solid fa-hashtag"></i> random</Link></p>
                            <p><Link to="/app"><i className="fa-solid fa-lock"></i> private</Link></p>
                            <p><Link to="/app"><i className="fa-solid fa-lock"></i> private</Link></p>
                            <p><Link to="/app"><i className="fa-solid fa-lock"></i> private</Link></p>
                            <p><Link to="/app"><i className="fa-solid fa-lock"></i> private</Link></p>
                            <p><Link to="/app"><i className="fa-solid fa-lock"></i> private</Link></p>
                        </li>


                        <button style={{ fontSize: '14px' }} type="button" className="btn d-flex mt-2" data-bs-toggle="modal" data-bs-target="#add-channel-btn">
                            <p><a href="#"><i className="fa-solid fa-plus"></i> Add <span className="hide-2"
                                style={{ opacity: '0.7', fontWeight: '400' }}>channel</span></a></p>
                        </button>

                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="add-channel-btn" tabIndex="-1" aria-labelledby="add-channel-btn-label" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <form action='#' method='' className="modal-body">
                                        <div className="add-channel-heading">
                                            <h4>Create <b className="sol">a channel</b></h4>
                                        </div>
                                        <div className="input-channel pt-4">
                                            <label className='pb-4' htmlFor="ChannelName" style={{ fontWeight: '600' }}>Name</label>
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
                                                    <ul style={{ listStyleType: 'none', marginLeft: '-3%', opacity: '0.7', fontSize: '14px' }}>
                                                        <input className='mt-2' type="text" name="private-email" id="private-email" placeholder='Enter Email' style={{ border: '1px solid #9d9c9c79' }} />
                                                        <li className='mt-1'>Can only be viewed or joined by invitation</li>
                                                    </ul>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="modal-footer1 pt-2">
                                            <button type='submit' className="btn gr p-2" style={{ float: 'right' }}>Create</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </ul>

                    <div className="mid DMs">
                        <div className="lb-mid-top d-flex">

                            <div className="channels dropdown">
                                <a style={{ border: 'none' }} className="btn dropdown-toggle text-white" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                </a>
                                {/* <!-- <ul className="dropdown-menu bg-dark">
                                    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                </ul> --> */}
                            </div>

                            <div className="channel-heading">
                                <div className="channels dropdown d">
                                    <a style={{ border: 'none', color: 'rgb(185, 186, 189)' }}>
                                        &nbsp;Direct messages
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="mid channels nav-link" style={{ lineHeight: '25px' }}>

                        <div className="dms-main" style={{ cursor: 'pointer', maxHeight: '225px', overflowY: 'auto' }}>
                            <p className='m-0'><Link to='/direct-chat-app-with-friend' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Animallo</span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>

                            <p className='m-0'><Link to='/direct-chat-app-with-me' className="sub-dms">
                                <img src={profile} alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Saklin<span className="hide-2"> ( you )</span></span>
                            </Link></p>
                        </div>

                        <div className="add-colleagues">

                            <button style={{ fontSize: '14px' }} type="button" className="btn d-flex mt-2" data-bs-toggle="modal" data-bs-target="#add-coworker-btn">
                                <p><a href="#"><i className="fa-solid fa-plus pt-1"></i> Add <span className="hide-2"
                                    style={{ opacity: '0.7', fontWeight: '400' }}>colleagues</span></a></p>
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="add-coworker-btn" tabIndex="-1" aria-labelledby="add-coworker-btn-label" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <form action='' method='' className="modal-body">
                                            <div className="add-channel-heading pb-4">
                                                <h4>Invite people <b className="sol">to saklin </b></h4>
                                            </div>

                                            <h6>Add colleagues :</h6>

                                            <div className="email-add-colleagues pt-2">
                                                <textarea className='w-100 p-2' name="" id="" cols="" rows="5" style={{ background: 'transparent' }} placeholder='name@sweetsever.com'></textarea>
                                            </div>

                                            <div className="btn gr p-2 mt-3" style={{ float: 'right' }}><button className="btn w-100">Send Invites</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </ul>
                </div>
            </div>
            {/* <!-- left-section end --> */}
        </div>

    )
}

export default LeftSection
