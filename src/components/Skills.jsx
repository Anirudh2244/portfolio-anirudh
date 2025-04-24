import React from "react";

function skills() {
  return (
    <div className="flex flex-col items-center justify-center mt-7">
      <h2 className="text-white text-3xl">What I do?</h2>
      <div className="flex items-center justify-center my-5 flex-wrap mb-7">
        <p className="bg-amber-600 text-white rounded-full m-2 px-4 py-2">
          HTML
        </p>
        <p className="bg-amber-600 text-white rounded-full m-2 px-4 py-2">
          CSS
        </p>
        <p className="bg-amber-600 text-white rounded-full m-2 px-4 py-2">
          Tailwind CSS
        </p>
        <p className="bg-amber-600 text-white rounded-full m-2 px-4 py-2">
          Bootstrap
        </p>
        <p className="bg-amber-600 text-white rounded-full m-2 px-4 py-2">
          Javascript
        </p>
        <p className="bg-amber-600 text-white rounded-full m-2 px-4 py-2">
          React
        </p>
      </div>
    </div>
  );
}

export default skills;
