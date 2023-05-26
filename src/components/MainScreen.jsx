import React from 'react';
import PropTypes from 'prop-types';

const MainScreen = ({ initGame }) => (
  <div className="beater__main fadeIn">
    <h1 className="beater__main-title">የቃል አሸናፊ</h1>
    <p className="beater__main-subtitle">
    ፈጣኑ እና ትክክለኛ ጸሐፊ ለመሆን የሚያስፈልገው ነገር አለህ? የቃል አሸናፊ ለመሆን በተሰጠው የጊዜ ገደብ ውስጥ እያንዳንዱን ቃል በትክክል ይፃፉ!
    </p>
    <button
      className="button--primary button--big"
      onClick={initGame}
    >
      Start Game
    </button>

    <div className="copyright">
      <span>
        Music used in this game is not mine, downloaded from &nbsp; 
        <a 
          href="https://zedge.net" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Zedge
        </a> 
        &nbsp; and &nbsp; 
        <a 
          href="https://www.youtube.com/watch?v=OrPEoqp4sjg" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Alumo Music on Youtube
        </a>
      </span>
    </div>
  </div>
);

MainScreen.propTypes = {
  initGame: PropTypes.func
};

export default MainScreen;
