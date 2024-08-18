import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/pradhan_mantri_yojnas.json");

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
        Pradhan Mantri Yojanas
      </h1>
      <div className="space-y-12">
        {data?.pradhan_mantri_yojanas?.map((scheme, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-lg p-8 hover:bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl font-extrabold mb-4 text-center text-white">
              {scheme.scheme}
            </h2>
            <p className="text-lg mb-4 text-center">
              <span className="font-semibold text-teal-300">Objective:</span> {scheme.objective}
            </p>
            <p className="text-lg mb-4 text-center">
              <span className="font-semibold text-teal-300">Key Features:</span> {scheme.key_features}
            </p>
            <p className="text-lg mb-4 text-center">
              <span className="font-semibold text-teal-300">Release Date:</span> {scheme.release_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
