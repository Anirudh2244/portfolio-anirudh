import React from "react";

function ProgressBar(props) {
  // console.log(props);
  return (
    <div className="bg-gray-500 w-full h-2 rounded-full relative overflow-hidden">
      <div
        className="h-full absolute transition"
        style={{ width: props.progress + "%", backgroundColor: props.color }}
      ></div>
    </div>
  );
}

export default ProgressBar;
