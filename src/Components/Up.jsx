import React from "react";
import styles from "./Up.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Up() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.up} onClick={scrollToTop}>
      <AiOutlineArrowUp />
    </div>
  );
}
