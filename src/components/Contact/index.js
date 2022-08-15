//import validateEmail from "../../utils/helpers"
import React, { useState } from "react";
import Footer from "../Footer";

function Contact() {
  const [formInfo, setFormInfo] = useState("");

  return (
    <div>
      <div className="containerBackdrop contact-form-holder px-2 py-2">
        <div className="flex-row space-between">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="my-1"
              onChange={(e) => setFormInfo(e.target.name.value)}
            />
            <br />
            <input
              type="email"
              name="txtEmail"
              placeholder="Email"
              required
              className="my-1"
              onChange={(e) => setFormInfo(e.target.email.value)}
            />
          </div>
          <img
            src={require("../../assets/images/noun-stamp-4312535.png")}
            alt="A stamp"
            className="stamp"
          ></img>
        </div>

        <br />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          required
          className="my-1 message-input"
          onChange={(e) => setFormInfo(e.target.text.value)}
        />
        <br />
        <div className="flex-row align-right">
          <img
            src={require("../../assets/images/noun-arrow-2841222.png")}
            alt="Submit"
            className="stamp  hvr-bob"
            onClick={console.log(setFormInfo)}
          ></img>
        </div>
      </div>
      <div className="footer-box my-2 py-2">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
