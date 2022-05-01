import React, { useContext, useState } from "react";
import { ListContext } from "../App";
import { v4 as uuidv4 } from "uuid";

const NameList = () => {
  const { nameList } = useContext(ListContext);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <input
        onChange={(event) => setSearchTerm(event.target.value)}
        type="text"
        placeholder="Search..."
      />
      {nameList && (
        <div>
          {nameList.map((name) => {
            if (searchTerm === "") {
              return <p key={uuidv4()}>{name}</p>;
            } else if (name.includes(searchTerm)) {
              return <p key={uuidv4()}>{name}</p>;
            }
          })}
        </div>
      )}
    </>
  );
};

export default NameList;
