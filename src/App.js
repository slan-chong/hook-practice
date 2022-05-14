import React, { createContext, useState } from "react";
import AddName from "./components/AddName";
import NameList from "./components/NameList";
import LocalTime from "./components/LocalTime";
import "./App.scss";

const ListContext = createContext();
const App = () => {
  const [nameList, setNameList] = useState([]);
  return (
    <div className="App">
      <LocalTime />
      <ListContext.Provider value={{ nameList, setNameList }}>
        <AddName />
        <NameList />
      </ListContext.Provider>
    </div>
  );
};

export default App;
