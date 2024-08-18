import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/riversystem.json");

  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-black text-white">
      {data?.river_systems?.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-slate-800 p-[10px] flex flex-col items-center"
          >
            <h1 className="text-2xl text-center">{item.name}</h1>
            <p className="text-lg text-center">{item.origin}</p>
            <p className="text-lg text-center mt-[10px]">{item.course}</p>
            <div className="flex w-full mt-[20px]">
              <div className="flex-1 flex flex-col border border-slate-200 p-[10px]">
                {item.major_tributaries.left?.map((tributary, i) => {
                  return <li key={i}>{tributary}</li>;
                })}
              </div>
              <div className="flex-1 flex flex-col border border-slate-200 p-[10px]">
                {item.major_tributaries.right?.map((tributary, i) => {
                  return <li key={i}>{tributary}</li>;
                })}
              </div>
            </div>
            <div className="mt-[40px]">Dams</div>
            <div>
              {item.dams.map((dam, j) => {
                return (
                  <div key={j}>
                    {dam.name} : {dam.location}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default page;
