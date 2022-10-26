import React, { useEffect, useState } from "react";
import clockCSS from "./clock.module.css";

export const days = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
const Number = ({ value = 0 }) => {
  const result = String(value).padStart(2, "0");
  return (
    <div className={clockCSS.digital}>
      <p>{result}</p>
    </div>
  );
};
export const Word = ({ value, hidden = false }) => {
  const getStyle = () => {
    return {
      visibility: hidden ? "hidden" : "visible",
    };
  };
  return (
    <div className={clockCSS.digital}>
      <p>{value}</p>
      <p style={getStyle()}>{value}</p>
    </div>
  );
};
export const Clock = ({ h24 = true }) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [day, setDay] = useState(0);
  const [pm, setPm] = useState(false);
  useEffect(() => {
    const update = () => {
      const date = new Date();
      let hour = date.getHours();
      if (!h24) {
        hour = hour % 12 || 12;
      }
      setHour(hour);
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
      setDay(date.getDay());
      setPm(date.getHours() >= 12);
    };
    update();
    const interval = setInterval(() => {
      update();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={clockCSS.body}>
      <div className={clockCSS.clock}>
        <div className={clockCSS.calendar}>
          {days.map((value, index) => (
            <Word key={value} value={value} hidden={index !== day} />
          ))}
        </div>
        <div className={clockCSS.row}>
          <div className={clockCSS.hour}>
            <Number value={hour} />
            <Word value={":"} />
            <Number value={minute} />
            <Word value={":"} />
            <Number value={second} />
          </div>
          <div className={clockCSS.ampm}>
            <Word value={`AM`} hidden={pm} />
            {` `}
            <Word value={`PM`} hidden={!pm} />
          </div>
        </div>
      </div>
    </div>
  );
};
