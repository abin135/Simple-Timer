import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import TextInput from './components/TextInput';
import StartButton from './components/StartButton.js';
import EndButton from './components/EndButton.js';
import TimeGraph from './components/TimeGraph.js';

function App() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [inputNum, setInputNum] = useState(0);
  const [initialTime, setInitialTime] = useState(0);

  useEffect(() => {
    timer();
  }, []);

  const timer = () => {
    setTimeRemaining(initialTime);
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          return 0;
        } else {
          return (prevTime - 1);
        }
      });
    }, 1000);  
    return () => clearInterval(interval);
  };

  const handleEnd = () => {
    setTimeRemaining(0);
  };  

  const handleSeconds = () => {
    setInitialTime(inputNum);
  };

  const handleMinutes = () => {
    setInitialTime(inputNum * 60);
  };

  const handleHours = () => {
    setInitialTime(inputNum * 3600);
  };
  
  return (
    <div className="App">
      <h1>Timer: {timeRemaining} seconds left</h1>
      <TextInput value={inputNum} onChange={e => setInputNum(e.target.value)} />
      <Button label="SECONDS" onClick={handleSeconds}/>
      <Button label="MINUTES" onClick={handleMinutes}/>
      <Button label="HOURS" onClick={handleHours}/>
      <br></br>
      <StartButton onClick={timer} />
      <EndButton onClick={handleEnd} />
      <TimeGraph />
    </div>
  )
};

export default App;