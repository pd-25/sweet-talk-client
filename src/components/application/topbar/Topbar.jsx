import React from 'react';
import { Link } from 'react-router-dom';
import '../mainapp/MainApp.scss';

const Topbar = () => {
    const goBack = () => {
        window.history.back();
    };

    const goForward = () => {
        window.history.forward();
    };

    return (
        <div className="top-bar-container py-2 d-flex justify-content-center">
            <div className="container-top-bar d-flex justify-content-center gap-2">
                <div className="arrows clock d-flex gap-2">
                    <span onClick={goBack} style={{cursor:'pointer'}}><i className="fa-solid fa-arrow-left"></i></span>
                    <span onClick={goForward} style={{cursor:'pointer'}}><i className="fa-solid fa-arrow-right"></i></span>
                    <span style={{cursor:'pointer'}}><i className="fa-regular fa-clock"></i></span>
                </div>
                <div className="input-field d-flex justify-content-center text-white" style={{ height: 'fit-content' }}>
                    <input className="px-2" type="search" name="" id="" placeholder="Search . . ."
                        style={{ backgroundColor: 'transparent' }} />
                    <span className="px-2"><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
            <div className="help text-white px-3" style={{cursor:'pointer'}}>
                <Link to='/help' ><i className="fa-solid fa-question"></i></Link>
            </div>
        </div>
    );
};

export default Topbar;
