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
      <h1>ጨዋታው በ </h1>
      <h1 className="beater__countdown-count">{count} sec</h1>
      <br />
      <h1> ውስጥ ይጀምራል </h1>
      <p>ይዘጋጁ!</p>
    </div>
  );
};

export default Countdown;