import React, { useState } from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { FaCommentsDollar, FaDiscord, FaPatreon, FaTwitter, FaQuestion, FaBug, FaBriefcase } from "react-icons/fa";
import { AiTwotoneLock, AiOutlineMail, AiFillMessage } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { RiBrushFill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";

function Footer() {
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [isSupportModalOpen, setSupportModalOpen] = useState(false);
    const [isVersionModalOpen, setVersionModalOpen] = useState(false);

    const openContactModal = () => {
        setContactModalOpen(true);
    };

    const openSupportModal = () => {
        setSupportModalOpen(true);
    };

    const openVersionModal = () => {
        setVersionModalOpen(true);
    };

    const closeModal = () => {
        setContactModalOpen(false);
        setSupportModalOpen(false);
        setVersionModalOpen(false);
    };

    return (
        <div className="header">
            <div className="header-logo">
                <nav className="navigation">
                    <a className="footernav-link" onClick={openContactModal}>
                        <AiOutlineMail /> Contact
                    </a>
                    <a className="footernav-link" onClick={openSupportModal}>
                        <FaCommentsDollar /> Support
                    </a>
                    <a href="https://github.com/girumgizachew1/type-game" className="footernav-link">
                        <BiCodeAlt /> Github
                    </a>
                    <a href="/termsofservice" className="footernav-link" target="_blank" rel="noopener noreferrer">
                        <SlNotebook /> Terms
                    </a>

                </nav>
            </div>
            <div className="navigation">
                <a className="footernav-link" onClick={openVersionModal}>
                    <RiBrushFill /> V1.0.0
                </a>
            </div>

            {/* Contact Modal */}
            {isContactModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content modal-large">
                        <h3 className='beater__main-maintitle' >የእውቂያ ገጽ</h3>
                        <span className='beater__main-subtitle' >
                            የእርስዎ ሃሳቦች እና ጥያቄዎች ለኛ አስፈላጊ ናቸው፣ እና ግልጽ ግንኙነትን እናበረታታለን። እባክዎን የቀረበውን መረጃ በመጠቀም እኛን ለማነጋገር ነፃነት ይሰማዎ</span>
                        <div className="button">
                            <button className="contact-button" onClick={() => window.location.href = 'mailto:girumegizachew@gmail.com'}>
                                <FaQuestion />
                                <h4>Question</h4>
                            </button>
                            <button className="contact-button" onClick={() => window.open('https://github.com/girumgizachew1/type-game/issues')}>
                                <FaBug />
                                <h4>Bug Report</h4>
                            </button>
                            <button className="contact-button" onClick={() => window.location.href = 'mailto:girumegizachew@gmail.com'}>
                                <AiFillMessage />
                                <h4>Feedback</h4>
                            </button>
                            <button className="contact-button" onClick={() => window.location.href = 'mailto:girumegizachew@gmail.com'}>
                                <FaBriefcase />
                                <h4>Business Inquiry</h4>
                            </button>
                            {/* Add more buttons here */}
                        </div>
                    </div>
                </div>
            )}

            {/* Support Modal */}
            {isSupportModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content modal-large">
                        {/* Modal content for Support */}
                        <h3 className='beater__main-maintitle' >የቃል አሸናፊን ይደግፉ</h3>
                        <span className='beater__main-subtitle' >
                            ይህንን ፕሮጀክት ለመደገፍ በማሰብዎ በጣም እናመሰግናለን። ይህ ሁሉ እንዲቻል ያደረገው የእርስዎ የማይናወጥ ድጋፍ አስፈላጊ ነው።</span>

                        <span className='beater__main-subtitle' >
                            ለፕሮጀክቱ በማበርከት ሊረዱን ይችላሉ።</span>
                        {/* Add your support form or content here */}
                        <div className="support-buttons">
                            <a href="https://www.buymeacoffee.com/girumegizaM?new=1" target="_blank" rel="noopener noreferrer">

                                <button className="buy-me-coffee">
                                    <SiBuymeacoffee />
                                    <h4 className='' > Buy Me a Coffee</h4>
                                </button>
                            </a>
                            <a href="https://ko-fi.com/your-link" target="_blank" rel="noopener noreferrer">
                                <button className="kofi">
                                    <FaPatreon />
                                    <h4>Become a Patron</h4>
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            )}

            {/* Version Modal */}
            {isVersionModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content modal-extra-large">
                        {/* Modal content for Version */}
                        <h2>Version Modal</h2>
                        {/* Add your version details or content here */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Footer;
