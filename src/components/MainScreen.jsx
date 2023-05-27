import React from 'react';
import PropTypes from 'prop-types';

const MainScreen = ({ initGame }) => (
  <div className="beater__main fadeIn">
    <h1 className="beater__main-maintitle">የቃል አሸናፊ</h1>
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
);

MainScreen.propTypes = {
  initGame: PropTypes.func
};

export default MainScreen;
