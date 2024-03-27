// import React from 'react'
import {  Link } from 'react-router-dom'
import './WithLoginHome.scss';
import h2 from '../../../assets/h2.svg'
import cd1 from '../../../assets/cd11.svg'
import cd2 from '../../../assets/cd22.svg'
import cd3 from '../../../assets/cd33.svg'

const WithLoginHome = () => {
    return (
        <div className="containet">

            <div className="body-container-100 pt-5">
                <h1>Welcome back</h1>

                <div className="section1-main-container">
                    <div className="section1">
                        <div className="head-section1">
                            <p>Workspaces For animallo5333@gmail.com</p>
                        </div>

                        <div className="doen-section1">
                            <div className="mid-section1 d-flex gap-4">
                                <div className="user d-flex">

                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="60" height="60"
                                        className="rounded" />

                                    <div className="inner-user">
                                        <p className="user-sub-name pb-3">Let-out</p>
                                        <p><i className="fa-solid fa-user sol"></i> &nbsp; 0 members</p>
                                    </div>

                                </div>
                                <div className="user d-flex">

                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="60" height="60"
                                        className="rounded" />

                                    <div className="inner-user">
                                        <p className="user-sub-name pb-3">Sup-bas</p>
                                        <p><i className="fa-solid fa-user sol"></i> &nbsp; 3 members</p>
                                    </div>

                                </div>
                                <div className="user d-flex">

                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="60" height="60"
                                        className="rounded" />

                                    <div className="inner-user">
                                        <p className="user-sub-name pb-3">Saklin-soft</p>
                                        <p><i className="fa-solid fa-user sol"></i> &nbsp; 5 members</p>
                                    </div>

                                </div>
                            </div>
                            <div className="bottom-section1">
                                <Link to='/app' className="btn gr cw" style={{ width: "100%" }}>Launch Workspace</Link>
                            </div>
                        </div>

                    </div>


                    <div className="section1 mt-5">
                        <div className="head-section1">
                            <p>Want to use XYZ with a different Colleague?</p>
                        </div>

                        <div className="doen-section1">
                            <div className="mid-section1">
                                <div className="user1">

                                    <div className="left-mid-subsec">
                                        <img src={h2} alt="#" />
                                    </div>
                                    <div className="right-mid-subsec">
                                        <p>Lorem ips Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
                                            est
                                            quaerat rerum nemo itaque odio mollitia minima ut voluptas minus. um dolor sit
                                            amet,
                                            consectetur adipisicing elit. A in harum asperiores nemo magni illo cupiditate
                                            reprehenderit, voluptas accusamus. Quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta error, maiores praesentium voluptatem minima ullam, illo, fugit ea repellat rem non! Nam voluptatum quo at quisquam harum vel explicabo ratione error est dicta consectetur quibusdam similique numquam, excepturi impedit sint placeat facere. Nulla consequatur consectetur a. Accusamus mollitia iusto modi, perspiciatis esse ducimus voluptatem commodi aspernatur ullam libero ea nostrum enim inventore sequi quae rerum quia optio error dignissimos! Odio dolore omnis repudiandae harum porro veritatis, ab debitis nobis soluta atque laboriosam similique iste mollitia veniam ut. Facere natus a hic est excepturi totam aspernatur nulla molestiae, quisquam voluptate? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste magnam nemo laudantium ad, odio fuga quasi voluptatibus expedita beatae? Ducimus.</p>
                                        <br />
                                        <div className="bottom-section2">
                                            <Link to="/step1" className="btn gr cw" style={{ width: "100%" }}>Create
                                                New Workspace</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                <div className="section2 mt-5">
                    <div className="sec2-sub1 d-flex gap-3">
                        <h2>How it works?</h2>
                        <h3>Easy as ABC!</h3>
                    </div>
                    <div className="sec2-sub2 d-flex gap-3">
                        <p className="sol text-danger">Not seeing your workspace?</p>
                        <p className="sol text-danger">Try using a different email address <i
                            className="fa-solid fa-arrow-right sol"></i></p>
                    </div>
                </div>


                
            </div>
            <div className="section3 mt-2">
            <div className="sec-3-sub1">
                <div className="card">
                    <div className="img">
                        <img src={cd1} alt="dsd" width="100%"/>
                    </div>
                    <div className="decs-con">
                        <p className="small">Training</p>
                        <h3 className="sec3-desc">Start Your Journey Today</h3>
                        <p className="sub-small">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure deleniti
                            natus consequuntur voluptatibus, beatae sequi praesentium at incidunt? Aliquam, sunt.</p>
                    </div>
                    <div className="btn but-1 gr">
                        <button className="btn">Get Started</button>
                    </div>
                </div>

                <div className="card">
                    <div className="img">
                        <img src={cd2} alt="dsd" width="100%"/>
                    </div>
                    <div className="decs-con">
                        <p className="small">Training</p>
                        <h3 className="sec3-desc">Start Your Journey Today</h3>
                        <p className="sub-small">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure deleniti
                            natus consequuntur voluptatibus, beatae sequi praesentium at incidunt? Aliquam, sunt.</p>
                    </div>
                    <div className="btn but-1 gr">
                        <button className="btn">Get Started</button>
                    </div>
                </div>

                <div className="card">
                    <div className="img">
                        <img src={cd3} alt="dsd" width="100%"/>
                    </div>
                    <div className="decs-con">
                        <p className="small">Training</p>
                        <h3 className="sec3-desc">Start Your Journey Today</h3>
                        <p className="sub-small">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure deleniti
                            natus consequuntur voluptatibus, beatae sequi praesentium at incidunt? Aliquam, sunt.</p>
                    </div>
                    <div className="btn but-1 gr">
                        <button className="btn">Get Started</button>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default WithLoginHome
