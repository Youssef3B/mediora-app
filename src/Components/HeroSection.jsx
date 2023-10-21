import React, { useEffect } from "react";
import styles from "./HeroSection.module.css";
import Button from "./Button";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

export default function HeroSection({ newTheme }) {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.heroSection2}
    >
      <h1>
        Digital solutions for Empowering Your <span>Digital Journey</span>
      </h1>
      <p>
        A digital agency specializes in creating and managing online strategies
        to enhance brand visibility, engage audiences, and drive business
        growth.
      </p>
      <NavLink to="/contact">
        <Button>Get Started With Us</Button>
      </NavLink>
      <img
        className={styles.imageHome}
        src={
          newTheme === "light"
            ? "/images/home-dark.png"
            : "/images/home-light.png"
        }
      ></img>
    </section>
  );
}
