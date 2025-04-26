import React from "react";
import ProgressBar from "./ProgressBar";

function ExBar() {
  return (
    <div className="w-full sm:max-w-7/12 bg-red-50 dark:bg-slate-950 p-3 py-6 rounded-md mt-5">
      <p className="text-lime-600">
        C:\Users\Anirudh\Currently_at &gt; Stegpearl Pvt. Ltd. Jaipur_
      </p>
      <div className="mt-3">
        <p className="text-gray-600 dark:text-white text-sm">
          Working since: March 2024 - Present
        </p>
        <ProgressBar color="green" progress="90" />
        <p className="text-gray-500 text-xs mt-1">Ongoing journey...</p>
      </div>

      <div className="mt-3">
        <p className="text-gray-600 dark:text-white text-sm">
          Freelancer: April 2023 - March 2024
        </p>
        <ProgressBar color="orange" progress="100" />
        <p className="text-gray-500 text-xs mt-1">Completed journey</p>
      </div>
    </div>
  );
}

export default ExBar;
