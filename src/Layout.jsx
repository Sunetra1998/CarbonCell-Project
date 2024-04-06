import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Layout;
