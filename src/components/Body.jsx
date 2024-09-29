import React from 'react';
import Sidebar from './Sidebar';
import Inbox from '../components/Inbox';
import '../components/Body.css';
import Message from './Message';

function Body() {
  return (
    <>
      <div id="body">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <div className="inbox">
            <Inbox />
          </div>
          <div className="message">
            <Message />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
