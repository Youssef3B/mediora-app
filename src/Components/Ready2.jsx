import React from "react";
import styles from "./Ready2.module.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
export default function Ready2() {
  return (
    <section className={styles.Ready2}>
      <div data-aos="fade-up" data-aos-duration="2000" className={styles.grid}>
        <div>
          <h3>
            Are You Ready To Work <span>Together?</span>
          </h3>
        </div>
        <div>
          <NavLink to="/contact">
            <Button>Lets Talk digital Expertise</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
