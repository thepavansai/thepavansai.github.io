/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/bg.jpg";

const imageAltText = "Abstract dark background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hi, I'm Pavan Sai - a Full-Stack Engineer with a strong Java focus, building scalable web applications, RESTful APIs, and cloud-native systems end to end. I'm backend at heart with Spring Boot and Go, and product-focused on the frontend with React and Angular.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Java (Spring Boot), Go (Gin, Echo)",
  "React, Angular, TypeScript, JavaScript",
  "Node.js and Express",
  "PostgreSQL, MySQL, MongoDB",
  "Docker, Kubernetes, OpenShift, Helm",
  "AWS, Jenkins, CI/CD pipelines",
  "Grafana and Prometheus observability",
  "Maven, Gradle, Git",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I enjoy designing reliable backend systems, scaling microservices, and improving developer workflows with DevOps tooling. Reach me at z08qqwf21@mozmail.com.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          background: "var(--about-bg)",
          border: "1px solid var(--about-border)",
          borderRadius: "18px",
          width: "min(920px, 92vw)",
          padding: "clamp(1.5rem, 4vw, 4rem)",
          margin: "3rem auto",
          textAlign: "center",
          color: "var(--ink)",
          boxShadow: "0 22px 45px rgba(0, 0, 0, 0.18)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        <h2 style={{ color: "var(--ink)" }}>About Myself</h2>
        <p className="large" style={{ lineHeight: 1.45, color: "var(--muted-ink)" }}>
          {description}
        </p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            margin: "2rem clamp(0.5rem, 3vw, 3rem)",
            gap: "3rem",
            color: "var(--muted-ink)",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem clamp(0.5rem, 3vw, 3rem) 0", color: "var(--muted-ink)" }}>
          {detailOrQuote}
        </p>
      </div>
    </section>
  );
};

export default About;
