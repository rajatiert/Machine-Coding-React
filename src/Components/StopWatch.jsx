import React, { useState, useEffect } from 'react';

const StopWatch = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [incrementer, setIncrementer] = useState(null);

  const getMilliseconds = () => {
    return ('0' + (Math.floor(secondsElapsed * 100) % 100)).slice(-2);
  };

  const getSeconds = () => {
    return ('0' + parseInt(secondsElapsed % 60)).slice(-2);
  };

  const getMinutes = () => {
    return ('0' + Math.floor(secondsElapsed / 60)).slice(-2);
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setSecondsElapsed((prevSeconds) => prevSeconds + 0.01);
    }, 10);
    setIncrementer(interval);
  };

  const resetTimer = () => {
    clearInterval(incrementer);
    setSecondsElapsed(0);
  };

  const stopTimer = () => {
    clearInterval(incrementer);
  };

  useEffect(() => {
    return () => {
      clearInterval(incrementer);
    };
  }, [incrementer]);

  return (
    <div className="display">
      <h1>{getMinutes()}:{getSeconds()}:{getMilliseconds()}</h1>
      <button type="button" className="btn btn-danger" onClick={stopTimer}>
        Stop
      </button>
      <button type="button" className="btn btn-success" onClick={startTimer}>
        Start
      </button>
      <button type="button" className="btn btn-warning" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
