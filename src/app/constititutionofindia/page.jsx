import React from "react";
import filedata from "@/app/modules/Readjsonfile";

async function page() {
  const data = await filedata("./public/constitution_of_india.json");

  return (
    <div className=" flex flex-col gap-[10px] p-[10px] bg-black text-white">
      {data.map((item, i) => {
        return (
          <div key={i} className=" p-[5px] bg-slate-800">
            <p className="text-[25px] ">
              <span>Article : </span>{item.article}
              <span className="ml-[20px] underline">{item.title}</span>
            </p>
            <p className="mt-[10px]">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default page;
