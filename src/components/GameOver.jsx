import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { BsArrowRepeat } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const GameOver = ({ gameData: { highScore, lastScore, score, level, timeTaken, wordWritten }, initGame, quitGame }) => {
  const [wpm, setWPM] = useState(Math.floor(wordWritten / (timeTaken / 60)));
  const chartData = {
    labels: ['Previous Score', 'High Score', 'Current Score'],
    datasets: [
      {
        label: 'Score',
        data: [lastScore, highScore, score],
        backgroundColor: ['rgba(54, 162, 235, 0.5)', '#bba474', 'rgba(75, 192, 192, 0.5)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="beater__gameover fadeIn">
      <div className='beater__gameover-overview' >
        <div className='beater__gameover-firstlink' >
          <div className="beater__gameover-summary">
            {!!wpm && (
              <div className="beater__gameover-summary-item">
                <h1 className="beater__gameover-summary-title">WPM:</h1>
                <h1 className="beater__gameover-summary-result beater__main-maintitle">{wpm}</h1>
              </div>
            )}
            {!!timeTaken && (
              <div className="beater__gameover-summary-item">
                <h1 className="beater__gameover-summary-title">Time:</h1>
                <h1 className="beater__gameover-summary-result beater__main-maintitle">{timeTaken}</h1>
              </div>
            )}
            <div className="beater__gameover-summary-item">
              <h2 className="beater__gameover-summary-title">Test Type</h2>
              <h2 className="beater__gameover-summary-subtitle">Words: {wordWritten}</h2>
              <h2 className="beater__gameover-summary-subtitle">Amharic</h2>
            </div>
          </div>

        </div>
        <div className='beater__gameover-secondlink' >
          <Bar data={chartData} options={chartOptions} />
          <div className='bottom_display' >
            <div className="beater__main-actions">
              <div className="beater__gameover-summary-item">
                <h1 className="beater__gameover-summary-title">Score:</h1>
                <h1 className="beater__gameover-summary-result beater__main-maintitle">{score}</h1>
              </div>
              <div className="beater__gameover-summary-item">
                <h1 className="beater__gameover-summary-title">High Score:</h1>
                <h1 className="beater__gameover-summary-result beater__main-maintitle">{highScore}</h1>
              </div>
              <div className="beater__gameover-summary-item">
                <h1 className="beater__gameover-summary-title">Word Written:</h1>
                <h1 className="beater__gameover-summary-result beater__main-maintitle">{wordWritten}</h1>
              </div>
            </div>
            <div>
              <a className="navigation-link" onClick={initGame}>
                <BsArrowRepeat/>
              </a>
              <a className="navigation-link" onClick={quitGame}>
              <AiOutlineCloseCircle/>
              </a>
            </div>
          </div>


        </div>
      </div>



    </div>
  );
};

GameOver.propTypes = {
  gameData: PropTypes.shape({
    gameOver: PropTypes.bool,
    score: PropTypes.number,
    level: PropTypes.number,
    highScore: PropTypes.number,
    lastScore: PropTypes.number,
    timeTaken: PropTypes.number,
    wordWritten: PropTypes.number,
  }),
  initGame: PropTypes.func,
  quitGame: PropTypes.func,
};

export default GameOver;
