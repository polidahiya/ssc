import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/names_of_cells_in_organs.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
        Cells in Different Organs
      </h1>
      <div className="space-y-12">
        {data?.organs?.map((organ, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
              {organ.name}
            </h2>
            <div className="space-y-6">
              {organ.cells?.map((cell, j) => (
                <div
                  key={j}
                  className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                    {cell.type}
                  </h3>
                  <p className="text-md text-gray-300 mb-2">
                    <span className="font-semibold text-cyan-200">Description:</span> {cell.description}
                  </p>
                  <p className="text-md text-gray-300">
                    <span className="font-semibold text-cyan-200">Function:</span> {cell.function}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
