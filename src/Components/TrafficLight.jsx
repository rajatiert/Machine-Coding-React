import React , {useState , useEffect} from 'react';
import '../App.css';

const TrafficLight = ({  }) => {

    const [bg, setBg] = useState("red");

    const colorsAndDurations = [
        { color: "red", duration: 6000 },
        { color: "yellow", duration: 4000 },
        { color: "green", duration: 3000 }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (index + 1) % colorsAndDurations.length;
            setBg(colorsAndDurations[nextIndex].color);
            setIndex(nextIndex);
        }, colorsAndDurations[index].duration);

        return () => clearInterval(intervalId);
    }, [index, colorsAndDurations]);

    
    const lights = ["light1", "light2", "light3"];

    return (
        <div className="traffic-container">
            {lights.map((light, i) => (
                <div key={i} className={light} style={index % 3 === i ? { background: bg } : {}}></div>
            ))}
        </div>
    );
}

export default TrafficLight;
