import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function Page() {
  const data = await filedata("./public/dams.json");

  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-gray-900 to-black text-white flex flex-col gap-6">
      {data?.dams?.map((item, i) => (
        <div
          key={i}
          className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-gradient-to-r from-teal-500 to-blue-500 transform hover:scale-105 transition-transform duration-300"
        >
          <p className="text-xl font-bold text-yellow-400 mb-2">
            Name: <span className="text-white">{item?.name}</span>
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-300">State:</span> {item?.state}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-300">Location:</span> {item?.location}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-300">River:</span> {item?.river}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-300">Height:</span> {item?.height}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-300">Date of Construction:</span> {item?.date_of_construction}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Page;
