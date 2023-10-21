import Button from "./Button";
import styles from "./ExperienceSection.module.css";
import { BsTrophy } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { FaStreetView } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Experiences = [
  {
    icone: <BsTrophy size={38} color="#ef3a5d" />,
    title: "Our professional agency",
    description:
      "With 5 years of experience, we're a digital agency focused on enhancing brand visibility, engaging audiences, and driving growth.",
  },
  {
    icone: <LuBrainCircuit size={38} color="#ef3a5d" />,
    title: "Our Creative Expertise",
    description:
      "We're a creative and a dedicated team, bringing innovation to your brand's online presence.",
  },
  {
    icone: <FaStreetView size={38} color="#ef3a5d" />,
    title: "Our customer service",
    description:
      "We offer exceptional digital solutions backed by outstanding support.",
  },
];
function ExperienceSection() {
  return (
    <section className={styles.ExperienceSection}>
      <div className={styles.grid}>
        <div
          className={styles.flex}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            className={styles.img1}
            src="/images/img-banner9.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            className={styles.img2}
            src="/images/img-banner10.png"
            alt=""
          />
        </div>
        <div>
          <h2 data-aos="fade-up" data-aos-duration="2000">
            5 Years Of Experience We Provide Solutions
          </h2>
          {Experiences.map((experience) => (
            <Exper experience={experience} key={experience.title} />
          ))}
          <div data-aos="fade-up" data-aos-duration="2000" className="">
            <NavLink to="/contact">
              <Button>Start a Project</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Exper({ experience }) {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className={styles.flex2}>
      <div className="mt-1">{experience.icone}</div>
      <div className={styles.right}>
        <h4>{experience.title}</h4>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}
export default ExperienceSection;
