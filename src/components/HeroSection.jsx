import React from "react";
import ExBar from "./ExBar";

function HeroSection() {
  return (
    <div className="dark:text-white flex flex-col justify-center items-center gap-5 bg-stone-200 dark:bg-gray-900 sm:p-15 p-5 rounded-md">
      <div className="font-bold sm:text-5xl text-3xl text-center text-slate-800 dark:text-white">
        Hello! I'm Anirudh Dubey
      </div>
      <p className="mt-5 text-gray-600 dark:text-white">
        I love building web apps that not only look great but feel great to
        use—clean, responsive, and accessible to everyone. I focus on writing
        well-structured, maintainable code while delivering visually stunning
        interfaces and smooth performance. You're welcome to review my
        projects—let’s connect if you’re seeking a collaborator to help bring
        your vision to life.
      </p>
      <ExBar />
    </div>
  );
}

export default HeroSection;
