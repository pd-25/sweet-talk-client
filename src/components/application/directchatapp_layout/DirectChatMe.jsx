// import React from 'react'
import '../mainapp/MainApp.scss';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import LeftSection from '../leftsection/LeftSection';
import DMRightSectionMe from '../direct_chat_rightsection_me/DMRightSectionMe';
import BootomNavbar from '../bottomnavbar/BootomNavbar';

const DirectChatMe = () => {
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
                <DMRightSectionMe />
                {/* right section end */}
            </div>



            {/* bootom navbar start */}
            <BootomNavbar />
            {/* bootom navbar end */}

        </div>
    )
}

export default DirectChatMe
