import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("00:00.00");

  const intervalRef = useRef();
  const elapsedTimeRef = useRef(0);
  const isPausedRef = useRef(false);

  const startStopwatch = () => {
    clearInterval(intervalRef.current);

    if (isPausedRef.current) {
      isPausedRef.current = false;
    }

    let startTime = Date.now();
    if (elapsedTimeRef.current != 0) {
      startTime -= elapsedTimeRef.current;
    }
    intervalRef.current = setInterval(() => {
      let elapsedTime = Date.now() - startTime;
      elapsedTimeRef.current = elapsedTime;

      let minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
      let seconds = Math.floor((elapsedTime / 1000) % 60);
      let milliseconds = Math.floor((elapsedTime % 1000) / 10);
      setTime(
        `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`
      );
    });
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime("00:00.00");
  };

  const pauseStopwatch = () => {
    isPausedRef.current = true;
    clearInterval(intervalRef.current);
    console.log(elapsedTimeRef.current);
  };

  return (
    <>
      <div className="flex flex-col gap-20">
        <div>
          <p className="text-9xl text-center">{time}</p>
        </div>
        <div className="flex justify-center gap-10 text-4xl">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded"
            onClick={startStopwatch}
          >
            Start
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded"
            onClick={pauseStopwatch}
          >
            Stop
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            onClick={resetStopwatch}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
