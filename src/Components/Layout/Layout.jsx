import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className={style.main_container}>
        <div className={style.sidebar}>
          <Sidebar />
        </div>
        <div className={style.dashboard}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
