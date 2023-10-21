import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import AboutSection from "../Components/AboutSection";
import FaqSection from "../Components/FaqSection";
import Ready3 from "../Components/Ready3";
import Footer from "../Components/Footer";
import useLocalStorage from "use-local-storage";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutUs() {
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
      <NavBar switchTheme={switchTheme} newTheme={theme} />
      <AboutSection switchTheme={switchTheme} newTheme={theme} />
      <FaqSection />
      <Ready3 switchTheme={switchTheme} newTheme={theme} />
      <Footer />
    </main>
  );
}

export default AboutUs;
