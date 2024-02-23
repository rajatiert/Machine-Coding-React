import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import DataProvider, { DataContext } from './Contex/DataProvider';
import TrafficLight from './Components/TrafficLight';
import Counter from './Components/Counter';
import StopWatch from './Components/StopWatchOrg';
import ProgressBar from './Components/ProgresBar';
import { BrowserRouter } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';

function App() {
  const { name } = useContext(DataContext);
  const [value, setValue] = useState(0);

  useEffect(() => {

    if (value < 100) {
      const timer = setInterval(() => {
        setValue((prev) => prev + 10);
      }, 1000)

      return () => clearInterval(timer);
    }
  }, [value])


  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <h1>My React App</h1>
          <h3>My name through context api  : {name}</h3>
          <TrafficLight />
          <Counter />
          <StopWatch />
          <ProgressBar value={value} />
        </div>
        <Routes>
            <Route path="/traffic" element={<TrafficLight/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
