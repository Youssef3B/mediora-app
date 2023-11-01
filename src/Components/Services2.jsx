import React from "react";
import styles from "./Services2.module.css";
import { BiCodeCurly } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { LiaPhotoVideoSolid } from "react-icons/lia";

const services = [
  {
    icone: <BiCodeCurly size={54} color="#ef3a5d" />,
    title: "Web Development",
    description: "We have young creative members to build Websites.",
  },
  {
    icone: <MdOutlineDesignServices size={54} color="#ef3a5d" />,
    title: "Graphic Design",
    description: "Designing Dreams, Delivering Impact.",
  },
  {
    icone: <LiaPhotoVideoSolid size={54} color="#ef3a5d" />,
    title: "Video production",
    description: "Crafting Stories, Frame by Frame",
  },
];

export default function Services2({ newTheme }) {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.Services2}
    >
      <div className={styles.grid}>
        <div>
          <img
            className={styles.logo}
            src={
              newTheme === "light"
                ? "/images/experience2-light.png"
                : "/images/experience2-dark.png"
            }
            alt="logo"
            loading="lazy"
          ></img>
        </div>
        <div>
          <h3>we are very experience in digital services</h3>
          {services.map((service) => (
            <div className={styles.card}>
              <div>{service.icone}</div>
              <div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
