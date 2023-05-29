import React, { useEffect, useState } from 'react';

const Countdown = ({ initTimer }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const gameCountdown = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
      if (count < 1) {
        initTimer();
        clearInterval(gameCountdown);
      }
    }, 1000);

    return () => {
      clearInterval(gameCountdown);
    };
  }, [count, initTimer]);

  return (
    <div className="beater__countdown">
      <div
        className="beater__countdown-circle"
        style={{

          animationDuration: `${count}s`,
          animationPlayState: count === 0 ? 'paused' : 'running',
        }}
      >
        <h1 className='beater__countdown-count' >!</h1>
      </div>
    </div>
  );
};

export default Countdown;
