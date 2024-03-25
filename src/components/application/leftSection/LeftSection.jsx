// import React from 'react'
import '../mainApp/MainApp.scss';

const LeftSection = () => {
    return (
        <div className="mid-left-section-1">
            {/* <!-- left-section start --> */}
            <div className="left-side" style={{backgroundColor: "#131618"}}>

                <div className="left-top d-flex p-2 gap-2 justify-content-between">
                    <div className="acc-name dropdown d-flex justify-content-between">
                        <p style={{border: 'none', fontWeight: '600'}}>
                            SaklinTesting
                        </p>
                    </div>
                </div>

                <div className="bottom-mid">
                    <div className="lb-top d-flex">

                        <div className="channels dropdown">
                            <a style={{border: 'none'}} className="btn dropdown-toggle text-white" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            </a>
                        </div>

                        <div className="channel-heading">
                            <div className="channels dropdown d">
                                <a style={{border: 'none', color: 'rgb(185, 186, 189)'}}>
                                    &nbsp;Channels
                                </a>
                            </div>
                        </div>
                    </div>

                    <ul className="mid channels nav-link" style={{lineHeight: '7px', marginLeft:'0.2rem'}}>
                        <p><a href="#"><i className="fa-solid fa-hashtag"></i> general</a></p>
                        <p><a href="#"><i className="fa-solid fa-hashtag"></i> random</a></p>
                    </ul>

                    <div className="mid DMs">
                        <div className="lb-mid-top d-flex">

                            <div className="channels dropdown">
                                <a style={{border: 'none'}} className="btn dropdown-toggle text-white" type="button"
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
                                    <a style={{border: 'none', color:'rgb(185, 186, 189)'}}>
                                        &nbsp;Direct messages
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="mid channels nav-link" style={{lineHeight: '25px'}}>

                        <div className="dms-main">
                            <div className="sub-dms">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Animallo</span>
                            </div>

                            <div className="sub-dms">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="26" height="26"
                                    className="rounded" />
                                <span className="px-2">Rohit S</span>
                            </div>

                            {/* <!-- <div className="sub-dms">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="26" height="26"
                                        className="rounded">
                                    <span className="px-2">Mahidra SD</span>
                                </div> --> */}
                        </div>

                        <div className="add-colleagues">
                            <p><a href="#"><i className="fa-solid fa-plus"></i> &nbsp;Add <span className="hide-2"
                                style={{opacity:'0.7'}}>colleagues</span></a></p>
                        </div>

                    </ul>
                </div>
            </div>
            {/* <!-- left-section end --> */}
        </div>

    )
}

export default LeftSection
