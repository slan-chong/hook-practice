import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex justify-center ">
      <NavLink to="/Search">
        <div className="p-2 m-2 bg-stone-400 rounded-full">
          Search Name List
        </div>
      </NavLink>
      <NavLink to="/HookAdvanced">
        <div className="p-2 m-2 bg-stone-400 rounded-full">Hook Advanced</div>
      </NavLink>
    </div>
  );
};

export default Home;
