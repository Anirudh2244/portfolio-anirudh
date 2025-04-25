import React from "react";
import {
  ChevronDown,
  Minus,
  Plus,
  Square,
  SquareTerminal,
  X,
} from "lucide-react";

function Projects() {
  return (
    <div className="text-white bg-gray-900 p-5 rounded-md">
      <h1 className="text-2xl">~/Projects</h1>

      <div>
        <div className="bg-zinc-800 flex justify-between align-center mt-5 rounded-t-md">
          <div className="flex items-center gap-4">
            <div className="bg-zinc-950 flex justify-center items-center mt-2 ms-4 text-sm gap-2 p-2 rounded-t-md">
              <SquareTerminal size={25} />
              <span>Windows PowerShell</span>
              <X size={15} />
            </div>
            <div className="flex items-center mt-2">
              <div className="hover:bg-zinc-700 p-2 rounded-tl-md rounded-bl-md">
                <Plus size={15} />
              </div>
              |
              <div className="hover:bg-zinc-700 p-2 rounded-tr-md rounded-br-md">
                <ChevronDown size={15} />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="p-4 hover:bg-zinc-700">
              <Minus size={15} />
            </div>
            <div className="p-4 hover:bg-zinc-700">
              <Square size={15} />
            </div>
            <div className="p-4 hover:bg-red-700 rounded-tr-md">
              <X size={15} />
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 rounded-b-md">Project section</div>
      </div>
    </div>
  );
}

export default Projects;
