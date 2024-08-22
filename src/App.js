import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import TextInput from './components/TextInput';
import Graphic from './components/Graphic';

function App() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [inputNum, setInputNum] = useState(0);

  useEffect(() => {
    timer();
  }, []);

  const timer = () => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);  
    return () => clearInterval(interval);
  };

  const handleStart = () => {
    timer();
  };

  const handleEnd = () => {
    setTimeRemaining(0);
  };  

  const handleSeconds = () => {
    setTimeRemaining(inputNum);
  };

  const handleMinutes = () => {
    setTimeRemaining(inputNum * 60);
  };

  const handleHours = () => {
    setTimeRemaining(inputNum * 3600);
  };

  const data = [
    { start: "Timer", time: inputNum }
  ];

  return (
    <div className="App">
      <h1>Timer: {timeRemaining} seconds left</h1>
      <TextInput value={inputNum} onChange={e => setInputNum(e.target.value)} />
      <Button label="SECONDS" onClick={handleSeconds}/>
      <Button label="MINUTES" onClick={handleMinutes}/>
      <Button label="HOURS" onClick={handleHours}/>
      <br></br>
      <Button label="START" onClick={handleStart}/>
      <Button label="END" onClick={handleEnd} />
      <Graphic width={250} height={100} data={data} />
    </div>
  )
};

export default App;