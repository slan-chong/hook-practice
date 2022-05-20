import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "../App";

const AddName = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState([]);
  const { nameList, setNameList } = useContext(ListContext);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = () => {
    if (input) {
      setName([...nameList, input]);
      setInput("");
    }
  };
  useEffect(() => {
    setNameList(name);
  }, [name, setNameList]);
  return (
    <div className="p-2 ">
      <input
        className="px-4 py-3 border-2 border-gray-500 rounded"
        onChange={inputHandler}
        value={input}
        type="text"
        placeholder="Add Name..."
      />
      <button
        onClick={submitHandler}
        className="px-4 py-3 m-2 border-2 border-gray-500 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default AddName;
