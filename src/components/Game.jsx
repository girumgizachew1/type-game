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

      const levelColor = {
        1: ['#fff', 'rgba(255, 255, 255, .4)'],
        2: ['#488ca1', 'rgba(72, 140, 161, .4)'],
        3: ['#99da00', 'rgba(153, 218, 0, .4)'],
        4: ['#F9E606', 'rgba(249, 230, 6, .4)'],
        5: ['#ED06FB', 'rgba(237, 6, 251, .4)'],
        6: ['#9B1BEA', 'rgba(155, 27, 234, .4)']
      };

      const onKeyUpHandler = (e) => {
        const input = e.target.value;
        const regExp = new RegExp(input, 'g');

        visibleCurrentWord.current.innerHTML = currentWord;
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
              <p>TYPE THE WORD</p>
              <h1 ref={visibleCurrentWord}>{currentWord}</h1>
            </div>
            <div className="beater__game-widgets">
              <div className="beater__game-widgets-wrapper">
                <span>Level</span>
                <h2
                  style={{
                    color: levelColor[level][0],
                    textShadow: `0 0 15px ${levelColor[level][1]}`
                  }}
                >
                  {level}
                </h2>
              </div>
              <div className="beater__game-widgets-wrapper">
                <span>Time</span>
                <h2 className={timer <= 3 ? 'timeRunningOut' : null}>
                  {timer}
                </h2>
              </div>
              <div className="beater__game-widgets-wrapper">
                <span>Score</span>
                <div ref={plusScoreWrapper}>
                  <h2>{score}</h2>
                </div>
              </div>
            </div>
            <input
              autoFocus
              className="beater__game-input"
              onChange={onTypeHandler}
              onKeyUp={onKeyUpHandler}
              placeholder="Start Typing Now!"
              ref={wordTypeInput}
              type="text"
              value={typedValue}
            />
          </div>
        </div >
      );
    };

    Game.propTypes = {
      gameData: PropTypes.object,
      onTypeHandler: PropTypes.func,
      wordTypeInput: PropTypes.func
    };
  
export default Game;