import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { BiDoorOpen } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import styles from "./NavDashUp.module.css";
import { NavLink, useLocation } from "react-router-dom"; // Import the useLocation hook

function NavDashUp() {
  const location = useLocation(); // Get the current location

  return (
    <nav className={styles.nav}>
      <div>
        <input
          className={styles.search}
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className={styles.actions}>
        <NavLink to={"/dashboard/profile"}>
          <div
            className={
              location.pathname === "/dashboard/profile"
                ? styles.active
                : styles.bg
            }
          >
            <AiOutlineUser />
          </div>
        </NavLink>
        <NavLink to={"/dashboard/messages"}>
          <div
            className={
              location.pathname === "/dashboard/messages"
                ? styles.active
                : styles.bg
            }
          >
            <AiOutlineMessage />
          </div>
        </NavLink>

        <NavLink to={"/dashboard/setting"}>
          <div
            className={
              location.pathname === "/dashboard/setting"
                ? styles.active
                : styles.bg
            }
          >
            <AiOutlineSetting />
          </div>
        </NavLink>
        <NavLink to="/login">
          <div className={styles.bg}>
            <BiDoorOpen />
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavDashUp;
