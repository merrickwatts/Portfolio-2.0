import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex-row link-image-holder">
        <a
          href="https://github.com/merrickwatts"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../assets/images/GitHub-Mark-64px.png")}
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
            src={require("../../assets/images/icons8-mail-48.png")}
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
            src={require("../../assets/images/LI-In-Bug.png")}
            alt="Link to my LinkedIn"
            className="link-image hvr-bob"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
