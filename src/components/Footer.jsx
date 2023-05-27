import React from 'react'
import { MdNotifications } from "react-icons/md";
import { RiBrushFill } from "react-icons/ri";

import { FcAbout } from "react-icons/fc";
import { AiFillSetting } from "react-icons/ai";
import { BsKeyboard,BsFillQuestionOctagonFill } from "react-icons/bs";

function Footer() {
    return (
        <div className="header">
        <div className="header-logo">
            <nav className="navigation">
                <a href="#" className="footernav-link"> <BsKeyboard/> Contact </a>
                <a href="#" className="footernav-link"> <BsFillQuestionOctagonFill/> Support </a>
                <a href="#" className="footernav-link"> <AiFillSetting/> Github </a>
                <a href="#" className="footernav-link"> <BsKeyboard/> Discord </a>
                <a href="#" className="footernav-link"> <BsFillQuestionOctagonFill/> Twitter </a>
                <a href="#" className="footernav-link"> <AiFillSetting/> Terms </a>
                <a href="#" className="footernav-link"> <BsKeyboard/> Security </a>
                <a href="#" className="footernav-link"> <BsFillQuestionOctagonFill/> Privacy </a>
            </nav>
        </div>
        <div className='navigation' >
            <a href="#" className="footernav-link"><RiBrushFill/> V1.0.0 </a>
        </div>

    </div>
    )
}

export default Footer