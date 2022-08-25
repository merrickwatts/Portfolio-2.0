import React, { useState, useEffect } from "react";
import Home from "./components/Home Page";
import Header from "./components/Header";
import Portfolio from "./components/portfolio";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

import { backgroundTransition } from "./utils/helpers";

function App() {
  const [categories] = useState([
    {
      name: "home",
    },
    {
      name: "resume",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      backgroundTransition(window.scrollY, windowSize.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (windowSize.innerWidth < 768) {
    //formating for smaller devices
    return (
      <div className="main-holder container-fluid text-center" id="main-holder">
        <div className="into-holder">
          <div className="row h-100">
            <div className="col-12 small-nav justify-content-center">
              <Header
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
              ></Header>
            </div>
            <div className="col-12 h-100 d-flex justify-content-center">
              {currentCategory.name === "home" && <Home />}
              {currentCategory.name === "resume" && <Resume />}
            </div>
          </div>
        </div>
        {currentCategory.name === "home" && <Portfolio />}
      </div>
    );
  } else {
    //format for larger screens
    return (
      <div className="container-fluid main-holder text-center" id="main-holder">
        <div className="into-holder">
          <div className="row h-100">
            <div className="col-10 d-flex justify-content-center">
              {currentCategory.name === "home" && <Home />}
              {currentCategory.name === "resume" && <Resume />}
            </div>
            <div className="col-md-2">
              <Header
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
              ></Header>
              <div className="links row text-center">
                <a
                  href="https://github.com/merrickwatts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("./assets/images/GitHub-Mark-64px.png")}
                    alt="Link to my GitHub"
                    className="link-image hvr-bob"
                  ></img>
                </a>
                <a
                  href="mailto:merricklwatts@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("./assets/images/icons8-mail-48.png")}
                    alt="Link to send me and email"
                    className="link-image hvr-bob"
                  ></img>
                </a>
                <a
                  href="https://linkedin.com/in/merrick-watts-9331241ab"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("./assets/images/LI-In-Bug.png")}
                    alt="Link to my LinkedIn"
                    className="link-image hvr-bob"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        {currentCategory.name === "home" && <Portfolio />}
      </div>
    );
  }
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default App;
