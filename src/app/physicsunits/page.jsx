import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/physics_units.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        Physics Topics
      </h1>
      <div className="space-y-12">
        {data?.topics?.map((topic, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl font-extrabold mb-4 text-center text-white">
              {topic.name}
            </h2>
            <p className="text-lg mb-4 text-center">
              <span className="font-semibold text-purple-300">Description:</span> {topic.description}
            </p>
            <p className="text-lg mb-4 text-center">
              <span className="font-semibold text-purple-300">Formula:</span> {topic.formula}
            </p>
            <p className="text-lg mb-4 text-center">
              <span className="font-semibold text-purple-300">Unit:</span> {topic.unit}
            </p>
            {topic.additional_info && (
              <div className="text-center">
                {Object.entries(topic.additional_info).map(([key, value], idx) => (
                  <p key={idx} className="text-lg mb-2">
                    <span className="font-semibold text-purple-300">{key.replace('_', ' ')}:</span> {Array.isArray(value) ? value.join(', ') : value}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
