import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    {
      name: "about me",
      description: "",
    },
    { name: "portfolio", description: "" },
    { name: "contact", description: "" },
    {
      name: "resume",
      description: "",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <body>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        {currentCategory.name === "about me" && <About />}
        {currentCategory.name === "portfolio" && <Portfolio />}
        {currentCategory.name === "contact" && <Contact />}
        {currentCategory.name === "resume" && <Resume />}
      </main>
    </body>
  );
}

export default App;
