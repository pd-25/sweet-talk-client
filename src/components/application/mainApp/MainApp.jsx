// import React from 'react'
import './MainApp.scss';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import LeftSection from '../leftsection/LeftSection';
import RightSection from '../rightsection/RightSection';
import BootomNavbar from '../bottomnavbar/BottomNavbar';

const MainApp = () => {
    return (
        <div className='Main'>
            <Topbar />



            <div className="mid-section-5">

                {/* sidebar start */}
                <Sidebar />
                {/* sidebar end */}

                {/* left section start */}
                <LeftSection />
                {/* left section end */}


                {/* right section start */}
                <RightSection />
                {/* right section end */}
            </div>



            {/* bootom navbar start */}
            <BootomNavbar />
            {/* bootom navbar end */}

        </div>
    )
}

export default MainApp
