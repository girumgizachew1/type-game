import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Game = ({ gameData, onTypeHandler, wordTypeInput }) => {
  const visibleCurrentWord = useRef(null);
  const plusScoreWrapper = useRef(null);
  const greetingWrapper = useRef(null);
  const {
    gameStarted,
    greet,
    currentWord,
    level,
    timer,
    score,
    plusScore,
    typedValue
  } = gameData;


  const onKeyUpHandler = (e) => {
    const input = e.target.value;
    const regExp = new RegExp(input, 'g');
    visibleCurrentWord.current.innerHTML = currentWord

    if (input.trim() !== '') {
      visibleCurrentWord.current.innerHTML = currentWord.replace(regExp, (match) => {
        return `<span class="matched">${match}</span>`;
      });
    }
  };


  useEffect(() => {
    if (currentWord === typedValue) {
      const span = document.createElement('span');
      const h2 = document.createElement('h2');
      span.className = 'plus';
      span.textContent = `+${plusScore}`;
      h2.className = 'showGreet';
      h2.textContent = `★ ${greet} ★`;
      plusScoreWrapper.current.appendChild(span);
      greetingWrapper.current.appendChild(h2);

      setTimeout(() => {
        plusScoreWrapper.current.removeChild(span);
        greetingWrapper.current.removeChild(h2);
      }, 1000);
    }
  }, [currentWord, greet, plusScore, typedValue]);

  return (
    <div className="beater__game fadeIn">
      <div className="beater__game-wrapper">
        <div className="beater__game-greet" ref={greetingWrapper} />
        <div className="beater__game-current">
          <p>ይህን ቃል ይጻፉ</p>
          <h2 ref={visibleCurrentWord}>{currentWord}</h2>
        </div>
        <input
          autoFocus
          className="beater__game-input"
          onChange={onTypeHandler}
          onKeyUp={onKeyUpHandler}
          placeholder="መፀሀፍ ይጀምሩ"
          ref={wordTypeInput}
          type="text"
          value={typedValue}
        />
        <div className="beater__game-widgets">
          <div className="beater__game-widgets-wrapper">
            <span>ደረጃ</span>
            <h3
            >
              {level}
            </h3>
          </div>
          <div className="beater__game-widgets-wrapper">
            <span>ሰዓት</span>
            <h3 className={timer <= 3 ? 'timeRunningOut' : null}>
              {timer}
            </h3>
          </div>
          <div className="beater__game-widgets-wrapper">
            <span>ውጤት</span>
            <div ref={plusScoreWrapper}>
              <h3>{score}</h3>
            </div>
          </div>
        </div>
        <div className='beater__main-actions' >
          <a className="navigation-link" onClick={initGame}>
            <BsArrowRepeat />
          </a>
          <a className="navigation-link" onClick={quitGame}>
            <AiOutlineCloseCircle />
          </a>
        </div>

      </div>
    </div>
  );
};

Game.propTypes = {
  gameData: PropTypes.object,
  onTypeHandler: PropTypes.func,
  wordTypeInput: PropTypes.func
};

export default Game;
