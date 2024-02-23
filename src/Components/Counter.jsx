import { useState , useEffect } from "react"
import "../App.css";

const Counter = ()=>{

    const [counter , setCounter] = useState(0);

    useEffect(()=>{

        const intervalId = setInterval(()=>{
            setCounter(counter+1);
        },1000)
        
     return ()=>clearInterval(intervalId);

    },[counter]);

    return <div className="counter">
         Counter value which will update every second = {counter}
    </div>
}

export default Counter;