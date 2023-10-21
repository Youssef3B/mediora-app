import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Services2 from "../Components/Services2";
import Vision from "../Components/Vision";
import ServicesSection from "../Components/ServicesSection";
import Footer from "../Components/Footer";
import Ready3 from "../Components/Ready3";
import useLocalStorage from "use-local-storage";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Services() {
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
      <Services2 switchTheme={switchTheme} newTheme={theme} />
      <Vision />
      <ServicesSection />
      <Ready3 />
      <Footer />
    </main>
  );
}
