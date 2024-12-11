import { useState, useEffect } from "react";
import "./App.css";
import Clock from "./Components/Clock";

function useTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id); // Correctly clear the interval
  }, []);

  return time; // Return the `time` state
}

export default function App() {
  const time = useTime(); // Call the custom hook
  const [color, setColor] = useState("red");

  return (
    <div className="main-box">
      <p className="my-pick">
        Pick a color:{" "}
        <select className="my-slect"  value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
