import React from 'react'
import '../mainapp/MainApp.scss'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'
import LeftSection from '../leftsection/LeftSection'
import DMRightSectionFriend from '../direct_chat_rightsection_friend/DMRightSectionFriend'
import BootomNavbar from '../bottomnavbar/BottomNavbar'

const DirectChatFriend = () => {
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
                <DMRightSectionFriend />
                {/* right section end */}
            </div>



            {/* bootom navbar start */}
            <BootomNavbar />
            {/* bootom navbar end */}

        </div>
  )
}

export default DirectChatFriend;
