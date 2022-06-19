import React, { useRef, useState, useEffect } from "react";

const LOCAL_KEY = "name.list";

const HookAdvanced = () => {
  const nameInput = useRef("");
  const [name, setName] = useState([]);
  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (storedName) setName(storedName);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(name));
  }, [name]);
  return (
    <div className="m-4">
      <input
        type="text"
        ref={nameInput}
        placeholder="Enter your name..."
        className="bg-inherit border-2 border-sky-500 m-2 p-2"
      />
      <button
        onClick={() => {
          setName([nameInput.current.value, ...name]);
          nameInput.current.value = "";
        }}
      >
        Submit
      </button>
      <div
        className="border-2 border-sky-500 m-2 p-2 inline-block"
        onClick={() => {
          setName([]);
        }}
      >
        Clean Name
      </div>

      {name.map((n, index) => {
        return <div key={index}>{n}</div>;
      })}
    </div>
  );
};

export default HookAdvanced;
