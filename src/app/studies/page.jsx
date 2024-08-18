import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function Page() {
  const data = await filedata("./public/studies.json");

  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center gap-6">
      {data?.fields_of_study?.map((item, i) => (
        <div
          key={i}
          className="bg-slate-800 rounded-lg shadow-lg p-6 w-full max-w-2xl hover:bg-gradient-to-r from-purple-500 to-indigo-500 transform hover:scale-105 transition-transform duration-300 text-center"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">{item.name}</h2>
          <p className="text-lg text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;
