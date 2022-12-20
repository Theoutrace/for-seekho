import "./App.css";
import TestPage from "./pages/TestPage";
import { useState } from "react";
import test from './images/test.png'

function App() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0)
  const [timerId, setTimerId] = useState(0)

  // console.log(new Date().setHours(new Date().getHours()));

  const startTesthandler = () => {
    setStart(true);
    setTime(100)

    const id = setInterval(()=>{
      setTime(prev=>prev-1)
    },1000)
    setTimerId(id)
  };

  return (
    <div className="App">
      {start ? (
        <TestPage time={time} timerId = {timerId}/>
      ) : (
        <div className="start-test-cntnr">
          <div><img src={test} alt=''/></div>
          <p>Remember, once you start the test, you will <span style={{color:'red'}}>not be able</span> to stop or pause it.</p>
          <button onClick={startTesthandler}>Start the test</button>
        </div>
      )}
    </div>
  );
}

export default App;
