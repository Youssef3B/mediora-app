import { NavLink } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { MdDarkMode } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar({ switchTheme, newTheme }) {
  const [isOppen, setIsoppen] = useState(false);
  function handleOppen() {
    setIsoppen(() => !isOppen);
  }
  console.log(isOppen);

  return (
    <nav className={styles.nav}>
      <Logo newTheme={newTheme} />
      <ul
        style={isOppen === true ? { display: "flex", right: 0 } : {}}
        className={styles.menu}
      >
        <li onClick={handleOppen} className={styles.close}>
          <AiOutlineClose size={42} />
        </li>
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

      {/* <div
        className={`toggle-switch ${isOn ? "on" : "off"}`}
        onClick={toggleThemeAndSwitch}
      >
        <div className={`slider ${isOn ? "on" : "off"}`} />
      </div> */}

      <div className={styles.btn}>
        <NavLink to="/contact">
          <Button>Let's Talk</Button>
        </NavLink>
      </div>
      <div onClick={handleOppen} className={styles.res}>
        <li>
          <HiMenu size={32} />
        </li>
      </div>
    </nav>
  );
}
