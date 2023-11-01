import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import NavBar from "../Components/NavBar";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Form from "../Components/Form";
import Ready3 from "../Components/Ready3";
import Footer from "../Components/Footer";
import useLocalStorage from "use-local-storage";
import Aos from "aos";
import "aos/dist/aos.css";
import IconeDarkMode from "../Components/IconeDarkMode";
import Up from "../Components/Up";

const contact = [
  {
    name: "Address",
    desc: `Josefine Center, Bd Allal Al Fassi Etage 1 Bureau 6, Marrakech`,
    icone: <FiMapPin size={40} color="#ef3a5d" />,
  },
  {
    name: "Email Us",
    icone: <AiOutlineMail size={40} color="#ef3a5d" />,
    email1: "medioragroup@gmail.com",
    email2: "www.MedioraAgency.nom",
  },
  {
    name: "Phone",
    phone1: "+212 5 25 18 97 18",
    phone2: "+212 6 45 95 03 97",
    icone: <BsTelephone size={40} color="#ef3a5d" />,
  },
];
export default function Contact() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    Aos.init({
      offset: 200, // Trigger animations when the element is 200 pixels from the viewport
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <main className="body" data-theme={theme}>
      <IconeDarkMode switchTheme={switchTheme} newTheme={theme} />
      <Up />

      <NavBar switchTheme={switchTheme} newTheme={theme} />
      <section className={styles.contact}>
        <Con1 newTheme={theme} />
      </section>
      <Form switchTheme={switchTheme} newTheme={theme} />
      <Ready3 />
      <Footer />
    </main>
  );
}

function Card({ c }) {
  return (
    <div className={styles.flex}>
      {c.icone}
      <div className={styles.right}>
        <h5>{c.name}</h5>
        {c.desc && <p>{c.desc}</p>}
        {c.email1 && <p>{c.email1}</p>}
        {c.email2 && <p>{c.email2}</p>}
        {c.phone1 && <p>{c.phone1}</p>}
        {c.phone2 && <p>{c.phone2}</p>}
      </div>
    </div>
  );
}

function Con1({ newTheme }) {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className={styles.grid}>
      <div>
        <h2>Enhance Your Digital Impact. Let's Collaborate!</h2>
        <div className={styles.card}>
          {contact.map((c) => (
            <Card c={c} key={c.name} />
          ))}
        </div>
      </div>
      <div>
        <img
          className={styles.logo}
          src={
            newTheme === "light"
              ? "/images/contact-dark.png"
              : "/images/contact-light.png"
          }
          alt="logo"
        ></img>{" "}
      </div>
    </div>
  );
}
