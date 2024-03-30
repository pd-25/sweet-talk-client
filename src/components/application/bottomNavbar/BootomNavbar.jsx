// import React from 'react'
import '../mainapp/MainApp.scss';

const BootomNavbar = () => {
    return (
        <div className="bottom-main mt-2" style={{height:'fit-content'}}>
            <div className="bt-navbar" style={{height:'fit-content'}}>
                <div className="bt-inner" style={{height:'fit-content'}}>
                    <div className="bt-1 bt-navlink">
                        <a href="">
                            <p><i className="fa-solid fa-house"></i></p>
                            <p className="bt-txt mb-0">Home</p>
                        </a>
                    </div>

                    <div className="bt-2 bt-navlink">
                        <a href="">
                            <p><i className="fa-solid fa-comment"></i></p>
                            <p className="bt-txt mb-0">Dms</p>
                        </a>
                    </div>

                    <div className="bt-3 bt-navlink">
                        <a href="">
                            <p><i className="fa-solid fa-bell"></i></p>
                            <p className="bt-txt mb-0">Activity</p>
                        </a>
                    </div>

                    <div className="bt-4 bt-navlink">
                        <a href="">
                            <p><i className="fa-solid fa-user"></i></p>
                            <p className="bt-txt mb-0">Account</p>
                        </a>
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
