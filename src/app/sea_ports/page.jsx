import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/sea_ports.json");

  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-black text-white">
      {data?.seaports?.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-slate-800 p-[10px] flex flex-col items-center"
          >
            <h1 className="text-2xl text-center">{item.port}</h1>
            <p className="text-lg text-center">{item.location}</p>
            <p className="text-lg text-center">{item.port_size}</p>
            <p className="text-lg text-center">{item.famous_for}</p>
          </div>
        );
      })}
    </div>
  );
}

export default page;
