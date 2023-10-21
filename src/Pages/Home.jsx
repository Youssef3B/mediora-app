import React from "react";
import NavBar from "../Components/NavBar";
import styles from "./Home.module.css";
import HeroSection from "../Components/HeroSection";
import ServicesSection from "../Components/ServicesSection";
import ExperienceSection from "../Components/ExperienceSection";
import CountSection from "../Components/CountSection";
import ReadySection from "../Components/ReadySection";
import ClientsSection from "../Components/ClientsSection";
import FaqSection from "../Components/FaqSection";
import Ready2 from "../Components/Ready2";
import Footer from "../Components/Footer";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [theme, setTheme] = useLocalStorage("theme", "dark"); // Corrected useLocalStorage call

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
      <section className={styles.home}>
        <NavBar switchTheme={switchTheme} newTheme={theme} />
        {/* Pass 'theme' as a prop */}
        <HeroSection switchTheme={switchTheme} newTheme={theme} />
        <ServicesSection />
        <ExperienceSection />
        <CountSection />
        <ReadySection />
        <ClientsSection />
        <FaqSection />
        <Ready2 />
        <Footer switchTheme={switchTheme} newTheme={theme} />
      </section>
    </main>
  );
}
