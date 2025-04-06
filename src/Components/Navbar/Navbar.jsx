import Style from "./Navbar.module.css";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className={Style.Navbar_main}>
      <div className={Style.nav_left}>
        <p className={Style.navbar_p}>Ready Dashboard</p>
        <input className={Style.nav_input} placeholder="Search..."></input>
      </div>
      <div className={Style.nav_right}>
        <MdOutlineMarkEmailUnread
          className={Style.nav_tags}
        ></MdOutlineMarkEmailUnread>
        <MdOutlineNotificationsActive
          className={Style.nav_tags}
        ></MdOutlineNotificationsActive>
        <FaCircleUser className={Style.nav_tags}></FaCircleUser>
        <p className={Style.nav_name}>Anubhav</p>
      </div>
    </div>
  );
};

export default Navbar;
