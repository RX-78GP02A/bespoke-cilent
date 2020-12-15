import React from "react";
import Hero from "../Hero";
import {homeObjectB} from '../ObjectStorage'

function About() {
  return (
    <>
      <Hero {...homeObjectB} />
    </>
  );
}

export default About;

