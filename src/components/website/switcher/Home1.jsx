// import React from 'react'
import {  Link } from 'react-router-dom'
import banner1 from '../../../assets/banner-1.png'
import cd1 from '../../../assets/cd11.svg'
import cd2 from '../../../assets/cd22.svg'
import cd3 from '../../../assets/cd33.svg'
import './Home1.scss';

const Home1 = () => {
  return (
    <div className='container-1'>
              <div className="body-container pt-5">
            <div className="body-sub1">
                <h1>Made For people.</h1>
                <h1 className="built">&nbsp;Built For productivity.</h1>
            </div>

            <div className="section1-main-container">
                <div className="login-btns">

                    <div className="btn but-2">
                        <Link to="/signin" className="btn text-white gr">
                            <span>
                                <i className="fa-brands fa-google text-white"></i>
                            </span> &nbsp;
                            SIGN UP WITH GOOGLE</Link>
                    </div>

                    <div className="btn but-2">
                        <Link to="/signin" className="btn text-white gr">
                            SIGN UP WITH EMAIL ADDRESS
                        </Link>
                    </div>

                </div>

                <div className="slogaan">
                    <p><b>Experience XYZ is Free</b> Trial htmlFor as Long as You Need</p>
                </div>
            </div>

        </div>

        <div className="banner-main-1">
            <div className="banner-back">
                <div className="image-container">
                    <img src={banner1} alt="#"/>
                </div>
            </div>
        </div>


        <div className="description-section">
            <div className="des-sub-sec left-description gr">
                <h3 className="text-white">Move faster with your tools in one place</h3>
                <div className="lr-sub-desc">
                    <p>Automate away routine tasks with the power of generative AI and simplify your workflow with all
                        your favourite apps ready to go in XYZ.</p>
                    <br/>
                    <p><a href="#" className="btn sol-bg"
                            style={{boxShadow: "-3px 4px 10px black"}}>Learn more about
                            the XYZ platform</a></p>
                </div>
            </div>

            <div className="des-sub-sec right-description gr">
                <h3 className="text-white">Choose how you want to work</h3>
                <div className="lr-sub-desc">
                    <p>In XYZ, you’ve got all the flexibility to work when, where and how it’s best htmlFor you. You can
                        easily chat, send audio and video clips, or join a huddle to talk things through live.</p>
                    <br/>
                    <a href="#" className="btn sol-bg"
                        style={{boxShadow: "-3px 4px 10px black"}}>Learn more about
                        flexible communication</a>
                </div>
            </div>
        </div>


        <div className="section2 section2-main" style={{paddingBottom:'270px', paddingTop:'45px'}}>
            <div className="sec2-sub1 d-flex gap-3">
                <h2>How it works?</h2>
                <h3>Easy as ABC!</h3>
            </div>
            <div className="sec2-sub2 d-flex gap-3">
                <p className="sol" style={{color:'#e2062e'}}>Not seeing your workspace?</p>
                <Link to='/signin'><p className="diff-email" style={{color:'#e2062e'}}>Try using a different email address <i className="fa-solid fa-arrow-right"></i></p></Link>
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

export default Home1
