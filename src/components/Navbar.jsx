import React, { useState } from "react";
import { Linkedin, Github, Moon, Sun } from "lucide-react";
import toggleTheme from "../utils/theme";

function Navbar() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="flex justify-between items-center dark:text-white py-2 text-2xl h-14">
      <div className="flex items-center font-semibold">
        <span className="text-red-400 mr-2">
          (<span className="text-sky-500">&lt;/&gt;</span>)
        </span>
        <span className="hidden sm:block">Web Developer</span>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/anirudh--dubey/"
          target="_blank"
          className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-500 p-2 rounded-full"
        >
          <Linkedin size={25} />
        </a>
        <a
          href="https://github.com/Anirudh2244"
          target="_blank"
          className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-500 p-2 rounded-full"
        >
          <Github size={25} />
        </a>

        <a
          href="#"
          className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-500 p-2 rounded-full"
          onClick={() => {toggleTheme();
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
          }}
        >
          {theme ==="light"? <Sun size={25}/>: <Moon size={25} />}
          
        </a>
      </div>
    </div>
  );
}

export default Navbar;
