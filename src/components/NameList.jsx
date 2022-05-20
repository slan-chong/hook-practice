import React, { useContext, useState } from "react";
import { ListContext } from "../App";
import { v4 as uuidv4 } from "uuid";

const NameList = () => {
  const { nameList } = useContext(ListContext);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <input
        className="px-4 py-3 border-2 border-gray-500 rounded"
        onChange={(event) => setSearchTerm(event.target.value)}
        type="text"
        placeholder="Search..."
      />

      {nameList &&
        nameList.map((name) => {
          if (searchTerm === "") {
            return (
              <p className="p-2 " key={uuidv4()}>
                {name}
              </p>
            );
          } else if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return (
              <p className="p-2 " key={uuidv4()}>
                {name}
              </p>
            );
          }
          return null;
        })}
    </>
  );
};

export default NameList;
