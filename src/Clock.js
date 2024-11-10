import React, { useEffect, useRef } from "react";
import "./Clock.css";

const Clock = () => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondDegree = (seconds / 60) * 360;
      const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
      const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30;

      if (secondRef.current)
        secondRef.current.style.transform = `rotate(${secondDegree}deg)`;
      if (minuteRef.current)
        minuteRef.current.style.transform = `rotate(${minuteDegree}deg)`;
      if (hourRef.current)
        hourRef.current.style.transform = `rotate(${hourDegree}deg)`;
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <div className="clock-face">
        <div ref={hourRef} className="hand hour-hand"></div>
        <div ref={minuteRef} className="hand minute-hand"></div>
        <div ref={secondRef} className="hand second-hand"></div>
      </div>
      <div className="brand-name">Sophie&Dodo</div> {/* Add the brand name */}
    </div>
  );
};

export default Clock;
