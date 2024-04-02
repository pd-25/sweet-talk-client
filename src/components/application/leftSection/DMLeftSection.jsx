import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/bl-profile.webp';
import '../mainapp/MainApp.scss';
import './DMLeftSection.scss';

const DMLeftSection = () => {
  return (
    <div className="mid-left-section-1">
            {/* <!-- left-section start --> */}
            <div className="left-side" style={{ backgroundColor: "#131618" }}>

                <div className="left-top d-flex p-2 gap-2 justify-content-between">
                    <div className="acc-name dropdown d-flex justify-content-between">
                        <p className='pb-0' style={{ border: 'none', fontWeight: '600' }}>
                            <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>Direct messages</p>
                            <div className="find-dm mt-2">
                                <div className="inp-search p-1 rounded" style={{ border: '1px solid #9d9c9c79' }} >
                                    <input type="search" name="" id="" className='rounded' placeholder='Find a DM' style={{ background: 'transparent', border: 'none', fontWeight: '500', opacity: '0.7' }} />
                                </div>
                            </div>
                        </p>
                    </div>
                </div>

                <div className="bottom-mid">
                    <ul className="mid channels nav-link" style={{ lineHeight: '25px' }}>

                        <div className="dms-main" style={{ cursor: 'pointer' }}>

                            <p className='m-0'><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                <img src={profile} alt="hugenerd" width="40" height="40"
                                    className="rounded" />
                                <div className="name-msg d-flex flex-column">
                                    <span className="px-2" style={{ fontWeight: '500' }}>Saklin (you)</span>
                                    <span style={{ fontWeight: 'normal' }} className="px-2"><span>You: </span> Last m..</span>
                                </div>
                            </p>
                            </p>

                            <p className='m-0'><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                <img src={profile} alt="hugenerd" width="40" height="40"
                                    className="rounded" />
                                <div className="name-msg d-flex flex-column">
                                    <span className="px-2" style={{ fontWeight: '500' }}>Lorem</span>
                                    <span style={{ fontWeight: 'normal' }} className="px-2"><span></span> Last msg</span>
                                </div>
                            </p>
                            </p>

                            <p className='m-0'><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                <img src={profile} alt="hugenerd" width="40" height="40"
                                    className="rounded" />
                                <div className="name-msg d-flex flex-column">
                                    <span className="px-2" style={{ fontWeight: '500' }}>Michel (you)</span>
                                    <span style={{ fontWeight: 'normal' }} className="px-2"><span>You: </span> Last m...</span>
                                </div>
                            </p>
                            </p>

                            <p className='m-0'><p className="sub-dms d-flex align-items-center pb-2" style={{ borderBottom: '1px solid #9d9c9c79' }}>
                                <img src={profile} alt="hugenerd" width="40" height="40"
                                    className="rounded" />
                                <div className="name-msg d-flex flex-column">
                                    <span className="px-2" style={{ fontWeight: '500' }}>Rohit (you)</span>
                                    <span style={{ fontWeight: 'normal' }} className="px-2"><span></span> Last msg</span>
                                </div>
                            </p>
                            </p>

                        </div>
                    </ul>
                </div>
            </div>
            {/* <!-- left-section end --> */}
        </div>
  )
}

export default DMLeftSection
