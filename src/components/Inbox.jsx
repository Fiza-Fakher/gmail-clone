import React from 'react';
import '../components/Inbox.css';
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
function Inbox() {
  return (
    <>
      <div className="box">
        <div className="box-1">
          <MdCheckBoxOutlineBlank className='icon-1' />
          <FaCaretDown className='icom-2' />
          <IoMdRefresh />
          <BsThreeDotsVertical />
        </div>
        <div className="box-2">
          <div className="icon-text" id='primary'>
            <FaInbox /> Primary
          </div>
          <div className="icon-text" id='promo'>
            <GoTag /> Promotions
          </div>
          <div className="icon-text" id='social'>
            <MdOutlinePeopleAlt /> Social
          </div>
        </div>
      </div>
    </>
  );
}

export default Inbox;
