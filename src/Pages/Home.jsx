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
import IconeDarkMode from "../Components/IconeDarkMode";
import Up from "../Components/Up";

export default function Home() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <main className="body" data-theme={theme}>
      <section className={styles.home}>
        <IconeDarkMode switchTheme={switchTheme} newTheme={theme} />
        <Up />

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
