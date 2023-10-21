import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

export default function Logo({ newTheme }) {
  return (
    <div>
      <Link to="/">
        <img
          className={styles.logo}
          src={
            newTheme === "light"
              ? "/images/logo.png"
              : "/images/logo-mediora-black.png"
          }
          alt="logo"
        ></img>
      </Link>
    </div>
  );
}
