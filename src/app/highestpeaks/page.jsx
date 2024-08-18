import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/highest_peaks.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-8 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-12 text-center tracking-wide">
        Highest Peaks of Indian States
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.highest_peaks?.map((item, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-white">
              {item.state}
            </h2>
            <p className="text-lg text-center mb-3">
              <span className="font-semibold text-indigo-200">Peak:</span> {item.peak}
            </p>
            <p className="text-lg text-center mb-3">
              <span className="font-semibold text-indigo-200">Location:</span> {item.location}
            </p>
            <p className="text-lg text-center">
              <span className="font-semibold text-indigo-200">Height:</span> {item.height}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
