import { NavLink } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

export default function NavBar({ switchTheme, newTheme }) {
  const [isOn, setIsOn] = useLocalStorage(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const toggleThemeAndSwitch = () => {
    switchTheme(); // Toggle the theme
    toggleSwitch(); // Toggle the switch
  };
  const modeText = isOn ? "Dark Mode" : "Light Mode";

  return (
    <nav className={styles.nav}>
      <Logo newTheme={newTheme} />
      <ul className={styles.menu}>
        <li>
          <NavLink to="/" activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={styles.active}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName={styles.active}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={styles.active}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div
        className={`toggle-switch ${isOn ? "on" : "off"}`}
        onClick={toggleThemeAndSwitch}
      >
        <div className={`slider ${isOn ? "on" : "off"}`} />
      </div>

      <NavLink to="/contact">
        <Button>Contact</Button>
      </NavLink>
    </nav>
  );
}
