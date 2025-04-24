import React from "react";
import ExBar from "./ExBar";

function HeroSection() {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-4 bg-gray-900 sm:p-15 p-5">
      <div className="font-bold sm:text-5xl text-3xl text-center">
        Hello! I'm Anirudh Dubey
      </div>
      <p>
        I am passionate about delivering pixel-perfect UI with smooth
        functionality while maintaining code readability and performance. My
        goal is to create engaging and accessible web applications that leave a
        lasting impact. Feel free to explore my projects, and let’s connect if
        you’re looking to collaborate or build something amazing together!
      </p>
      <ExBar />
    </div>
  );
}

export default HeroSection;
