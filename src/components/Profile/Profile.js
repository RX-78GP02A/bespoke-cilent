import React from "react";
import Hero from ".././Hero";
import { homeObjectC } from "../ObjectStorage";

function Profile() {
  return (
    <>
      <Hero {...homeObjectC} />
    </>
  );
}

export default Profile;
