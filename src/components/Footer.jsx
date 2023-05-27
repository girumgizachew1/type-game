import React, { useState } from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { FaCommentsDollar, FaDiscord, FaTwitter } from "react-icons/fa";
import { AiTwotoneLock, AiOutlineMail } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { RiBrushFill } from "react-icons/ri";

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
          <a href="#" className="footernav-link" onClick={openContactModal}>
            <AiOutlineMail /> Contact
          </a>
          <a href="#" className="footernav-link" onClick={openSupportModal}>
            <FaCommentsDollar /> Support
          </a>
          <a href="https://github.com/girumgizachew1/type-game" className="footernav-link">
            <BiCodeAlt /> Github
          </a>
          <a href="#" className="footernav-link">
            <SlNotebook /> Terms
          </a>
          <a href="#" className="footernav-link">
            <MdOutlineSecurity /> Security
          </a>
          <a href="#" className="footernav-link">
            <AiTwotoneLock /> Privacy
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
          <h3 className='beater__main-maintitle' >Contact/አድራሻ</h3>
          <p className='beater__main-subtitle' >
            Feel free to send an email to girumegizachew@gmail.com. 
            Please do not send email to spam</p>
          <p></p>
          <p>The buttons below will open the default mail client.</p>
          <div className="button">
            <button className="contact-button" onClick={() => window.location.href = 'mailto:girumegizachew@gmail.com'}>
              Question
            </button>
            <button className="contact-button" onClick={() => window.open('https://github.com/girumgizachew1/type-game/issues')}>
              Bug Report
            </button>
            <button className="contact-button" onClick={() => window.location.href = 'mailto:girumegizachew@gmail.com'}>
              Feedback
            </button>
            <button className="contact-button" onClick={() => window.location.href = 'mailto:girumegizachew@gmail.com'}>
              Business Inquiry
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
            <h3 className='beater__main-maintitle' >Support የቃል አሸናፊ</h3>
          <p className='beater__main-subtitle' >
          Thank you so much for thinking about supporting this project. 
          It would not be possible without you and your continued support.</p>
           <p>The buttons below will open my buy me coffee links.</p>            {/* Add your support form or content here */}
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
