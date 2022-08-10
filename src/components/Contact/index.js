//import validateEmail from "../../utils/helpers"
import React from "react";

function Contact() {
  return (
    <div className="containerBackdrop contact-form-holder px-2 py-2">
      <div className="flex-row space-between">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="my-1"
          />
          <br />
          <input
            type="email"
            name="txtEmail"
            placeholder="Email"
            required
            className="my-1"
          />
        </div>
        <img
          src={require("../../assets/images/noun-stamp-4312535.png")}
          alt="Link to my GitHub"
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
      />
      <br />
      <div className="flex-row align-right">
        <img
          src={require("../../assets/images/noun-arrow-2841222.png")}
          alt="Link to my GitHub"
          className="stamp  hvr-bob"
        ></img>
      </div>
    </div>
  );
}

export default Contact;
