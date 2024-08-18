import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/WordnetVerbs.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Wordnet Verbs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((item, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-extrabold mb-4 text-center text-white tracking-wide">
              {item.Word}
            </h2>
            <div className="space-y-3 text-center">
              <p className="text-lg">
                <span className="font-semibold text-pink-300">Count:</span> {item.Count}
              </p>
              {item.Sense && (
                <p className="text-lg">
                  <span className="font-semibold text-pink-300">Sense:</span> {item.Sense}
                </p>
              )}
              <p className="text-lg">
                <span className="font-semibold text-pink-300">Definition:</span> {item.Definition}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-pink-300">Example 1:</span> {item["Example 1"]}
              </p>
              {item["Example 2"] && (
                <p className="text-lg">
                  <span className="font-semibold text-pink-300">Example 2:</span> {item["Example 2"]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
