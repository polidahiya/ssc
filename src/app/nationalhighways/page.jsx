import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/national_highways.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-red-500">
        National Highways of India
      </h1>
      <div className="space-y-12">
        {data?.highways?.map((highway, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-extrabold mb-4 text-center text-white">
              {highway.highway}
            </h2>
            <p className="text-lg mb-2 text-center">
              <span className="font-semibold text-yellow-300">Length:</span> {highway.length}
            </p>
            <p className="text-lg mb-2 text-center">
              <span className="font-semibold text-yellow-300">Starting Location:</span> {highway.starting_location}
            </p>
            <p className="text-lg text-center">
              <span className="font-semibold text-yellow-300">Ending Location:</span> {highway.ending_location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
