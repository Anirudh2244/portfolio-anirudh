import React from "react";

const Websites = ({ title, about, tech, github, website }) => {
  return (
    <div className="p-4">
      <h3 className="text-lime-600">{title}</h3>
      <p className="text-gray-500">{about}</p>
      <p className="text-gray-500">Tech stack: {tech}</p>
      <div>
        <a
          href={github}
          target="_blank"
          className="text-blue-400 underline hover:text-blue-500 "
        >
          Github Repo
        </a>
        |
        <a
          href={website}
          target="_blank"
          className="text-blue-400 hover:text-blue-500 underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Websites;
