// Header.js

import React from 'react';
import { MdNotifications } from "react-icons/md";
import { RiBrushFill } from "react-icons/ri";

import { FcAbout } from "react-icons/fc";
import { AiFillSetting } from "react-icons/ai";
import { BsKeyboard,BsFillQuestionOctagonFill } from "react-icons/bs";

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img src="/logo.svg" alt="Amharic Game Logo" className="w-10 h-10" width={40} height={40} />
                <h1 className="header__text">የቃል አሸናፊ</h1>
                <nav className="navigation">
                    <a href="#" className="navigation-link"> <BsKeyboard/> </a>
                    <a href="#" className="navigation-link"> <BsFillQuestionOctagonFill/> </a>
                    <a href="#" className="navigation-link"> <AiFillSetting/> </a>
                </nav>
            </div>
            <div className='navigation' >
                <a href="#" className="navigation-link"><MdNotifications/></a>
                <a href="#" className="navigation-link"><RiBrushFill/></a>
            </div>
        </div>
    );
}

export default Header;
