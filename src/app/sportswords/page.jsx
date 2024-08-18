import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/words_use_in_sprots.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500">
        Sports Terms
      </h1>
      <div className="space-y-12">
        {data?.terms?.map((term, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-white">
              {term.term}
            </h2>
            <p className="text-lg mb-4 text-center">
              <span className="font-semibold text-green-300">Sport:</span> {term.sport}
            </p>
            <p className="text-lg text-center">
              <span className="font-semibold text-green-300">Definition:</span> {term.definition}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
