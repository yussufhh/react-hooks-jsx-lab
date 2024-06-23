import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Moon lover is a full-Stack software engineer from Kenya, Especially Mandera county.</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;
