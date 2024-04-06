import React from "react";
import data from "./data";

export default function WorkDiv() {
  return (
    <div className="min-h-screen section-bg-contact">
      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="text-white text-5xl md:text-7xl uppercase font-bold">
          Portfolio
        </h1>
      </div>
      <div className="mt-4 grid grid-cols-1 space-y-8 space-x-0 md:space-x-8 md:space-y-0 md:grid-cols-3 mx-auto px-8">
        {data.map((item, index) => (
          <div key={index} className="mb-2">
            <iframe
              className="w-full md:h-72 h-64 border-indigo-500/50 shadow-xl shadow-indigo-500/50"
              src={item.link}
              title={item.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <span className="pt-4 grid grid-cols-6 gap-4">
              <span className="col-start-1 col-end-3 font-bold text-xs text-white uppercase font-mono">
                {item.title}
              </span>
              <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                <span className="text-white shadow-sm text-xs">
                  {item.category}
                </span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
