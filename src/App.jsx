/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React, { useEffect, useState } from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Gara Pavan Sai Sriram",
  title: "Full-Stack Engineer",
  email: "z08qqwf21@mozmail.com",
  gitHub: "thepavansai",
  instagram: "thepavansai",
  linkedIn: "thepavansai",
  medium: "thepavansaii",
  twitter: "",
  youTube: "",
};

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const primaryColor = theme === "light" ? "#111315" : "#0b0d0f";

  return (
    <div id="main">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} />
    </div>
  );
};

export default App;
