import React, { useState } from "react";

const AddName = () => {
  const [input, setInput] = useState();
  const [name, setName] = useState();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = () => {
    if (input) {
      setName([...name, input]);
      setInput("");
    }
  };
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
