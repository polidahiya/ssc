import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/studies_of_diff_things.json");

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Types of Studies
      </h1>
      <div className="space-y-12">
        {data?.types_of_studies?.map((study, i) => (
          <div
            key={i}
            className="bg-gray-700 rounded-lg shadow-lg p-8 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-white">
              {study.name}
            </h2>
            <p className="text-lg text-center">
              {study.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
