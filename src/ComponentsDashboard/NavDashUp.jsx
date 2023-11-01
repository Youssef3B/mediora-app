import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { BiDoorOpen } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import styles from "./NavDashUp.module.css";

function NavDashUp() {
  return (
    <nav className={styles.nav}>
      <div>
        <input type="text" placeholder="Search"></input>
      </div>
      <div className={styles.actions}>
        <div className={styles.bg}>
          <AiOutlineUser />
        </div>
        <div className={styles.bg}>
          <AiOutlineMessage />
        </div>
        <div className={styles.bg}>
          <AiOutlineSetting />
        </div>
        <div className={styles.bg}>
          <BiDoorOpen />
        </div>
      </div>
    </nav>
  );
}

export default NavDashUp;
