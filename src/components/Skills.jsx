import React from "react";

function skills() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Javascript",
    "React",
  ];
  const skillsList = skills.map((skill, index) => (
    <p
      key={index}
      className="bg-amber-600 text-white rounded-full m-2 px-4 py-2"
    >
      {skill}
    </p>
  ));
  return (
    <div className="flex flex-col items-center justify-center mt-7">
      <h2 className="text-white text-3xl">What I do?</h2>
      <div className="flex items-center justify-center my-5 flex-wrap mb-7">
        {skillsList}
      </div>
    </div>
  );
}

export default skills;
