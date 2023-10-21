import React from "react";
import styles from "./Ready3.module.css";
import Button from "./Button";
import { CgEditBlackPoint } from "react-icons/cg";
import { NavLink } from "react-router-dom";
export default function Ready3({ newTheme }) {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.Ready3}
    >
      <div className={styles.grid}>
        <div>
          <h3>Ready to get our professional Digital services solution ?</h3>
          <h5>5 Years of experience we provide digital services</h5>
          <div className={styles.flex}>
            <CgEditBlackPoint size={22} color="#ef3a5d" />
            <p>Get Every Single Updates</p>
          </div>
          <NavLink to="/contact">
            <Button>Let's Talk digital Expertise</Button>
          </NavLink>
        </div>
        <div>
          <img
            className={styles.logo}
            src={
              newTheme === "light"
                ? "/images/faq-darkmode.png"
                : "/images/test6.png"
            }
            alt="logo"
          ></img>{" "}
        </div>
      </div>
    </section>
  );
}
