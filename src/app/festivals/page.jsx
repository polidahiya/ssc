import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/festivals.json");

  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-black text-white">
      {data?.festivals?.map((item, i) => {
        return (
          <div key={i} className="bg-slate-800 p-[10px]">
            <h1 className="text-2xl mb-[20px]">{item.state}</h1>
            {item.festivals.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default page;
