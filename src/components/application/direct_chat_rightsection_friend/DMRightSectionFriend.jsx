import React, { useRef, useState } from 'react';
import profile from '../../../assets/bl-profile.webp';
import { Link } from 'react-router-dom';
import '../mainapp/MainApp.scss';
import './DMRightSectionFriend.scss';
import ReplyBox from '../replybox/ReplyBox';

const DMRightSectionFriend = () => {

    const inputRef = useRef(null);
    const [content, setContent] = useState('');
    const [activeButtons, setActiveButtons] = useState({
        bold: false,
        italic: false,
        strikeThrough: false,
        insertUnorderedList: false,
        insertOrderedList: false,
        highlight: false,
        multiLineHighlight: false,
    });


    const [isMenuHidden, setIsMenuHidden] = useState(false);

    const toggleMenu = () => {
        setIsMenuHidden(!isMenuHidden);
    };




    const increaseEditorHeight = () => {
        const eqEditor = inputRef.current;
        if (eqEditor) {
            eqEditor.style.height = `${eqEditor.offsetHeight + 10}px`;
        }
    };
    const decreaseEditorHeight = () => {
        const eqEditor = inputRef.current;
        if (eqEditor && eqEditor.offsetHeight > 35) {
            eqEditor.style.height = `${eqEditor.offsetHeight - 10}px`;
        }
    };





    const toggleStyle = (style) => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);

        if (style === 'highlight' && !activeButtons.highlight) {
            // Remove any existing highlights
            const highlightedSpans = inputRef.current.querySelectorAll('span.highlight');
            highlightedSpans.forEach((span) => {
                const textNode = document.createTextNode(span.textContent);
                span.parentNode.replaceChild(textNode, span);
            });
            // Move cursor out of the current span
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
            return;
        }

        if (style === 'highlight') {
            const startNode = range.startContainer;
            const endNode = range.endContainer;

            if (startNode !== endNode || startNode.nodeName === 'BODY') {
                return; // Do nothing if the selection spans multiple nodes or lines
            }

            const span = document.createElement('span');
            span.classList.add('highlight');
            span.style.backgroundColor = '#dea503';
            span.style.color = 'white';
            span.textContent = range.toString(); // Highlight selected text
            range.deleteContents(); // Delete the selected text
            range.insertNode(span); // Insert the highlighted span
            // Move cursor out of the current span
            range.setStartAfter(span);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            document.execCommand(style);
            if (style !== 'foreColor') {
                document.execCommand('foreColor', false, 'white');
            }
            if (style === 'italic') {
                document.execCommand('foreColor', false, 'white');
            }
            inputRef.current.focus();
        }
    };




    const handleButtonClick = (style) => {
        if (style === 'insertUnorderedList' && activeButtons.insertOrderedList) {
            setActiveButtons((prevState) => ({
                ...prevState,
                insertUnorderedList: true,
                insertOrderedList: false,
            }));
        } else if (style === 'insertOrderedList' && activeButtons.insertUnorderedList) {
            setActiveButtons((prevState) => ({
                ...prevState,
                insertUnorderedList: false,
                insertOrderedList: true,
            }));
        } else {
            setActiveButtons((prevState) => ({
                ...prevState,
                [style]: !prevState[style],
            }));
        }
        toggleStyle(style);
    };




    const handleCode = () => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const span = document.createElement('span');
        span.textContent = range.toString();
        span.style.backgroundColor = '#dea503'; // Change background color or any other styles as needed
        range.deleteContents();
        range.insertNode(span);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
        span.current.focus();
    };





    const handleKeyDown = (e) => {
        if (e.shiftKey && e.key === 'Enter') {
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);
            const br = document.createElement('div');
            br.innerHTML = '<br>';
            range.deleteContents();
            range.insertNode(br);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
            e.preventDefault();

        }
        else if (e.ctrlKey && e.key === 'Enter') {
            increaseEditorHeight();
        }
        else if (e.ctrlKey && e.key === 'Backspace') {
            decreaseEditorHeight();
        }
    };

    //for-message-btn-focus ----------->
    const focusInputRef = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };



    return (
        <div className="mid-right-section-3" style={{ overflowY: 'hidden' }}>
            <div className="right-side-1" style={{ overflowY: 'hidden' }}>


                {/* <!-- r-top start --> */}
                <div className="right-top p-2 d-flex justify-content-between align-items-center">

                    {/* <!-- Button trigger modal --> */}
                    <a type="button" className="btn modal-btn-general text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                        <img src={profile} alt="" width={32} className='rounded' />&nbsp;Animallo <i className="fa-solid fa-caret-down text-white"></i>
                    </a>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">General</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    xyz
                                </div>
                                <div className="modal-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Modal --> */}

                    <div className="top-left-general d-flex gap-2">

                        <div className="searchbar-hide-show d-flex">
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#search-bar">
                                <span><i className="fa-solid fa-magnifying-glass"></i></span>
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="search-bar" tabIndex="-1" aria-labelledby="search-bar-show" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <input className='modal-body-input' type="search" name="" id="" placeholder='Search Here' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="huddle-top">
                            <div className="btn btn-canvas">
                                <button className="btn text-white btn-sm" type="button">
                                    <i className="fa-solid fa-file-circle-plus" style={{ fontSize: '1rem' }}></i><span style={{ fontSize: '1rem', padding: '5px' }}>Canvas</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- r-top end --> */}


                {/* <!-- bookmarks add start--> */}
                <div className="bookmark-main stick-top">
                    <div className="bookmark-inner">
                        <span style={{ opacity: '0.8' }}><i className="fa-solid fa-plus"></i>&nbsp;Add a bookmark</span>
                    </div>
                    <hr />
                </div>
                {/* <!-- bookmarks add end--> */}





                {/* <!-- msg show-section start --> */}
                <div className="scrollable-content">
                    {/* <!-- channel-something-section start --> */}
                    <div className="channel-inner-section px-2">
                        <div className="profile-view-directchat-inner p-5 pb-0 pt-3">
                            <div className="profile-direct-chat d-flex align-items-center mt-3 gap-3 flex-column" style={{width:'fit-content'}}>
                                <div className="img-prof">
                                    <img className="rounded" src={profile} alt="" width="120px" height="120px" />
                                </div>
                                <div className="direct-chat-name">
                                    <h2>Animallo</h2>
                                </div>
                            </div>

                            <div className="direct-chat-prof-desc mt-2">
                                <p style={{ opacity: '0.8', fontSize: '0.9rem' }}><span style={{ opacity: '0.8' }} className="msg-desc-bottom-inner">@animallo</span> hasn’t signed in yet, but they will receive messages via email until they do.</p>
                            </div>


                            <div className="profile-view-button-main">
                                <button type="button" className="btn" data-bs-toggle="modal"
                                    data-bs-target="#profile-view-btn-fr">
                                    View Profile
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="profile-view-btn-fr" tabIndex="-1"
                                    aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <div className="profile-view-main-1">

                                                    <div className="btn-bar">
                                                        <button type="button" className="btn btn-m btn-secondary" data-bs-dismiss="modal"><i className="fa-solid fa-angle-left"></i>&nbsp; Profile</button>
                                                    </div>

                                                    <div className="profile-img-fr">
                                                        <div className="profile-img-fr-inner">
                                                            <img className='rounded fr-img mt-4' src={profile} alt="" />

                                                            <div className="img-fr-desc mt-3">
                                                                <h4 className='img-fr-desc-1 btn'><i className="fa-regular fa-envelope"></i> Invited Memeber</h4>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    <div className="profile-name-fr">
                                                        <h2 className='friend-name'>Animallo</h2>
                                                        <div className="fr-status">
                                                            <span><i className="fa-solid fa-circle"></i></span>
                                                            <span>&nbsp; Active</span>
                                                        </div>

                                                        <div className="fr-clockrealtime mt-1">
                                                            <span><i className="fa-regular fa-clock"></i></span>
                                                            <span>&nbsp; 10:26 AM Local Time</span>
                                                        </div>
                                                    </div>

                                                    <div className="fr-profile-btns">
                                                        <butoon className='btn gr message-fr' onClick={focusInputRef}><i className="fa-regular fa-comments"></i>&nbsp; Message</butoon>
                                                        <button className="btn gr"><i className="fa-solid fa-user-tag"></i>&nbsp; Copy Memeber ID</button>
                                                    </div>

                                                    {/* contact-info section start */}
                                                    <div className="contact-info-main pb-4">
                                                        <div className="contact-info-inner">
                                                            <div className="contact-name">
                                                                <h5>Contact Information</h5>
                                                            </div>

                                                            <div className="contact-email-view mt-4">
                                                                <div className="contact-email-details">
                                                                    <div className="contact-email-img">
                                                                        <img className='rounded' src={profile} alt="" />
                                                                    </div>
                                                                    <div className="email-desc px-2">
                                                                        <span className='ed-span' style={{ fontWeight: '600' }}>Email Address</span>
                                                                        <span className='ed-span' style={{ color: '#1d8cbc' }}>animallo@gmail.com</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    {/* contact-info section end */}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    {/* <!-- channel-something-section end --> */}

                    {/* <hr /> */}
                    {/* <!-- add/join msg-section-start --> */}
                    {/* <div className="msg-section px-2">
                        <div className="msg-inner-section d-flex gap-2">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                className="rounded" />
                            <div className="msg-desc">
                                <div className="msg-desc-top d-flex gap-2">
                                    <p>saklinmustak</p>
                                    <span>5:21 PM , 10.03.24</span>
                                </div>
                                <p className="msg-desc-bottom">joined #general. supriyo and Saklin also joined.
                                </p>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- add/join msg-section-end --> */}

                    {/* <!-- actual msg/conversations section start --> */}

                    <div className="actual-conversation d-block">
                        <hr />


                        <div className="msg-section px-2 py-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Animallo</p>
                                        <span>9:29 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@Saklin</a>
                                            </span>
                                            &nbsp;ei same ui ta banate hbe.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@animallo</a>
                                            </span>
                                            &nbsp;Ok.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            {/* <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span> */}
                                            &nbsp; I'll be there at 8 pm!
                                        </span>

                                        <br /> <br />

                                        <span className="msg-desc-bottom-outer">
                                            {/* <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span> */}
                                            &nbsp; And work on it.
                                        </span>

                                        <br /> <br />

                                        <span className="msg-desc-bottom-outer">
                                            {/* <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span> */}
                                            &nbsp; Where is Rohit.
                                        </span>
                                        <br /> <br />
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Animallo</p>
                                        <span>9:30 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@Saklin</a>
                                            </span>
                                            &nbsp;Ok.
                                        </span>
                                        <br /><br />
                                        <span className="msg-desc-bottom-outer">
                                            {/* <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
                                            </span> */}
                                            &nbsp;But i do not know.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="msg-section px-2 pt-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>Saklin Wind</p>
                                        <span>9:30 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            Let's do it.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* <!-- actual msg/conversations section end --> */}
                </div>
                {/* <!-- msg show-section end --> */}




                {/* <!-- to type any msg / reply section start --> */}
                <ReplyBox/>
                {/* <!-- to type any msg / reply section end --> */}



            </div>
        </div>
    )
}

export default DMRightSectionFriend
