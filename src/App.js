import React from "react";
import LocalTime from "./components/LocalTime";
import { Routes, Route } from "react-router-dom";
import ToHomePage from "./components/ToHomePage";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import HookAdvanced from "./Pages/HookAdvanced";
import UseMemo from "./Pages/UseMemo";
import SocketIO from "./Pages/SocketIO";
const App = () => {
  return (
    <div className="App bg-gray-300 text-center">
      <LocalTime />
      <ToHomePage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/HookAdvanced" element={<HookAdvanced />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/SocketIO" element={<SocketIO />} />
      </Routes>
    </div>
  );
};

export default App;
