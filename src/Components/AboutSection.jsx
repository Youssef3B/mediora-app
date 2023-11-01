import React from "react";
import styles from "./AboutSection.module.css";
import { BsTrophy } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { FaStreetView } from "react-icons/fa";
import Button from "./Button";
import { NavLink } from "react-router-dom";
const Experiences = [
  {
    icone: <BsTrophy size={32} color="#ef3a5d" />,
    title: "Our professional agency",
    description:
      "With 5 years of experience, we're a digital agency focused on enhancing brand visibility, engaging audiences, and driving growth.",
  },
  {
    icone: <LuBrainCircuit size={32} color="#ef3a5d" />,
    title: "Our Creative Expertise",
    description:
      "We're a creative and a dedicated team, bringing innovation to your brand's online presence.",
  },
  {
    icone: <FaStreetView size={32} color="#ef3a5d" />,
    title: "Our customer service",
    description:
      "We offer exceptional digital solutions backed by outstanding support.",
  },
];
export default function AboutSection({ newTheme }) {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.AboutSection}
    >
      <div className={styles.grid}>
        <div>
          <h2>5 Years Of Experience We Provide Solutions</h2>
          <p>
            Whether you're looking to test out a product's potential online,or
            move product off the retail shelf, We got you covered!
          </p>
          {Experiences.map((experience) => (
            <Exper experience={experience} key={experience.title} />
          ))}
          <div className="">
            <NavLink to="/contact">
              <Button>Start a Project</Button>
            </NavLink>
          </div>
        </div>
        <div>
          <img
            className={styles.logo}
            src={
              newTheme === "light"
                ? "/images/about-darkmode.png"
                : "/images/about-lightmode.png"
            }
            alt="logo"
            loading="lazy"
          ></img>{" "}
        </div>
      </div>
    </section>
  );
}

function Exper({ experience }) {
  return (
    <div className={styles.flex2}>
      <div className="mt-1">{experience.icone}</div>
      <div className={styles.right}>
        <h4>{experience.title}</h4>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}
