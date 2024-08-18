import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/ministers.json");

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Current Indian Ministers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.ministers?.map((minister, i) => (
          <div
            key={i}
            className="bg-gray-700 rounded-lg shadow-lg p-6 hover:bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-white">
              {minister.name}
            </h2>
            <p className="text-md text-center text-gray-300 mb-2">
              <span className="font-semibold text-green-300">Position:</span> {minister.position}
            </p>
            <p className="text-md text-center text-gray-300">
              <span className="font-semibold text-green-300">Departments:</span> {minister.departments.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
