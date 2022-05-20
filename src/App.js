import React, { createContext, useState } from "react";
import AddName from "./components/AddName";
import NameList from "./components/NameList";
import LocalTime from "./components/LocalTime";
import FetchName from "./components/FetchName";

export const ListContext = createContext();
const App = () => {
  const [nameList, setNameList] = useState([]);
  return (
    <div className="App bg-gray-300 text-center">
      <LocalTime />
      <ListContext.Provider value={{ nameList, setNameList }}>
        <AddName />
        <FetchName />
        <NameList />
      </ListContext.Provider>
    </div>
  );
};

export default App;
