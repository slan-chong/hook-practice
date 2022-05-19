import React, { useEffect, useState } from "react";

const LocalTime = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return <div className="text-3xl font-bold underline">{time}</div>;
};

export default LocalTime;
