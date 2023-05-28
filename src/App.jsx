import React, { useState, useEffect, useRef } from 'react';
import MainScreen from './components/MainScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';
import Music from './components/Music';
import Countdowm from './components/Countdown';
import Loader from './components/Loader';
import { generateWord, generateGreet } from './helpers/random-word';
import correctBgm from './audios/correct.mp3';
//import gameoverBgm from './audios/gameover.mp3';
import gameBgm from './audios/roph.mp3';
import transcriptionRules from './helpers/Translationrule';
import Header from './components/Header';
import Footer from './components/Footer';
import { BiHash, BiTime } from "react-icons/bi";

import { BsFillFileWordFill } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentWord, setCurrentWord] = useState(undefined);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [typedValue, setTypedValue] = useState('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  const [timer, setTimer] = useState(200);
  const [timerBase, setTimerBase] = useState(200);

  const [plusScore, setPlusScore] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const [greet, setGreet] = useState('ደስ የሚል!');
  const [highScore, setHighScore] = useState(undefined);
  const [lastScore, setLastScore] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);



  const [timenotword, setTimeNotWord] = useState(true)
  const [numberofwords, setNumberOfWords] = useState(20)

  const options = {
    exactly: 1, // Generate exactly 5 words
  };

  const sound = {
    //  gameover: useRef(new Audio(gameoverBgm)),
    main: useRef(new Audio(gameBgm)),
    correct: useRef(new Audio(correctBgm))
  };
  let wordTypeInput = useRef(null); // Declare wordTypeInput using useRef


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
    // const { current: gameoverSound } = sound.gameover;
    const { current: mainSound } = sound.main;
    const { current: correctSound } = sound.correct;

    setInputMaxLength();

    if (typedValue === currentWord) {
      if (!audioMuted) {
        correctSound.currentTime = 0;
        correctSound.play();
      }
      setCurrentWord(generateWord(options));
      setTypedValue('');
      setTimer(timerBase);
      setScore((prevScore) => prevScore + plusScore);
      setGreet(generateGreet());
    }

    if (audioMuted) {
      mainSound.pause();
      mainSound.currentTime = 0;
    } else {
      mainSound.play();
    }
  }, [
    currentWord,
    typedValue,
    plusScore,
    score,
    timerBase,
    audioMuted,
    timer,
  ]);

  useEffect(() => {
    //const { current: gameoverSound } = sound.gameover;
    const { current: mainSound } = sound.main;

    const gameTimer = setInterval(() => {
      console.log(countdownFinished)
      if (countdownFinished) {
        setTimer((prevTimer) => prevTimer - 1);

        if (timer <= 0 || gameOver) {
          clearInterval(gameTimer);
          updateHighScore();
          setGameOver(true);
          setCountdownFinished(false);
          setGameStarted(false);
          setTimer(200);
          setTimerBase(200);
          setTypedValue('');
          setPlusScore(10);
          setCurrentWord(undefined);
          setGreet('ደስ የሚል!');
          setScore(false);
        }
      }
    }, 1000);

    document.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      if (gameStarted && countdownFinished) wordTypeInput.current.focus();
    });

    return () => {
      document.removeEventListener('click', () => { });
      clearInterval(gameTimer);
    };
  }, [
    countdownFinished,
    plusScore,
    score,
    timerBase,
    audioMuted,
    gameStarted,
    gameOver,
    timer,
    //    updateHighScore,
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
    setCurrentWord(generateWord(generateWord));
    setScore(0);
    setLevel(1);

    sound.main.current.volume = 0.2;

    document.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      if (gameStarted && countdownFinished) wordTypeInput.current.focus();
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
    let car = e.target.value;
    Object.entries(transcriptionRules).forEach(([pattern, replacement]) => {
      const regex = new RegExp(pattern, 'g');
      car = car.replace(regex, replacement);
    });
    setTypedValue(car);
  };


  const setInputMaxLength = () => {
    if (wordTypeInput.current) {
      wordTypeInput.current.setAttribute('maxlength', currentWord.length + 1);
    }
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
          <Header />
          <div className='controller'>
            <div>
              <a>ሥርዓተ ነጥብ</a>
              <a><BiHash /> ቁጥር</a>
            </div>
            <div>
              <a onClick={() => { setTimeNotWord(true) }}
                style={{
                  color: timenotword ? '#f9f5d0' : '#bba474'
                }}
              ><BiTime /> ጊዜ</a>
              <a onClick={() => { setTimeNotWord(false) }}
                style={{
                  color: !timenotword ? '#f9f5d0' : '#bba474'
                }}
              ><BsFillFileWordFill /> ቃል</a>
            </div>
            <div>
              {timenotword ? (
                <>
                  <a>30</a>
                  <a>60</a>
                  <a>90</a>
                  <a>120</a>
                </>
              ) : (
                <>
                  <a onClick={() => { setNumberOfWords(20) }}
                    style={{
                      color: numberofwords === 20 ? '#f9f5d0' : '#bba474'
                    }} >20</a>
                  <a onClick={() => { setNumberOfWords(40) }}
                    style={{
                      color: numberofwords === 40 ? '#f9f5d0' : '#bba474'
                    }} >40</a>

                  <a onClick={() => { setNumberOfWords(60) }}
                    style={{
                      color: numberofwords === 60 ? '#f9f5d0' : '#bba474'
                    }}
                  >60</a>

                  <a onClick={() => { setNumberOfWords(80) }}
                    style={{
                      color: numberofwords === 80 ? '#f9f5d0': '#bba474'
                    }}
                  >80</a>
                </>
              )}
              <a><VscSettings /></a>
            </div>
          </div>


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
              wordTypeInput={wordTypeInput} />
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
          <div><Footer /></div>

        </div>
      ) : (
        <Loader />

      )}
    </React.Fragment>
  );
};

export default App;
