import React, { useEffect, useState } from "react";

const LocalTime = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return <div>{time}</div>;
};

export default LocalTime;
