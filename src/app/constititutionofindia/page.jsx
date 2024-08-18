import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function Page() {
  const data = await filedata("./public/constitution_of_india.json");

  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-gray-900 to-black text-white flex flex-col gap-6">
      {data.map((item, i) => (
        <div
          key={i}
          className="p-6 bg-slate-800 rounded-lg shadow-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform hover:scale-105 transition-transform duration-300"
        >
          <p className="text-2xl font-bold">
            <span className="text-yellow-400">Article:</span> {item.article}
            <span className="ml-4 underline text-pink-400">{item.title}</span>
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;
