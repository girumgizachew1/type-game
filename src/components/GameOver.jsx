import React from 'react';
import PropTypes from 'prop-types';

const GameOver = ({ gameData: { highScore, lastScore, score, level }, initGame, quitGame }) => {
  return (
    <div className="beater__gameover fadeIn">
      <h1 className="beater__gameover-title">ጨዋታውን ተሸንፈሃል</h1>
      <div className="beater__gameover-summary">
        <h2>የመጨረሻ ነጥብ፡-</h2>
        <h2>{score}</h2>
      </div>
      <div className="beater__gameover-summary">
        <h2>የደረሰው ደረጃ፡-</h2>
        <h2>{level}</h2>
      </div>
      {!!highScore && (
        <div className="beater__gameover-summary">
          <h2>ከፍተኛ ነጥብ፡-</h2>
          <h2>{highScore}</h2>
        </div>
      )}
      {!!lastScore && (
        <div className="beater__gameover-summary">
          <h2>ያለፈው ነጥብ፡-</h2>
          <h2>{lastScore}</h2>
        </div>
      )}

      <div className="beater__main-actions">
        <button className="button--secondary button--big" onClick={initGame}>
        እንደገና ሞክር
        </button>
        <button className="button--secondary button--big" onClick={quitGame}>
        አቁም
        </button>
      </div>
    </div>
  );
};

GameOver.propTypes = {
  gameData: PropTypes.shape({
    gameOver: PropTypes.bool,
    score: PropTypes.number,
    level: PropTypes.number,
  }),
  initGame: PropTypes.func,
  quitGame: PropTypes.func,
};

export default GameOver;
