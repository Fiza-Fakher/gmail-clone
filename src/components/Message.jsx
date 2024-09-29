import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import '../components/Message.css'
function Message() {
  return (
<>
<MdCheckBoxOutlineBlank/>
<IoIosStarOutline className='i-1'/>
<p>Fiver Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, fugit.</p>

<MdCheckBoxOutlineBlank/>
<IoIosStarOutline className='i-1'/>
<p>Fiver Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, fugit.</p>

<MdCheckBoxOutlineBlank/>
<IoIosStarOutline className='i-1'/>
<p>Fiver Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, fugit. <time datetime="">3:24Pm</time></p>

</>
  )
}

export default Message
