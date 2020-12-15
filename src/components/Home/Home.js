import React from "react";
import Hero from "../Hero";
import {
  homeObjectA,
  homeObjectB,
  homeObjectC
} from "../ObjectStorage";

function Home() {
  return (
    <>
      <Hero {...homeObjectA} />
      <Hero {...homeObjectB} />
      <Hero {...homeObjectC} />
      
    </>
  );
}

export default Home;
