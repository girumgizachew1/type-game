import React, { useState } from 'react';
import { MdNotifications } from "react-icons/md";
import { RiBrushFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { AiFillSetting } from "react-icons/ai";
import { BsKeyboard, BsFillQuestionOctagonFill } from "react-icons/bs";

function Header({ initGame }) {
    const [showSlider, setShowSlider] = useState(false);

    const toggleSlider = () => {
        setShowSlider(!showSlider);
    };
    return (
        <div className="header">
            <div className="header-logo">
                <a href="/" className="navigation-link header-logo">
                    <img src="/logo.png" alt="Amharic Game Logo" className="w-10 h-10" width={40} height={40} />
                    <h1 className="header__text">የቃል አሸናፊ</h1>
                </a>
                <nav className="navigation">
                    <a onClick={initGame} className="navigation-link">
                        <BsKeyboard />
                    </a>
                </nav>
            </div>
            <div className='navigation'>
                <a href="#" className="navigation-link" onClick={toggleSlider}>
                    <MdNotifications />
                </a>
            </div>
            {showSlider && (
                <div>
                    <div className="overlay" onClick={toggleSlider}></div>
                    <div className="slider">
                        {/* Add content for the slider here */}
                        <h2 className="beater__main-maintitle" >Announcements</h2>
                        <p>noting to show.</p>

                        <h2 className="beater__main-maintitle" >Notifications</h2>
                        <p>noting to show.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
