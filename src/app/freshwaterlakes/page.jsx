import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/fresh_water_lakes.json");

  return (
    <div className="bg-gradient-to-r from-blue-900 to-black text-white p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">Fresh Water Lakes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.lakes?.map((item, i) => (
          <div
            key={i}
            className="bg-slate-800 rounded-lg shadow-xl p-6 hover:scale-105 transform transition-transform"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-400">
              {item.name}
            </h2>
            <p className="text-lg mb-2 text-center">{item.location}</p>
            <p className="text-lg mb-2 text-center">
              {item.area_km2} km<sup>2</sup>
            </p>
            <p className="text-center">{item.known_for}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
