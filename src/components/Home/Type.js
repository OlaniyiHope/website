import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Mobile Developer",
          "Web Developer",
          "React Native & React Stack",
          "Open Source Contributor",
          "Tech Savvy",
          "Lover of God",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
