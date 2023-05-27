import React from 'react';
import PropTypes from 'prop-types';

const MainScreen = ({ initGame }) => (
  <div className='beater' >
    <header className="beater__header">
      <div className="beater__logo-wrapper">
        <img src="logo.svg"  alt="Amharic Game Logo" className="w-20 h-20" />
      </div>
      <h1 className="beater__main-subtitle">
        <span>የቃል አሸናፊ</span>
        <span className="beater__logo-name">Amharic Game</span>
      </h1>
    </header>
    <div className="beater__main fadeIn">
      <p className="beater__main-subtitle">
        ፈጣኑ እና ትክክለኛ ጸሐፊ ለመሆን የሚያስፈልገው ነገር አለህ? የቃል አሸናፊ ለመሆን በተሰጠው የጊዜ ገደብ ውስጥ እያንዳንዱን ቃል በትክክል ይፃፉ!
      </p>
      <button
        className="button--secondary button--big"
        onClick={initGame}
      >
        ጨዋታውን ጀምር
      </button>
      <div className="copyright">
        <span>
          በዚህ ጨዋታ ውስጥ ጥቅም ላይ የሚውለው ሙዚቃ የወረደው ነው። የእኔ አይደለም። &nbsp;
        </span>
      </div>
    </div>
  </div>
);

MainScreen.propTypes = {
  initGame: PropTypes.func
};

export default MainScreen;