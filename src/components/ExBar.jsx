import React from "react";

function ExBar() {
  return (
    <div className="w-full sm:max-w-7/12 bg-slate-950 p-3 py-6 rounded-sm mt-5">
      <p className="text-lime-500">
        C:\Users\Anirudh\Currently_at &gt; Stegpearl Pvt. Ltd. Jaipur_
      </p>
      <div className="mt-3">
        <p className="text-white text-sm">
          Working since: March 2024 - Present
        </p>
        progress bar .......................
        <p className="text-gray-400 text-xs mt-1">Ongoing journey...</p>
      </div>

      <div className="mt-3">
        <p className="text-white text-sm">
          Freelancer: April 2023 - March 2024
        </p>
        progress bar .......................
        <p className="text-gray-400 text-xs mt-1">Completed journey</p>
      </div>
    </div>
  );
}

export default ExBar;
