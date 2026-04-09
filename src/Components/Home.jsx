/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/lego.jpg";

const imageAltText = "Colorful Lego-themed background image";

const Home = ({ name, title }) => {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={imageAltText}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay to keep text readable on busy images */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(8, 8, 8, 0.48) 0%, rgba(8, 8, 8, 0.28) 45%, rgba(8, 8, 8, 0.14) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(1rem, 5vw, 5rem)",
          color: "#fff",
          textShadow: "0 6px 18px rgba(0, 0, 0, 0.45)",
        }}
      >
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.95, color: "#fff" }}>
          {name}
        </h1>
        <h2 style={{ fontSize: "clamp(1.35rem, 3vw, 2.5rem)", paddingTop: 0, color: "#fff" }}>
          {title}
        </h2>
        <div className="heroActions">
          <a className="heroButton" href="#portfolio">
            View Projects
          </a>
          <a className="heroButton secondary" href="#footer">
            Contact Me
          </a>
        </div>
      </div>

      {/* Arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <a className="heroArrow" href="#about" aria-label="Scroll to About section">
          <img src={arrowSvg} alt="Scroll down" />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
