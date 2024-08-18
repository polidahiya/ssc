import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/imp_person_from_states.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500">
        Notable People from Indian States
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.states?.map((state, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-extrabold mb-4 text-center text-white tracking-wide">
              {state.name}
            </h2>
            <div className="space-y-5">
              {state.notable_people?.map((person, j) => (
                <div
                  key={j}
                  className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-green-300 mb-2">
                    {person.name}
                  </h3>
                  <p className="text-lg text-white">
                    <span className="font-medium text-green-200">Contribution:</span> {person.contribution}
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
