import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/WordnetAdverbs.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500">
        Idioms
      </h1>
      <div className="space-y-12">
        {data?.map((item, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-white">
              {item.Word}
            </h2>
            {item.Senses && (
              <p className="text-lg mb-4 text-center">
                <span className="font-semibold text-green-300">Senses:</span> {item.Senses}
              </p>
            )}
            {item.Definition && (
              <p className="text-lg mb-4 text-center">
                <span className="font-semibold text-green-300">Definition:</span> {item.Definition}
              </p>
            )}
            {item.Example && (
              <p className="text-lg mb-2 text-center">
                <span className="font-semibold text-green-300">Example:</span> {item.Example}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
