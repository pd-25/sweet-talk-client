import React, { useRef, useState} from 'react';
import profile from '../../../assets/bl-profile.webp';
import '../mainapp/MainApp.scss';

const ReplyBox = () => {

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




  //text-formatter hide & show
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const toggleMenu = () => {
    event.preventDefault();
    setIsMenuHidden(!isMenuHidden);
  };



  //size increase & decrease code of text field
  const increaseEditorHeight = () => {
    event.preventDefault();
    const eqEditor = inputRef.current;
    if (eqEditor) {
      eqEditor.style.height = `${eqEditor.offsetHeight + 10}px`;
    }
  };
  const decreaseEditorHeight = () => {
    event.preventDefault();
    const eqEditor = inputRef.current;
    if (eqEditor && eqEditor.offsetHeight > 35) {
      eqEditor.style.height = `${eqEditor.offsetHeight - 10}px`;
    }
  };




  //highlight code
  const toggleStyle = (style) => {
    event.preventDefault();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    if (style === 'highlight' && !activeButtons.highlight) {
      event.preventDefault();
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
      event.preventDefault();
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




  //handle button click
  const handleButtonClick = (style) => {
    event.preventDefault();
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




  //handle code
  const handleCode = () => {
    event.preventDefault();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.textContent = range.toString();
    span.style.backgroundColor = '#dea503';
    range.deleteContents();
    range.insertNode(span);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    span.current.focus();
  };




  //handle key down
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
    <div className="reply-section-main bg-dark">
      <form action='' method='' className="reply-section-inner p-1">

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
                    <from action='#' method='' className="modal-body">
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

                    </from>

                    <div className="modal-footer">
                      <button type="button" className="btn cancel" data-bs-dismiss="modal">Cancel</button>
                      <button type="button" className="btn save">Save</button>

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
                    <form action='#' method='' className="modal-body">
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
                    </form>

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
      </form>
    </div>
  )
}

export default ReplyBox
