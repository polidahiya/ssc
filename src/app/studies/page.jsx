import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/studies.json");

  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-black text-white">
      {data?.fields_of_study?.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-slate-800 p-[10px] flex flex-col items-center"
          >
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-sm">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default page;
