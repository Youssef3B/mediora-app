import React from "react";
import styles from "./IconeDarkMode.module.css";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import useLocalStorage from "use-local-storage";

export default function IconeDarkMode({ switchTheme, newTheme }) {
  return (
    <>
      <div onClick={switchTheme} className={styles.icon}>
        <MdDarkMode size={22} />
      </div>
    </>
  );
}
