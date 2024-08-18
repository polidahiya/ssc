import React from "react";
import filedata from "@/app/modules/Readjsonfile";
import { Span } from "next/dist/trace";

async function Page() {
  const data = await filedata("./public/dances.json");

  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-gray-900 to-black text-white flex flex-col gap-8 items-center">
      {data?.states?.map((item, i) => (
        <div
          key={i}
          className="bg-slate-800 rounded-lg shadow-lg p-8 w-full max-w-2xl "
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">{item?.state}</h2>
          <div className="text-lg text-gray-300 space-y-2">
            <p className="flex items-center gap-[20px]">
              <span className="font-semibold text-blue-300">Folk:</span> {item?.dances?.folk?.join(", ") || <span className="text-[10px] ">{"<"}Unabailable{">"}</span>}
            </p>
            <p className="flex items-center gap-[20px]">
              <span className="font-semibold text-green-300">Traditional:</span> {item?.dances?.traditional?.join(", ") || <span className="text-[10px] ">{"<"}Unabailable{">"}</span>}
            </p>
            <p className="flex items-center gap-[20px]">
              <span className="font-semibold text-red-300">Classic:</span> {item?.dances?.classic?.join(", ") || <span className="text-[10px] ">{"<"}Unabailable{">"}</span>}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
