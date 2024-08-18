import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function Page() {
  const data = await filedata("./public/WordnetAdjectives.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500">
        Adjectives
      </h1>
      <div className="space-y-12 w-full max-w-4xl">
        {data?.map((item, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl shadow-2xl p-8 hover:bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 transform hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-white">
              {item.Word}
            </h2>
            <div className="text-center space-y-2">
              {item.Definition && (
                <p className="text-lg">
                  <span className="font-semibold text-yellow-300">Definition:</span> {item.Definition}
                </p>
              )}
              {item.Example1 && (
                <p className="text-lg">
                  <span className="font-semibold text-blue-300">Example 1:</span> {item.Example1}
                </p>
              )}
              {item.Example2 && (
                <p className="text-lg">
                  <span className="font-semibold text-blue-300">Example 2:</span> {item.Example2}
                </p>
              )}
              {item.Example3 && (
                <p className="text-lg">
                  <span className="font-semibold text-blue-300">Example 3:</span> {item.Example3}
                </p>
              )}
              {item.Example4 && (
                <p className="text-lg">
                  <span className="font-semibold text-blue-300">Example 4:</span> {item.Example4}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
