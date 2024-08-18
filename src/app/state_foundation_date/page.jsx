
import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/states_foundation_dates.json");

  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-black text-white">
      {data?.states?.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-slate-800 p-[10px] flex flex-col items-center"
          >
            <h2 className="text-2xl">{item.name}</h2>
            <p className="text-lg">{item.creation_date}</p>
           
          </div>
        );
      })}
    </div>
  );
}

export default page;
