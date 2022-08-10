import React from "react";
import Footer from "../Footer";

function About() {
  return (
    <div className="flex-row">
      <img
        src={require("../../assets/images/IMG_0292.png")}
        alt="My smiling face"
        className="img-profile"
      ></img>
      <section className="containerBackdrop py-2 px-2 mx-2 aboutText">
        <h2 className="py-1">
          Hey there,
          <br /> My name is Merrick Watts.
        </h2>
        <p className="py-2">
          I am a beginner full stack developer always looking to expand my
          knowledge and take on new challenges.
        </p>
        <Footer />
      </section>
    </div>
  );
}

export default About;
