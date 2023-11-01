import React, { useEffect } from "react";
import styles from "./ServicesSection.module.css";

const id = crypto.randomUUID();
const Services = [
  {
    id,
    image: "/images/web design.png",
    title: "Web Design and Development",
    description:
      "Creating and developing custom websites, ensuring they are responsive, user-friendly, and visually appealing.",
  },
  {
    id,
    image: "/images/Graphic design.png",
    title: "Graphic Design",
    description:
      "Designing logos, branding materials, banners, social media graphics, and other visual assets.",
  },
  {
    id,
    image: "/images/Video Production.png",
    title: "Video Production",
    description:
      "Producing promotional videos, explainer videos, animations, and other multimedia content.",
  },
  {
    id,
    image: "/images/UI UX DESIGN.png",
    title: "UI/UX Design",
    description:
      "Designing user interfaces and user experiences for websites and apps to ensure optimal usability and satisfaction.",
  },
  {
    id,
    image: "/images/Social media.png",
    title: "Social Media Marketing",
    description:
      "Developing and executing strategies to engage and grow audiences across various social media platforms.",
  },
  {
    id,
    image: "/images/content-creation.png",
    title: "Content Creation",
    description:
      "Producing high-quality written, visual, and video content for websites, blogs, social media, and marketing campaigns.",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.ServicesSection}>
      <h2 data-aos="fade-up" data-aos-duration="1000">
        Services We Provide
      </h2>
      <div className={styles.grid}>
        {Services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className={styles.card}>
      <div>
        <img src={service.image} alt="service1"></img>
      </div>
      <div>
        <h4>{service.title}</h4>
        <p>{service.description}</p>
        <h6>Read More</h6>
      </div>
    </div>
  );
}
