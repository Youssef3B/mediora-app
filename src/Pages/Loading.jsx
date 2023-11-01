import React from "react";
import useLocalStorage from "use-local-storage";
import NavBar from "../Components/NavBar";

function Loading() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <main className="body" data-theme={theme}>
      <div className="Loading"></div>
    </main>
  );
}

export default Loading;
