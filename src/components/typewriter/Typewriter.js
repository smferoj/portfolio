import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        string: ["Hello World"],
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Fullstack web Developer || Focus on React")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Connect Me")
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypeWriter;
