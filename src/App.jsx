import React, { useState, useEffect, useRef } from 'react';
import MainScreen from './components/MainScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';
import Music from './components/Music';
import Countdowm from './components/Countdown';
import Loader from './components/Loader';
import { generateWord, generateGreet } from './helpers/random-word';
import correctBgm from './audios/correct.mp3';
import gameoverBgm from './audios/gameover.mp3';
import gameBgm from './audios/happy.mp3';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentWord, setCurrentWord] = useState(undefined);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [typedValue, setTypedValue] = useState('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [timer, setTimer] = useState(20);
  const [timerBase, setTimerBase] = useState(20);
  const [plusScore, setPlusScore] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const [greet, setGreet] = useState('awesome!');
  const [highScore, setHighScore] = useState(undefined);
  const [lastScore, setLastScore] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  const sound = {
    gameover: useRef(new Audio(gameoverBgm)),
    main: useRef(new Audio(gameBgm)),
    correct: useRef(new Audio(correctBgm))
  };

    // Declare the wordTypeInput variable
    let wordTypeInput = useRef(null);


  useEffect(() => {
    if (localStorage.wordBeaterStats) {
      const stats = JSON.parse(localStorage.getItem('wordBeaterStats'));
      setLastScore(stats.lastScore);
      setHighScore(stats.highScore);
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    const { current: gameoverSound } = sound.gameover;
    const { current: mainSound } = sound.main;
    const { current: correctSound } = sound.correct;

    const handleTyping = (e) => {
      const input = e.target.value.toLowerCase().trim();
      setTypedValue(input);
    };

    const handleGameState = () => {
      if (typedValue === currentWord) {
        setCurrentWord(generateWord());
        setTypedValue('');
        setScore((prevScore) => prevScore + plusScore);
        setTimer(timerBase);
        setGreet(generateGreet());
        setInputMaxLength();

        if (!audioMuted) {
          correctSound.currentTime = 0;
          correctSound.play();
        }

        if (score >= 4490) {
          setGameStateOnComplete(3, 6, 3, 25); // lvl 6: 3s
        } else if (score >= 3990) {
          setGameStateOnComplete(6, 5, 6, 20); // lvl 5: 6s
        } else if (score >= 2490) {
          setGameStateOnComplete(9, 4, 9, 20); // lvl 4: 9s
        } else if (score >= 1490) {
          setGameStateOnComplete(12, 3, 12, 20); // lvl 3: 12s
        } else if (score >= 490) {
          setGameStateOnComplete(15, 2, 15, 15); // lvl 2: 15s
        }
      }

      if (audioMuted) {
        mainSound.pause();
        mainSound.currentTime = 0;
      } else {
        mainSound.play();
      }
    };

    const gameTimer = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);

      if (timer <= 0 || gameOver) {
        clearInterval(gameTimer);
        updateHighScore();
        setGameOver(true);
        setCountdownFinished(false);
        setGameStarted(false);
        setTimer(20);
        setTimerBase(20);
        setTypedValue('');
        setPlusScore(10);
        setCurrentWord(undefined);
        setGreet('awesome!');
        setScore(false);

        if (!audioMuted) gameoverSound.play();
        mainSound.volume = 0.1;
      }
    }, 1000);

    document.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      if (gameStarted && countdownFinished) wordTypeInput.focus();
    });

    return () => {
      document.removeEventListener('click', () => {});
      clearInterval(gameTimer);
    };
  }, [
    currentWord,
    typedValue,
    plusScore,
    score,
    timerBase,
    audioMuted,
    gameStarted,
    gameOver,
    timer
  ]);

  const setGameStateOnComplete = (tb, lvl, t, ps = 10) => {
    setTimerBase(tb);
    setLevel(lvl);
    setTimer(t);
    setPlusScore(ps);
  };

  const initGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setCurrentWord(generateWord());
    setScore(0);
    setLevel(1);

    sound.main.current.volume = 0.05;

    document.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      if (gameStarted && countdownFinished) wordTypeInput.focus();
    });
  };

  const quitGame = () => {
    setGameStarted(false);
    setGameOver(false);
  };

  const updateHighScore = () => {
    if (localStorage.wordBeaterStats) {
      const stats = JSON.parse(localStorage.getItem('wordBeaterStats'));
      const highScore = stats.highScore || 0;
      const newHighScore = score > highScore ? score : highScore;

      setHighScore(newHighScore);
      setLastScore(stats.lastScore);

      localStorage.setItem(
        'wordBeaterStats',
        JSON.stringify({
          highScore: newHighScore,
          lastScore: score
        })
      );
    } else {
      localStorage.setItem(
        'wordBeaterStats',
        JSON.stringify({
          highScore: score,
          lastScore: score
        })
      );
    }
  };

  const initTimer = () => {
    setCountdownFinished(true);
    setInputMaxLength();
  };

  const onTypeHandler = (e) => {
    const input = e.target.value.toLowerCase().trim();
    setTypedValue(input);
  };

  const setInputMaxLength = () => {
    wordTypeInput.setAttribute('maxlength', currentWord.length);
  };

  const audioHandler = () => {
    setAudioMuted(!audioMuted);
  };

  return (
    <React.Fragment>
      {isLoaded ? (
        <div className={isLoaded ? 'beater fadeIn' : 'beater'}>
          <Music audioHandler={audioHandler} audioMuted={audioMuted} />
          {gameStarted && !countdownFinished && (
            <Countdowm initTimer={initTimer} />
          )}
          {gameStarted && countdownFinished && (
            <Game
              gameData={{
                gameStarted,
                gameOver,
                audioMuted,
                countdownFinished,
                currentWord,
                typedValue,
                score,
                level,
                timer,
                plusScore,
                greet,
                highScore,
                lastScore
              }}
              onTypeHandler={onTypeHandler}
              wordTypeInput={(el) => (wordTypeInput = el)}
            />
          )}
          {gameOver && (
            <GameOver
              gameData={{
                gameStarted,
                gameOver,
                audioMuted,
                countdownFinished,
                currentWord,
                typedValue,
                score,
                level,
                timer,
                plusScore,
                greet,
                highScore,
                lastScore
              }}
              initGame={initGame}
              quitGame={quitGame}
            />
          )}
          {!gameStarted && !gameOver && (
            <MainScreen initGame={initGame} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default App;
