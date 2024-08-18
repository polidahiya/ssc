import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/dams.json");

  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-black text-white">
      {data?.dams?.map((item, i) => {
        return (
          <div key={i} className="bg-slate-800 p-[10px]">
            <p>Name : {item?.name}</p>
            <p>State : {item?.state}</p>
            <p>Location : {item?.location}</p>
            <p>River : {item?.river}</p>
            <p>Height : {item?.height}</p>
            <p>Date of construction : {item?.date_of_construction}</p>
          </div>
        );
      })}
    </div>
  );
}

export default page;
