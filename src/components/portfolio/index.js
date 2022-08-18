import React, { useState } from "react";
import Footer from "../Footer";

function Portfolio() {
  const [projects] = useState([
    {
      name: "PWA Budget App",
      description: "A simple PWA used to track money over time.",
      imageSrc: "money-tracker",
      gitHubLink: "https://github.com/merrickwatts/Money-Tracker",
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
    },
    {
      name: "Nikes on My Feet",
      description:
        "A desplay site where you can view custom nike shoes and buy them if you like them.",
      imageSrc: "nikes-on-my-feet",
      gitHubLink: "https://github.com/merrickwatts/nikes-on-my-feet",
    },
    {
      name: "Bit-Trail",
      description:
        "A group project where you can login, view, and share hikes with others.",
      imageSrc: "bit-trail",
      gitHubLink: "https://github.com/CalebLawver/Bit-Trail",
    },
    {
      name: "Employee Tracker",
      description: "A CLI app to track employees and their roles.",
      imageSrc: "employee-tracker",
      gitHubLink: "https://github.com/merrickwatts/Employee-Tracker-2.0",
    },
  ]);

  return (
    <div>
      <ul className="flex-row center-content">
        {projects.map((project) => (
          <div className="containerBackdrop project-card my-2 mx-2 py-2 px-2">
            <li className="">
              <h3>{project.name}</h3>
              <img
                src={require(`../../assets/images/${project.imageSrc}.png`)}
                alt="My Project"
                className="project-photo my-2"
              ></img>
              <div className="flex-row space-between">
                <p className="project-description">{project.description}</p>
                <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                  <img
                    src={require("../../assets/images/GitHub-Mark-64px.png")}
                    alt="Link to my GitHub"
                    className="link-image hvr-bob"
                  ></img>
                </a>
              </div>
            </li>
          </div>
        ))}
      </ul>
      <div className="footer-box py-2">
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;
