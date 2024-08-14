import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    // <div className="grid grid-flow-col bg-black h-[90vh] border-2 border-white ">
    <div className="grid grid-flow-col  border-2 border-red-900 ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
