// import React from 'react'
import '../mainapp/MainApp.scss';

const Sidebar = () => {
    return (
        <div className="mid-sidebar-section-4">
                <div className="inner-sidebar d-flex flex-column align-items-center align-items-sm-start text-white">

                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
                        id="menu" style={{fontSize:'12px'}}>

                        <li className="nav-item w-100 pb-3 pt-3">
                            <a href="#"
                                className="d-flex align-items-center text-white text-decoration-none justify-content-center">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="36" height="34"
                                    className="rounded"/>
                            </a>
                        </li>

                        <li className="nav-item w-100">
                            <a href="#" className="nav-link align-middle px-0 text-white">
                                <div className="text-center">
                                    <i className="fa-solid fa-house px-2 py-2 rounded"
                                        style={{backgroundColor: "rgba(210, 210, 210, 0.432)"}}></i>
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

                        <li className="nav-item w-100">
                            <a href="#submenu1" data-bs-toggle="collapse"
                                className="nav-link px-0 align-middle  text-white">
                                <div
                                    className="d-flex align-items-center text-white text-decoration-none justify-content-center">
                                    <a href="#" className="nav-link px-0 align-middle  text-white"><i
                                            className="fa-solid fa-plus px-2"></i></a>
                                </div>
                            </a>
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
