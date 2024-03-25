// import React from 'react'
import '../mainApp/MainApp.scss';

const BootomNavbar = () => {
    return (
        <div className="bottom-main mt-2">
            <div className="bt-navbar">
                <div className="bt-inner">
                    <div className="bt-1 bt-navlink">
                        <a href="">
                            <p><i className="fa-solid fa-house"></i></p>
                            <p className="bt-txt">Home</p>
                        </a>
                    </div>

                    <div className="bt-2 bt-navlink">
                        <a href="">
                            <p><i className="fa-solid fa-comment"></i></p>
                            <p className="bt-txt">Dms</p>
                        </a>
                    </div>

                    <div className="bt-3 bt-navlink">
                        <a href="">
                            <p><i className="fa-solid fa-bell"></i></p>
                            <p className="bt-txt">Activity</p>
                        </a>
                    </div>

                    <div className="bt-4 bt-navlink">
                        <a href="">
                            <p><i className="fa-solid fa-user"></i></p>
                            <p className="bt-txt">Account</p>
                        </a>
                    </div>
                    <div className="bt-5 bt-navlink">
                        <a href="">
                            <p><i className="fa-solid fa-ellipsis"></i></p>
                            <p className="bt-txt">More</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BootomNavbar
