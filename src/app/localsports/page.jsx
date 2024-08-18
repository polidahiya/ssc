import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/local_sports.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-500 to-yellow-500">
        Famous Local Sports of Indian States
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.states_local_sports?.map((item, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gradient-to-r from-teal-500 via-green-500 to-yellow-500 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-extrabold mb-4 text-center text-white tracking-wide">
              {item.state}
            </h2>
            <p className="text-lg text-center text-gray-200">
              <span className="font-semibold text-teal-300">Famous Local Sport:</span> {item.famous_local_sport}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
