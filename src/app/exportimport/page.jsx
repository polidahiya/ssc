import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/exports_and_imports.json");

  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-black text-white">
      {data?.map((item, i) => {
        return (
          <div key={i} className="bg-slate-800 p-[10px]">
            <h1 className="text-[18px] mb-[20px] text-center">{item.sector}</h1>
            <p>Export : {item.exports.rank}-{item.exports.description}</p>
            <p>Import : {item.imports.rank}-{item.imports.description}</p>
           
          </div>
        );
      })}
    </div>
  );
}

export default page;
