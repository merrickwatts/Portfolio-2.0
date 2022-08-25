import React, { useState } from "react";
import Footer from "../Footer";

function Portfolio() {
  const [projects] = useState([
    {
      name: "PWA Budget App",
      description: "A simple PWA used to track money over time.",
      imageSrc: "money-tracker",
      gitHubLink: "https://github.com/merrickwatts/Money-Tracker",
      liveLink: "https://project-money-tracker.herokuapp.com/",
    },
    {
      name: "Social Media API Project",
      description:
        "An API for a social meadia app that lets you track friends.",
      imageSrc: "social-network-api",
      gitHubLink: "https://github.com/merrickwatts/Social-Media-Api",
    },
    {
      name: "Note Taker",
      description:
        "A simple note taking app to jot down your thoughts and come back to them later.",
      imageSrc: "note-taker",
      gitHubLink: "https://github.com/merrickwatts/Note-Taking-App",
      liveLink: "https://project-note-taker-11.herokuapp.com/notes",
    },
    {
      name: "Nikes on My Feet",
      description: "A desplay site where you can view custom shoes.",
      imageSrc: "nikes-on-my-feet",
      gitHubLink: "https://github.com/merrickwatts/nikes-on-my-feet",
    },
    {
      name: "Bit-Trail",
      description:
        "A group project where you can login, view, and share hikes with others.",
      imageSrc: "bit-trail",
      gitHubLink: "https://github.com/CalebLawver/Bit-Trail",
      liveLink: "https://bit-trail.herokuapp.com/",
    },
    {
      name: "Employee Tracker",
      description: "A CLI app to track employees and their roles.",
      imageSrc: "employee-tracker",
      gitHubLink: "https://github.com/merrickwatts/Employee-Tracker-2.0",
    },
  ]);

  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        <h2 className="portfolio-title">Some of my work:</h2>
      </div>
      <div className="row justify-content-center">
        {projects.map((project) => (
          <div className="containerBackdrop project-card col-10 col-md-5 justify-content-center d-flex flex-column">
            <div className="container d-flex flex-grow-1 align-items-center">
              <div className="row">
                <div className="col-12">
                  <h3 className="porject-title">{project.name}</h3>
                </div>
                <div className="col-md-6 col-12 d-flex">
                  <img
                    src={require(`../../assets/images/${project.imageSrc}.png`)}
                    alt="My Project"
                    className="project-photo img-fluid mx-auto rounded"
                  ></img>
                </div>
                <div className="col-md-6 col-12">
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="col-12 project-links">
                  <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                    <img
                      src={require("../../assets/images/GitHub-Mark-64px.png")}
                      alt="Link to my GitHub"
                      className="link-image hvr-bob"
                    ></img>
                  </a>
                  {project.liveLink && (
                    <a
                      className="d-inline"
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="footer-box py-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
