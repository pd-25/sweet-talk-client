import React, { useRef, useState } from 'react';
import profile from '../../../assets/bl-profile.webp';
import '../../application/mainapp/MainApp.scss';
// import './Test.scss';

const RightSection = () => {

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
                            <div className="profile-direct-chat d-flex align-items-center mt-3 gap-3">
                                <div className="img-prof">
                                    <img className="rounded" src={profile} alt="" width="120px" height="120px" />
                                </div>
                                <div className="direct-chat-name">
                                    <h2>Animallo</h2>
                                </div>
                            </div>

                            <div className="direct-chat-prof-desc mt-2">
                                <p style={{ opacity: '0.8', fontSize:'0.9rem' }}><span style={{ opacity: '0.8' }} className="msg-desc-bottom-inner">@animallo</span> hasn’t signed in yet, but they will receive messages via email until they do.</p>
                            </div>


                            <div className="profile-view-button-main">
                            <button type="button" className="btn" data-bs-toggle="modal"
                                data-bs-target="#profile-view-btn">
                                View Profile
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="profile-view-btn" tabIndex="-1"
                                aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            ....
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

                    {/* <!-- actual msg section start --> */}

                    <div className="actual-conversation d-block">
                        <hr />
                        <div className="msg-section px-2 py-2">
                            <div className="msg-inner-section d-flex gap-2">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50"
                                    className="rounded" />
                                <div className="msg-desc">
                                    <div className="msg-desc-top d-flex gap-2">
                                        <p>pradiptabhuin</p>
                                        <span>9:29 PM , 10.03.24</span>
                                    </div>
                                    <p className="msg-desc-bottom">
                                        <span className="msg-desc-bottom-outer">
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@Saklin Wind</a>
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
                                                <a href="#">@pradiptabhuin</a>
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
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
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
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
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
                                            <span className="msg-desc-bottom-inner">
                                                <a href="#">@pradiptabhuin</a>
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
                                            Let's do it.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* <!-- actual msg section end --> */}
                </div>
                {/* <!-- msg show-section end --> */}




                {/* <!-- to type any msg / reply section start --> */}
                <div className="reply-section-main bg-dark">
                    <div className="reply-section-inner">

                        {!isMenuHidden && (
                            <div className="menu-operations d-flex align-items-center">
                                <button className="btn" style={{ backgroundColor: activeButtons.bold ? 'rgba(193, 186, 186, 0.735)' : '' }} onClick={() => handleButtonClick('bold')}><i className="fa-solid fa-solid fa-b"></i></button>
                                <button className="btn" style={{ backgroundColor: activeButtons.italic ? 'rgba(193, 186, 186, 0.735)' : '' }} onClick={() => handleButtonClick('italic')}><i className="fa-solid fa-italic"></i></button>
                                <button className="btn" style={{ backgroundColor: activeButtons.strikeThrough ? 'rgba(193, 186, 186, 0.735)' : '' }} onClick={() => handleButtonClick('strikeThrough')}><i className="fa-solid fa-strikethrough"></i></button>


                                {/* link button start */}
                                <div className="link-button-main">
                                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#link-btn">
                                        <i className="fa-solid fa-link"></i>
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="link-btn" tabIndex="-1" aria-labelledby="link-btn-label" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <div className="link-heading">
                                                        <h3>Add <span className="sol" style={{ fontWeight: '800' }}>Link Shortcut</span></h3>
                                                    </div>

                                                    <div className="input-fields-link">
                                                        <div className="textinp-field p-2 d-grid gap-2">
                                                            <label htmlFor="textinp" style={{ fontWeight: '700' }}>Text</label>
                                                            <input type="text" name="textinp" id="textinp" placeholder='eg- goggle' />
                                                        </div>

                                                        <div className="linkinp-field mt-4 p-2 d-grid gap-2">
                                                            <label htmlFor="linkinp" style={{ fontWeight: '700' }}>Link</label>
                                                            <input className='linkinpp' type="text" name="linkinp" id="linkinp" placeholder='eg- https://www.google.com/' />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="modal-footer">
                                                    <button className="btn cancel">Cancel</button>
                                                    <button className="btn save">Save</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* link button end */}




                                <button className="btn" style={{ backgroundColor: activeButtons.insertUnorderedList ? 'rgba(193, 186, 186, 0.735)' : '' }} onClick={() => handleButtonClick('insertUnorderedList')}><i className="fa-solid fa-list-ul"></i></button>
                                <button className="btn" style={{ backgroundColor: activeButtons.insertOrderedList ? 'rgba(193, 186, 186, 0.735)' : '' }} onClick={() => handleButtonClick('insertOrderedList')}><i className="fa-solid fa-list-ol"></i></button>
                                <button className='btn' onClick={handleCode}><i className="fa-solid fa-code"></i></button>
                                {/* <button className="btn" ><i className="fa-regular fa-file-code"></i></button> */}


                            </div>
                        )}


                        <div className="reply-box">
                            <div
                                className="ql-editor text-white"
                                ref={inputRef}
                                contentEditable="true"
                                dir="auto"
                                role="textbox"
                                tabIndex="0"
                                aria-label="Message to general2"
                                aria-multiline="true"
                                spellCheck="true"
                                onKeyDown={handleKeyDown}
                                placeholder="Type something..."
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: '3px',
                                    height: '35px',
                                    overflowY: 'auto',
                                    paddingLeft: '3px'
                                }}
                            >{content || 'Message #general'}</div>
                        </div>

                        <div className="reply-section-bottom-operations d-flex justify-content-between">
                            <div className="bottom-operations-inner d-flex justify-content-center align-items-center">

                                <label htmlFor="attachments"><span><i className="fa-solid fa-plus"></i></span></label>
                                <input type="file" name="attachments" id="attachments" style={{ display: 'none' }} />



                                <button className='btn p-0 menuoperationsHider' onClick={toggleMenu}><i className="fa-solid fa-arrow-up-a-z"></i></button>
                                <button className='btn smily p-0'><i className="fa-regular fa-face-smile"></i></button>




                                {/* mention button start */}
                                <div className="mention-button-modal-main">
                                    <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target="#mention-btn">
                                        <span><i className="fa-solid fa-at"></i></span>
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="mention-btn" tabIndex="-1" aria-labelledby="mention-btn-label" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                            <div className="modal-content">
                                                <div className="modal-header1">
                                                    <h2 className=''>Mention <span className="sol" style={{ fontWeight: '700' }}>Your colleagues</span></h2>
                                                </div>
                                                <div className="modal-body">

                                                    <div className="mn-user-main">
                                                        <div className="mn-img">
                                                            <img src="https://github.com/mdo.png" alt="hugenerd" width="35" height="35"
                                                                className="rounded" />
                                                        </div>
                                                        <div className="mn-users m-0">
                                                            <div className="mn-name m-0">
                                                                <p className='m-0'>animallo</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mn-user-main">
                                                        <div className="mn-img">
                                                            <img src="https://github.com/mdo.png" alt="hugenerd" width="35" height="35"
                                                                className="rounded" />
                                                        </div>
                                                        <div className="mn-users m-0">
                                                            <div className="mn-name m-0">
                                                                <p className='m-0'>rowknee</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mn-user-main1">
                                                        <span className='notify-span'><i className="fa-solid fa-bullhorn notify-span" style={{ fontSize: '1.1rem' }}></i>&nbsp;</span>
                                                        <span className='p-1 rounded notify-span' style={{ background: '#6f5205' }}> @channel</span>
                                                        <span className='notify-span'>&nbsp;Notify everyone in this channel.</span>
                                                    </div>

                                                    <div className="mn-user-main1">
                                                        <span className='notify-span'><i className="fa-solid fa-bullhorn notify-span" style={{ fontSize: '1.1rem' }}></i>&nbsp;</span>
                                                        <span className='p-1 rounded notify-span' style={{ background: '#6f5205' }}> @here</span>
                                                        <span className='notify-span'>&nbsp;Notify every online member in this channel.</span>
                                                    </div>

                                                    <div className="mn-user-main">
                                                        <div className="mn-img">
                                                            <img src="https://github.com/mdo.png" alt="hugenerd" width="35" height="35"
                                                                className="rounded" />
                                                        </div>
                                                        <div className="mn-users m-0">
                                                            <div className="mn-name m-0">
                                                                <p className='m-0'>alphagamer</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mn-user-main">
                                                        <div className="mn-img">
                                                            <img src="https://github.com/mdo.png" alt="hugenerd" width="35" height="35"
                                                                className="rounded" />
                                                        </div>
                                                        <div className="mn-users m-0">
                                                            <div className="mn-name m-0">
                                                                <p className='m-0'>saklinwind533 (you)</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mn-user-main1">
                                                        <span className='notify-span'><i className="fa-solid fa-bullhorn notify-span" style={{ fontSize: '1.1rem' }}></i>&nbsp;</span>
                                                        <span className='p-1 rounded notify-span' style={{ background: '#6f5205' }}> @here</span>
                                                        <span className='notify-span'>&nbsp;Notify every online member in this channel.</span>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* mention button end */}



                                {/* video button start */}
                                <div className="video-button-modal-main">
                                    <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target="#videoBtn">
                                        <span><i className="fa-solid fa-video"></i></span>
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="videoBtn" tabIndex="-1" aria-labelledby="videobtnlabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <div className="vd-heading">
                                                        <h2>Record <span className="sol" style={{ fontWeight: '700' }}>Video Clip</span></h2>
                                                    </div>

                                                    <div className="vd-imgback">
                                                        <div className="vd-imgback-inner">
                                                            <img src={profile} alt="" />
                                                        </div>

                                                        <div className="vd-sub-btns">
                                                            <button className="btn">
                                                                <i className="fa-solid fa-video-slash"></i>
                                                            </button>
                                                            <button className="btn">
                                                                <i className="fa-solid fa-microphone-slash"></i>
                                                            </button>
                                                            <button className="btn">
                                                                <i className="fa-solid fa-gear"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="modal-footer">
                                                    <div className="mod-foot-upload-btn">
                                                        <label htmlFor="vd-upload"><i className="fa-solid fa-cloud-arrow-up"></i>&nbsp;Upload Video</label>
                                                        <input type="file" name="vd-upload" id="vd-upload" style={{ display: 'none' }} />
                                                    </div>

                                                    <div className="vd-btns2-footer">
                                                        <button className="btn share-screen"><i className="fa-solid fa-desktop"></i>&nbsp;Share Screen</button>
                                                        <button className="btn record">Record</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* video button end */}













                                <span><i className="fa-solid fa-microphone"></i></span>
                                {/* <!-- <span className="line">|</span> --> */}
                                <span><i className="fa-regular fa-keyboard"></i></span>
                            </div>

                            <div
                                className="bootom-reply-section-right d-flex justify-content-center align-items-center">
                                <p className="send-btn d-flex gap-2 justify-content-center align-items-center"
                                    style={{ marginbottom: '0' }}>
                                    <span className="btn"><i className="fa-regular fa-paper-plane"></i></span>
                                    <span className="btn"><i className="fa-solid fa-caret-down"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- to type any msg / reply section end --> */}



            </div>
        </div>
    )
}

export default RightSection
