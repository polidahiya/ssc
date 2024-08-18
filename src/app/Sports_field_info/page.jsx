import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/Sports_field_info.json");

  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-black text-white">
      {data?.games?.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-slate-800 p-[10px] flex flex-col items-center"
          >
            <h1 className="text-2xl">{item.game}</h1>
            <p className="text-lg text-center">{item.playground_dimension}</p>
            <p className="text-lg text-center">{item.number_of_players}</p>
            <p className="text-lg text-center">{item.instruments_used}</p>
          </div>
        );
      })}
    </div>
  );
}

export default page;
