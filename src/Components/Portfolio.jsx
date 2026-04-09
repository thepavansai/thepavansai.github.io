/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/projects.png";

const imageAltText = "Projects showcase visual";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Event Booking API using Golang",
    description:
      "A RESTful API built with Go (Golang) for managing events and user registrations. This application allows users to create, update, and delete events, as well as register for events created by other users.",
    url: "https://github.com/thepavansai/Event-Booking",
  },
  {
    title: "Design Patterns: What They Are and Why They Matter",
    description:
      "A quick guide to understanding design patterns, why they matter, and how they help build scalable, maintainable software.",
    url: "https://dev.to/thepavansai/design-patterns-what-they-are-and-why-they-matter-a7p",
  },
  {
    title: "HealthNest",
    description:
      "HealthNest is a comprehensive healthcare platform that connects patients with specialized doctors based on their symptoms. Our mission is to make healthcare accessible, convenient, and effective for everyone through technology and empathy.",
    url: "https://github.com/thepavansai/HealthNest",
  },
  {
    title: "MicroCM",
    description:
      "A cloud-native monitoring architecture for observing, tracing, and managing microservice invocations in distributed systems.",
    url: "https://github.com/thepavansai/microcm",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="portfolioLayout">
        <div className="portfolioImageWrap">
          <img src={image} className="portfolioImage" alt={imageAltText} />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
