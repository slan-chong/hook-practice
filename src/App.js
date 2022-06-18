import React from "react";
import LocalTime from "./components/LocalTime";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import HookAdvanced from "./Pages/HookAdvanced";
import ToHomePage from "./components/ToHomePage";
const App = () => {
  return (
    <div className="App bg-gray-300 text-center">
      <LocalTime />
      <ToHomePage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/HookAdvanced" element={<HookAdvanced />} />
      </Routes>
    </div>
  );
};

export default App;
