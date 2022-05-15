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
    <div>
      <input
        onChange={inputHandler}
        value={input}
        type="text"
        placeholder="Add Name..."
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default AddName;
