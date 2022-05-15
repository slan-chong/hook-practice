import React, { createContext, useState } from "react";
import AddName from "./components/AddName";
import NameList from "./components/NameList";
import LocalTime from "./components/LocalTime";
import FetchName from "./components/FetchName";
import "./App.scss";
// import Twich from "./components/Twich";

export const ListContext = createContext();
const App = () => {
  const [nameList, setNameList] = useState([]);
  return (
    <div className="App">
      <LocalTime />
      <ListContext.Provider value={{ nameList, setNameList }}>
        <AddName />
        <FetchName />
        <NameList />
      </ListContext.Provider>
      {/* <Twich /> */}
    </div>
  );
};

export default App;
