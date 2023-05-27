import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { SlNotebook} from "react-icons/sl";
import { FaCommentsDollar,FaDiscord,FaTwitter } from "react-icons/fa";
import { AiTwotoneLock,AiOutlineMail } from "react-icons/ai";
import { BiCodeAlt} from "react-icons/bi";
RiBrushFill
import { RiBrushFill} from "react-icons/ri";

function Footer() {
    return (
        <div className="header">
        <div className="header-logo">
            <nav className="navigation">
                <a href="#" className="footernav-link"> <AiOutlineMail/> Contact </a>
                <a href="#" className="footernav-link"> <FaCommentsDollar/> Support </a>
                <a href="https://github.com/girumgizachew1/type-game" className="footernav-link"> <BiCodeAlt/> Github </a>
                <a href="#" className="footernav-link"> <SlNotebook/> Terms </a>
                <a href="#" className="footernav-link"> <MdOutlineSecurity/> Security </a>
                <a href="#" className="footernav-link"> <AiTwotoneLock/> Privacy </a>
            </nav>
        </div>
        <div className='navigation' >
            <a className="footernav-link"><RiBrushFill/> V1.0.0 </a>
        </div>

    </div>
    )
}

export default Footer