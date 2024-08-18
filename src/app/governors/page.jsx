import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/governors.json");

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Governors of Indian States
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.governors?.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-semibold mb-4 text-center text-indigo-400">
                {item.state}
              </h2>
              <p className="text-lg text-center">{item.governor}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
