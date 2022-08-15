import React from "react";

function Resume() {
  return (
    <div className="containerBackdrop resume-holder">
      <h2 className="px-2 py-2">My Skills</h2>
      <ul>
        <li className="my-1">JavaScrpt</li>
        <li className="my-1">CSS</li>
        <li className="my-1">HTML</li>
        <li className="my-1">React</li>
        <li className="my-1">MySQL</li>
        <li className="my-1">Express</li>
        <li className="my-1">Object Oriented Programing</li>
        <li className="my-1">NoSQL Databases</li>
      </ul>

      <h2 className="px-2 py-2">A little more about me:</h2>
      <p className="px-2 py-2">
        I am self motivated and a hard worker, I love to confront problems that
        I might not know all the answers to, it gives me a good chance to learn!
      </p>
    </div>
  );
}

export default Resume;
