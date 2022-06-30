import React, { useState, useEffect, useRef, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  const prevNumber = useRef(number);
  const theme = useMemo(() => {
    return (themeStyle) => {
      return themeStyle
        ? "text-zinc-400 bg-stone-800"
        : "text-stone-800 bg-zinc-400";
    };
  }, []);
  useEffect(() => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log("theme change");
  }, [dark]);
  useEffect(() => {
    prevNumber.current = number;
    console.log("number change");
  }, [number]);
  useEffect(() => {
    console.log("prevNumber change");
  }, [prevNumber]);
  return (
    <div
      className="flex min-h-screen items-center
    justify-center"
    >
      <div className={`text-lg p-2 max-w-fit rounded-2xl ` + theme(dark)}>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          className="text-black"
        />
        <button
          className={`m-2 p-2 text-lg rounded ` + theme(!dark)}
          onClick={() => setDark((D) => !D)}
        >
          Change Theme
        </button>
        <div>
          <div>current:{number}</div>
          <div>prev:{prevNumber.current}</div>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
