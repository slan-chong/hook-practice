import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  {
    link: "/Search",
    btnName: "Search Name List",
  },
  {
    link: "/HookAdvanced",
    btnName: "Hook Advanced",
  },
  {
    link: "/useMemo",
    btnName: "useMemo",
  },
];
const Home = () => {
  return (
    <div className="flex justify-center ">
      {nav.map((n) => {
        return (
          <React.Fragment key={n.link}>
            <NavLink to={n.link}>
              <div className="p-2 m-2 bg-stone-400 rounded-full">
                {n.btnName}
              </div>
            </NavLink>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Home;
