import React, { createContext, useState } from "react";
import AddName from "./components/AddName";

export const ListContext = createContext();
const App = () => {
  const [nameList, setNameList] = useState();
  return (
    <div className="App">
      <ListContext.Provider>
        <AddName />
      </ListContext.Provider>
    </div>
  );
};

export default App;
