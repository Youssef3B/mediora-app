import React from "react";
import styles from "./ButtonDash.module.css";

export default function ButtonDash({ children, color }) {
  const colorMap = {
    primary: "#ef3a5d",
    red: "#D80032",
    yellow: "#FFC436",
  };

  const btnStyles = {
    backgroundColor: colorMap[color] || colorMap.primary,
    color: "white",
    border: "none",
    padding: "16px 40px",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "15px",
    cursor: "pointer",
  };

  return (
    <button style={btnStyles} className={styles.btn}>
      {children}
    </button>
  );
}
