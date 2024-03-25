// import React from 'react';
import { Link } from 'react-router-dom';
import './Common.scss';
import './Step5.scss';
// import '../../application/mainApp/MainApp.scss'

const Step5 = () => {
  return (
    <div className='Main'>
      <div className="mid-section-400 mt-5">

        {/* <!-- sidebar start --> */}
        <div className="mid-sidebar-section-400">
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
        <div className="mid-left-section-400">
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

                <div className="channels dropdown" >
                  <button style={{ border: 'none' }} className="btn dropdown-toggle text-white" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                  </button>
                </div>

                <div className="channel-heading">
                  <div className="channels dropdown" style={{ marginTop: '15%', marginLeft: '-28%' }}>
                    <a style={{ border: 'none', color: 'rgb(185, 186, 189)' }}>
                      &nbsp;Channels
                    </a>
                  </div>
                </div>
              </div>

              <ul className="mid channels nav-link" style={{ lineHeight: '7px', marginLeft: '1.3rem', listStyle: 'none', marginTop: '-3%' }}>
                <li><a href="#"><i className="fa-solid fa-hashtag"></i> general</a></li>
                {/* <!-- <li><a href="#"><i className="fa-solid fa-hashtag"></i> random</a></li> --> */}
              </ul>

              <div className="mid DMs">
                <div className="lb-mid-top d-flex">

                  <div className="channels dropdown">
                    <button style={{ border: 'none' }} className="btn dropdown-toggle text-white" type="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    {/* <!-- <ul className="dropdown-menu bg-dark">
                <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
            </ul> --> */}
                  </div>

                  <div className="channel-heading">
                    <div className="channels dropdown" style={{ marginTop: '8%' }}>
                      <a style={{ border: 'none', color: 'rgb(185, 186, 189)', marginLeft: '-15%' }}>
                        &nbsp;Direct messages
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="mid channels nav-link" style={{ marginLeft: '0.8rem', lineHeight: '' }}>

                <div className="dms-main" style={{ marginTop: '-0.8rem' }}>
                  <div className="sub-dms">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="26" height="26"
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
          </div>
          {/* <!-- left-section end --> */}
        </div>

        {/* <!-- left side end --> */}


        {/* <!-- right side start --> */}
        <div className="mid-right-section-400">
          <div className="right-side">
            <div className="r-s-main-inner-2">
              <div className="right-inner-side-400">
                <div className="steps">
                  <p>Step 5 of 5</p>
                </div>
                <div className="r-heading-2">
                  <h1>Your XYZ workspace is ready to go!</h1>
                </div>
                <div className="r-desc-1">
                  <p>Choose a plan to get started ~</p>
                </div>
                <div className="r-cads">
                  <div className="r-card-left">

                    <div className="r-c-top">
                      <div className="r-c-free">
                        <h2>Free</h2>
                      </div>
                      <div className="r-c-box">
                        <p className="gr" style={{ opacity: '0.8' }}>For Teams Trying Out XYZ</p>
                      </div>
                    </div>

                    <div className="r-c-amount">
                      <p>$0</p>
                      <span>per month</span>
                    </div>

                    <div className="btn-400 rounded">
                      <Link to="/app" className="btn btn-nav">Start With Free</Link>
                    </div>

                    <ul className="lists-0 pt-3" style={{ opacity: '0.9' }}>
                      <li>Limited projects and tasks</li>
                      <li>90 days of message history</li>
                      <li>20 apps or integrations</li>
                    </ul>
                  </div>

                  <div className="r-card-right">

                    <div className="r-c-top">
                      <div className="r-c-free">
                        <h2>Pro</h2>
                      </div>
                      <div className="r-c-box">
                        <p className="gr" style={{ opacity: '0.8' }}>For Professional Teams</p>
                      </div>
                    </div>

                    <div className="r-c-amount">
                      <p>$15</p>
                      <span>per month</span>
                    </div>

                    <div className="btn-400 pro rounded gr">
                      <a href="#" className="btn btn-nav">Upgrade to Pro</a>
                    </div>

                    <ul className="lists pt-3" style={{ opacity: '0.9' }} type="none">
                      <li><i className="fa-solid fa-check sol"></i>&nbsp;Unlimited projects and tasks</li>
                      <li><i className="fa-solid fa-check sol"></i>&nbsp;Unlimited message history</li>
                      <li><i className="fa-solid fa-check sol"></i>&nbsp;Unlimited apps & integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- right side eend --> */}

      </div>
    </div>
  )
}

export default Step5
