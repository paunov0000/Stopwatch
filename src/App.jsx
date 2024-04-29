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
    elapsedTimeRef.current = 0;
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
          <p className="bg-clip-text text-9xl text-center bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 text-transparent">
            {time}
          </p>
        </div>
        <div className="flex justify-center gap-10 text-4xl">
          <button
            className="transition ease-in-out duration-400 bg-transparent text-green-500 border-green-500 border-2 hover:bg-green-500 hover:text-neutral-100 hover:border-green-500 font-bold py-1 px-6 rounded"
            onClick={startStopwatch}
          >
            Start
          </button>
          <button
            className="transition ease-in-out duration-400 bg-transparent text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-neutral-100 hover:border-blue-500 font-bold py-1 px-6 rounded"
            onClick={pauseStopwatch}
          >
            Pause
          </button>
          <button
            className="transition ease-in-out duration-400 bg-transparent text-red-500 border-red-500 border-2 hover:bg-red-500 hover:text-neutral-100 hover:border-red-500 font-bold py-1 px-6 rounded"
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
