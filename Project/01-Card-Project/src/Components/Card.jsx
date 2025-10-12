import React from "react";
import { Bookmark } from "lucide-react";

function Card({
  companyLogo,
  companyName,
  posted,
  jobTitle,
  jobType,
  salary,
  location,
}) {
  return (
    <div className="m-10 rounded-4xl w-[300px] h-[400px] bg-slate-200 shadow-md hover:shadow-2xl transition-shadow duration-300">
      <div className="text-center py-5 flex items-center justify-between px-5">
        <img
          className="w-10 border-1 p-1 h-10 rounded-full"
          src={companyLogo}
          alt={companyName}
        />
        <button className="flex items-center font-bold text-sm">
          Save <Bookmark />
        </button>
      </div>

      <div className="px-5 py-6 h-[150px] border-b-2 border-black">
        <div className="px-5 flex items-center text-center">
          <h3 className="font-bold text-medium mr-1">{companyName}</h3>
          <p className="text-[10px] mt-[7px] font-bold text-slate-400">{posted}</p>
        </div>
        <h3 className="px-5 text-xl font-bold">{jobTitle}</h3>

        <div className="py-1 px-5">
          {jobType.map((type, index) => (
            <button
              key={index}
              className="font-light text-sm bg-slate-400 py-[1px] px-[3px] rounded mr-1"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 py-6 h-[240px] flex items-center justify-between border-t-2 border-black">
        <div className="flex flex-col">
          <h3 className="font-bold">{salary}</h3>
          <p className="font-medium text-sm text-slate-400">{location}</p>
        </div>
        <button className="py-1 px-2 rounded text-center bg-black text-white">
          Apply now
        </button>
      </div>
    </div>
  );
}

export default Card;
