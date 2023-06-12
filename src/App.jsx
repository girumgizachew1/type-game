import React, { useState, useEffect, useRef } from 'react';
import MainScreen from './components/MainScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';
import Music from './components/Music';
import Countdowm from './components/Countdown';
import Loader from './components/Loader';
import { generateWord, generateGreet } from './helpers/random-word';
import correctBgm from './audios/correct.mp3';
import gameBgm from './audios/roph.mp3';
import Header from './components/Header';
import Footer from './components/Footer';
import { BiHash, BiTime } from "react-icons/bi";
import { convertToAmharic } from 'amharic-converter';
import { BsFillFileWordFill } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";
import { Helmet } from 'react-helmet';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentWord, setCurrentWord] = useState(undefined);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [typedValue, setTypedValue] = useState('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  const [timer, setTimer] = useState(80);
  const [timerBase, setTimerBase] = useState(80);

  const [plusScore, setPlusScore] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const [greet, setGreet] = useState('ደስ የሚል!');
  const [highScore, setHighScore] = useState(undefined);
  const [lastScore, setLastScore] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  const [customTime, setCustomTime] = useState(false)
  const [timenotword, setTimeNotWord] = useState(true)
  const [numberofwords, setNumberOfWords] = useState(30)
  const [timeTaken, setTimeTaken] = useState(0)
  const [wordWritten, setWordWritten] = useState(0)
  const sound = {
    //  gameover: useRef(new Audio(gameoverBgm)),
    main: useRef(new Audio(gameBgm)),
    correct: useRef(new Audio(correctBgm))
  };
  let wordTypeInput = useRef(null); // Declare wordTypeInput using useRef

  const options = {
    maxLength: 5,
    exactly: numberofwords
  };

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
    // const concatenatedString = currentWord.join(' '); 
    setInputMaxLength();

    if (typedValue === currentWord) {
      if (!audioMuted) {
        correctSound.currentTime = 0;
        correctSound.play();
      }
      setLevel(level + 1)
      setCurrentWord(generateWord(options).join(' '));
      setTypedValue('');
      setTimeTaken((prevTime) => prevTime + (timerBase - timer))
      setWordWritten((prevWrittenWord) => prevWrittenWord + numberofwords)
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
          setTimer(timerBase);
          setTypedValue('');
          setPlusScore(10);
          setCurrentWord(undefined);
          setGreet('ደስ የሚል!');
          //       setScore(false);
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
    setTimer(timerBase)
    setCurrentWord(generateWord(options).join(' '));
    setPlusScore(10 * numberofwords)
    setScore(0);
    setLevel(1);
    setTimeTaken(0)
    setWordWritten(0)
    setTypedValue('')
    sound.main.current.volume = 0.2;

    document.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      if (gameStarted && countdownFinished) wordTypeInput.current.focus();
    });
  };

  const quitGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setCountdownFinished(false);

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

  const onTypeHandler = (event) => {
    const englishText = event.target.value;
    const amharicText = convertToAmharic(englishText);
    setTypedValue(amharicText.convertedText);
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
      <Helmet>
        <meta name="description" content="Discover the joy of learning Amharic through an exciting typing game. Immerse yourself in a fun and interactive experience while honing your Amharic typing skills. Unlock the richness of the Amharic language in this engaging game. Start playing now and embark on a journey of linguistic exploration." />
        <meta name="keywords" content="Amharic typing game, learn Amharic, Amharic language, typing skills, linguistic exploration, interactive game" />
        <meta property="og:image" content="/ATG.jpg" />
      </Helmet>
      {isLoaded ? (
        <div className={isLoaded ? 'beater fadeIn' : 'beater'}>
          <Music audioHandler={audioHandler} audioMuted={audioMuted} />
          {gameStarted && !countdownFinished && (
            <Countdowm initTimer={initTimer} />

          )}
          <Header initGame={initGame} />
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
                  <a onClick={() => {
                    if (!gameStarted)
                      setTimerBase(30)
                  }}
                    style={{
                      color: timerBase === 30 ? '#f9f5d0' : '#bba474'
                    }}
                  >30</a>
                  <a onClick={() => {
                    if (!gameStarted)
                      setTimerBase(60)
                  }}
                    style={{
                      color: timerBase === 60 ? '#f9f5d0' : '#bba474'
                    }}  >60</a>
                  <a onClick={() => {
                    if (!gameStarted)
                      setTimerBase(90)
                  }}
                    style={{
                      color: timerBase === 90 ? '#f9f5d0' : '#bba474'
                    }}
                  >90</a>
                  <a onClick={() => {
                    if (!gameStarted)
                      setTimerBase(120)
                  }}
                    style={{
                      color: timerBase === 120 ? '#f9f5d0' : '#bba474'
                    }} >120</a>
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
                      color: numberofwords === 80 ? '#f9f5d0' : '#bba474'
                    }}
                  >80</a>
                </>
              )}

            </div>
          </div>


          {gameStarted && countdownFinished && (
            <>
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
                wordTypeInput={wordTypeInput}
                initGame={initGame}
                quitGame={quitGame} />
              <div><Footer /></div>
            </>

          )}
          {gameOver && (
            <>
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
                  lastScore,
                  timeTaken,
                  wordWritten,
                }}
                initGame={initGame}
                quitGame={quitGame}
              />
              <div><Footer /></div>
            </>
          )}
          {!gameStarted && !gameOver && (
            <>
              <MainScreen initGame={initGame} />
              <div><Footer /></div>
            </>
          )}



        </div>
      ) : (
        <Loader />

      )}
    </React.Fragment>
  );
};

export default App;
