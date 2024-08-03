import React, { useState, useEffect } from "react";

const formatTime = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  hours = hours % 12 || 12; // Convert to 12-hour format
  hours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${formattedMinutes}`;
};


const TimeCard = () => {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="time-card">
      <h2>{time}</h2>
    </section>
  );
};

export default TimeCard;