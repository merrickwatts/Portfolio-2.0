import React, { useState, useEffect } from "react";
import Home from "./components/Home Page";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/portfolio";
import Contact from "./components/Contact";
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
      <div className="main-holder" id="main-holder">
        <div className="into-holder">
          <div className="row h-100">
            <div className="col-12 small-nav">
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
        <Portfolio />
      </div>
    );
  } else {
    //format for larger screens
    return (
      <div className="container main-holder" id="main-holder">
        <div className="into-holder">
          <div className="row h-100">
            <div className="col-10 h-100 d-flex justify-content-center">
              {currentCategory.name === "home" && <Home />}
              {currentCategory.name === "resume" && <Resume />}
            </div>
            <div className="col-md-2">
              <Header
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
              ></Header>
            </div>
          </div>
        </div>
        <Portfolio />
      </div>
    );
  }
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default App;
