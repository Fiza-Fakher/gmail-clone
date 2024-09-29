import React, { useState } from 'react';
import { LuPencil } from 'react-icons/lu';
import { MdInbox, MdSend, MdMinimize, MdOpenInFull, MdOutlineTextFormat, MdOutlineEmojiEmotions } from 'react-icons/md';
import { FaRegStar, FaAngleDown, FaPlus } from 'react-icons/fa';
import { IoMdTime, IoMdDocument, IoMdClose, IoMdLink } from 'react-icons/io';
import emailjs from 'emailjs-com';
import './Sidebar.css';

function Sidebar() {
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleComposeClick = () => setIsComposeOpen(true);
  const handleCloseClick = () => setIsComposeOpen(false);

  const handleSendClick = () => {
    const templateParams = {
      from_name: 'from_name', // Replace with sender's name
      to_name: to,
      subject: subject,
      message: message
    };

    emailjs.send('service_zgp9ua5', 'template_ggc9ya9', templateParams, 'dnp3xfEgTuGqY0X5C')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setTo('');
        setSubject('');
        setMessage('');
        setIsComposeOpen(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <>
      <button id='btn' onClick={handleComposeClick} className='compose'>
        <LuPencil className='pen' /> Compose
      </button>
      <div id="options">
        <div className="opt-1">
          <a className='compose-1' href="/"> 
            <MdInbox /> <strong>Inbox</strong>
          </a>
        </div>
        <div className="opt-2">
          <a href="/" className='compose-2'> 
            <FaRegStar /> <strong className='id-1'>Starred</strong> 
          </a>
        </div>
        <div className="opt-3">
          <a href="/" className='compose-2'>
            <IoMdTime /><strong className='id-1'> Snoozed </strong> 
          </a>
        </div>
        <div className="opt-4">
          <a href="/" className='compose-2'>
            <MdSend /> <strong className='id-1'> Sent</strong> 
          </a>
        </div>
        <div className="opt-5">
          <a href="/" className='compose-2'> 
            <IoMdDocument /> <strong className='id-1'>Drafts</strong> 
          </a>
        </div>
        <div className="opt-6">
          <a href="/" className='compose-2'> 
            <FaAngleDown /> <strong className='id-1'>More</strong> 
          </a>
        </div>
      </div>
      <div className='label'>
        <p><strong id='l-1'>Label <FaPlus id='icon'/></strong></p>
      </div>

      {isComposeOpen && (
        <div className="compose-window">
          <div className="compose-header">
            <span>New Message</span>
            <div className="compose-icons">
              <MdMinimize /> <MdOpenInFull /> <IoMdClose onClick={handleCloseClick} />
            </div>
          </div>
          <div className="compose-body">
            <input 
              type="text" 
              placeholder="To" 
              className="compose-input" 
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <hr />
            <input 
              type="text" 
              placeholder="Subject" 
              className="compose-input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <hr />
            <textarea 
              placeholder="Message" 
              className="compose-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="compose-footer">
            <button id='send-button' onClick={handleSendClick}>Send</button>
            <MdOutlineTextFormat /> <IoMdLink /> <MdOutlineEmojiEmotions />
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
