import React, { createContext, useState } from "react";
import AddName from "../components/AddName";
import NameList from "../components/NameList";
import FetchName from "../components/FetchName";
export const ListContext = createContext();
const Search = () => {
  const [nameList, setNameList] = useState([]);
  return (
    <>
      <ListContext.Provider value={{ nameList, setNameList }}>
        <AddName />
        <FetchName />
        <NameList />
      </ListContext.Provider>
    </>
  );
};

export default Search;
