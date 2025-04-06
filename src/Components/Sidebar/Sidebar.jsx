import { Link } from "react-router-dom";
import style from "./sidebar.module.css";
import { RiDashboard3Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    // style={{ width: "200px", padding: "10px" }}
    <div className={style.box}>
      <div className={style.side_content}>
        <Link className={style.sidebarLinks} to="/">
          <RiDashboard3Line className={style.side_image}></RiDashboard3Line>
          Dashboard
        </Link>
      </div>
      <div className={style.side_content}>
        <Link className={style.sidebarLinks} to="/profile">
          <CgProfile className={style.side_image}></CgProfile>
          Profile
        </Link>
      </div>
      <div className={style.side_content}>
        <Link className={style.sidebarLinks} to="/settings">
          <IoSettingsSharp className={style.side_image}></IoSettingsSharp>
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
