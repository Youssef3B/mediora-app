import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
function Footer({ newTheme }) {
  return (
    <footer className={styles.Footer}>
      <div data-aos="fade-up" data-aos-duration="2000" className={styles.grid}>
        <ul>
          <li>
            <h3>Contact Us</h3>
          </li>
          <li>
            <h5>Phone Number</h5>
          </li>
          <li>
            <h6>+212 5 25 18 97 18</h6>
          </li>
          <li>
            <h6>+212 6 45 95 03 97</h6>
          </li>
          <li>
            <p>
              Josefine Center, Bd Allal Al Fassi Etage 1 Bureau 6, Marrakech
            </p>
          </li>
          <li>
            <p>medioragroup@gmail.com</p>
          </li>
          <li>
            <img
              className={styles.logo}
              src={
                newTheme === "light"
                  ? "/images/logo.png"
                  : "/images/logo-mediora-black.png"
              }
              alt="logo"
            ></img>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Quick Link</h3>
          </li>
          <li className={styles.link}>
            <a href="">Web Design and Development</a>
          </li>
          <li className={styles.link}>
            <a href="">Graphic Design</a>
          </li>
          <li className={styles.link}>
            <a href="">Video Production</a>
          </li>
          <li className={styles.link}>
            <a href="">UI/UX Design</a>
          </li>
          <li className={styles.link}>
            <a href="">Social Media Marketing</a>
          </li>
          <li className={styles.link}>
            <a href="">Content Creation</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Suppots</h3>
          </li>
          <li className={styles.link}>
            <a href="">Home</a>
          </li>
          <li className={styles.link}>
            <a href="">About Us</a>
          </li>
          <li className={styles.link}>
            <a href="">Services</a>
          </li>
          <li className={styles.link}>
            <a href="">Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Newletters</h3>
          </li>
          <li>
            <p>
              A digital agency specializes in creating and managing online
              strategies to enhance brand visibility, engage audiences, and
              drive business growth.
            </p>
          </li>
          <div className={styles.flx}>
            <a href="" className="ml-3">
              <FaFacebookF size={20} />
            </a>
            <a href="" className="ml-3">
              <BsTwitter size={20} />
            </a>
            <a href="" className="ml-3">
              <BsInstagram size={20} />
            </a>
            <a href="" className="ml-3">
              <FaLinkedinIn size={20} />
            </a>
            <a href="" className="ml-3">
              <FaTiktok size={20} />
            </a>
          </div>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
