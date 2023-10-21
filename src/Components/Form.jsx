import React from "react";
import styles from "./Form.module.css";
import Button from "./Button";

export default function Form({ newTheme }) {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.form}
    >
      <form action="">
        <div className={styles.flex}>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="tel" placeholder="Your Phone Number"></input>
        </div>
        <input type="text" placeholder="Subject"></input>
        <textarea placeholder="Message"></textarea>
        <Button>Send Message</Button>
      </form>
    </section>
  );
}
