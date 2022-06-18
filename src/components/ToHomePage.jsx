import React from "react";
import { NavLink } from "react-router-dom";
const ToHomePage = () => {
  return (
    <>
      <NavLink to="/">
        <div className="absolute top-4 right-8 text-xl text-skin-base cursor-pointer flex items-center justify-center bg-skin-button-day rounded-full p-3 hover:bg-skin-button-day-hover hover:text-blue-400 ">
          HomePage
        </div>
      </NavLink>
    </>
  );
};

export default ToHomePage;
