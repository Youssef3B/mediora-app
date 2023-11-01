import React from "react";
import styles from "./ServicesCard.module.css";
import ButtonDash from "./ButtonDash";

function ServicesCard() {
  return (
    <div className={styles.grid}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ServicesCard;

function Card() {
  return (
    <div className={styles.card}>
      <img src="/images/email.png"></img>
      <h3>Marketing</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vero.
      </p>
      <div className={styles.flex}>
        <div className={styles.left}>
          <ButtonDash color="yellow">Edit</ButtonDash>
        </div>
        <div className={styles.left}>
          <ButtonDash>Delete</ButtonDash>
        </div>
      </div>
    </div>
  );
}
