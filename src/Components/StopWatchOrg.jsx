import React, { useState, useEffect } from "react";
import "../App.css";

const Stopwatch = () => {

    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const getMiliseconds = () => {
        return ('0' + Math.floor((seconds * 100) % 100)).slice(-2);
    }

    const getSeconds = () => {
        return ('0' + Math.floor(seconds % 60)).slice(-2);
    }

    const getMinutes = () => {
        return ('0' + Math.floor(seconds / 60)).slice(-2);
    }

    const start = () => {
        const id = setInterval(() => {
            setSeconds(prev => prev + 0.01);
        }, 10);
        setIntervalId(id);
    }

    const stop = () => {
        clearInterval(intervalId)
    }


    const reset = () => {
        clearInterval(intervalId);
        setSeconds(0);
    }

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, [intervalId])

    return <div className="stopwatch">
        <h1>{` ${getMinutes()} : ${getSeconds()} : ${getMiliseconds()}`}</h1>
        <div className="stopwatch-buttons">
            <button onClick={() => start()}>Start Stopwatch</button>
            <button onClick={() => stop()}>Stop Stopwatch</button>
            <button onClick={() => reset()}>Reset Timer</button>
        </div>
    </div>
}

export default Stopwatch