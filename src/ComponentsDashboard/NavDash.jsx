import React from "react";
import styles from "./NavDash.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { BsPersonWorkspace } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { ImPriceTag } from "react-icons/im";
import { AiOutlineTeam } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiLogoBlogger } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom"; // Import the useLocation hook

function NavDash() {
  const location = useLocation(); // Get the current location

  return (
    <nav className={styles.nav}>
      <div className={styles.up}>
        <img src="/images/logo.png" alt="" />
      </div>
      <div className={styles.profile}>
        <img src="/images/img-team6.png" alt="" />
        <h2>
          Hello, <span>Youssef</span>
        </h2>
        <p>3b.youssef@gmail.com</p>
      </div>
      <ul>
        <NavLink to={"/dashboard"}>
          <li
            className={location.pathname === "/dashboard" ? styles.active : ""}
          >
            <AiOutlineHome />
            <h5>Home</h5>
          </li>
        </NavLink>
        <NavLink to={"/dashboard/admin"}>
          <li
            className={
              location.pathname === "/dashboard/admin" ? styles.active : ""
            }
          >
            <FaUserTie color="white" />
            <h5>Admins</h5>
          </li>
        </NavLink>

        <NavLink to={"/dashboard/stats"}>
          <li
            className={
              location.pathname === "/dashboard/stats" ? styles.active : ""
            }
          >
            <ImStatsBars />
            <h5>Stats</h5>
          </li>
        </NavLink>

        <NavLink to={"/dashboard/portfolio"}>
          <li
            className={
              location.pathname === "/dashboard/portfolio" ? styles.active : ""
            }
          >
            <BsPersonWorkspace />
            <h5>Portfolio</h5>
          </li>
        </NavLink>

        <NavLink to={"/dashboard/reviews"}>
          <li
            className={
              location.pathname === "/dashboard/reviews" ? styles.active : ""
            }
          >
            <ImUsers />
            <h5>Reviews</h5>
          </li>
        </NavLink>

        <NavLink to={"/dashboard/prices"}>
          <li
            className={
              location.pathname === "/dashboard/prices" ? styles.active : ""
            }
          >
            <ImPriceTag />
            <h5>Prices</h5>
          </li>
        </NavLink>
        <NavLink to={"/dashboard/team"}>
          <li
            className={
              location.pathname === "/dashboard/team" ? styles.active : ""
            }
          >
            <AiOutlineTeam />
            <h5>Team</h5>
          </li>
        </NavLink>

        <NavLink to={"/dashboard/services"}>
          <li
            className={
              location.pathname === "/dashboard/services" ? styles.active : ""
            }
          >
            <RiServiceLine />
            <h5>Services</h5>
          </li>
        </NavLink>

        <NavLink to={"/dashboard/blog"}>
          <li
            className={
              location.pathname === "/dashboard/blog" ? styles.active : ""
            }
          >
            <BiLogoBlogger />
            <h5>Blog</h5>
          </li>
        </NavLink>
      </ul>
      <h6>Copyright @2023 Mediora All Right Reserve.</h6>
    </nav>
  );
}

export default NavDash;
