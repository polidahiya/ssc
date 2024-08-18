import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/dances.json");

  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-black text-white">
      {data?.states?.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-slate-800 p-[10px] flex flex-col items-center"
          >
            <p className="mb-[20px]">{item?.state}</p>
            <div className="">
              Folk :{" "}
              {item?.dances?.folk?.map((j, key) => {
                return <span key={key}>{j} , </span>;
              })}
            </div>
            <div className="">
              Traditional :{" "}
              {item?.dances?.traditional?.map((j, key) => {
                return <span key={key}>{j}</span>;
              })}
            </div>
            <div className="">
              Classic :{" "}
              {item?.dances?.classic?.map((j, key) => {
                return <span key={key}>{j}</span>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default page;
