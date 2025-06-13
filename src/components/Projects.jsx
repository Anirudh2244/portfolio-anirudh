import React from "react";
import {
  ChevronDown,
  Minus,
  Plus,
  Square,
  SquareTerminal,
  X,
} from "lucide-react";
import Websites from "./Websites";

function Projects() {
  const projects = [
    {
      title: "Candid Dreams",
      about: "Developed a responsive portfolio website for an Indian wedding photographer, highlighting visual storytelling through elegant UI/UX",
      techStack: "React, Tailwind CSS, JavaScript, Git",
      webUrl: "https://thecandiddreams.com/",
      githubUrl: "https://github.com/Anirudh2244/Candid-Dreams",
    },
    {
      title: "Credit Card",
      about: "Credit card is a responsive website for money lending websites.",
      techStack: "HTML5, CSS3, JavaScript, Bootstrap, SASS, Slick, Git",
      webUrl: "https://creditcard2244.netlify.app/",
      githubUrl: "https://github.com/Anirudh2244/Credit-card",
    },
    {
      title: "Healthcare",
      about: "Responsive landing page for a healthcare provider.",
      techStack: "HTML5, CSS3, Git",
      webUrl: "https://healthcare2244.netlify.app/",
      githubUrl: "https://github.com/Anirudh2244/Health-care-landing-page",
    },
    {
      title: "Login Page",
      about: "An appealing web login page for an educational institute.",
      techStack: "HTML5, CSS3, Git",
      webUrl: "https://loginpage2244.netlify.app/",
      githubUrl: "https://github.com/Anirudh2244/Login-Page",
    },
  ];

  return (
    <div className="text-gray-600 bg-stone-200 dark:text-white dark:bg-gray-900 p-5 rounded-md">
      <h1 className="text-2xl">~/Projects</h1>

      <div>
        <div className="bg-amber-100 dark:bg-zinc-800 flex justify-between align-center mt-5 rounded-t-md">
          <div className="flex items-center gap-4">
            <div className="bg-amber-200 dark:bg-zinc-950 flex justify-center items-center mt-2 ms-4 text-sm gap-2 p-2 rounded-t-md">
              <SquareTerminal size={25} />
              <span>Windows PowerShell</span>
              <X size={15} />
            </div>
            <div className="sm:flex items-center mt-2 hidden ">
              <div className="hover:bg-amber-200 dark:hover:bg-zinc-700 p-2 rounded-tl-md rounded-bl-md">
                <Plus size={15} />
              </div>
              |
              <div className="hover:bg-amber-200 dark:hover:bg-zinc-700 p-2 rounded-tr-md rounded-br-md">
                <ChevronDown size={15} />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="p-4 hover:bg-amber-200 dark:hover:bg-zinc-700 hidden sm:block">
              <Minus size={15} />
            </div>
            <div className="p-4 hover:bg-amber-200 dark:hover:bg-zinc-700 hidden sm:block">
              <Square size={15} />
            </div>
            <div className="p-4 hover:bg-red-700 rounded-tr-md">
              <X size={15} />
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-zinc-950 rounded-b-md">
          {projects.map((project, index) => (
            <Websites
              key={index}
              title={project.title}
              about={project.about}
              tech={project.techStack}
              github={project.githubUrl}
              website={project.webUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
