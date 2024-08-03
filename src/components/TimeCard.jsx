import React from "react";

const formatTime = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  hours = hours % 12 || 12; // Convert to 12-hour format
  hours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${formattedMinutes}`;
};

const TimeCard = () => {
  const time = formatTime(new Date());
  return (
    <section className="time-card">
      <h2>{time}</h2>
    </section>
  );
};

export default TimeCard;
