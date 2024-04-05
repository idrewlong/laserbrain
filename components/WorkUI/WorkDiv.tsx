import React from "react";
import VideoFrame from "./VideoFrame";
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
        {/* Frame #1 */}
        <div className="mb-2">
          <iframe
            className="w-full md:h-72 h-64 border-indigo-500/50 shadow-xl shadow-indigo-500/50 "
            src="https://www.youtube.com/embed/gQA5p6yBNIQ?si=OcywmPrUBZKu754F"
            title="Tenpin Presents: The Magic of Christmas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="pt-4 grid grid-cols-6 gap-4">
            <span className="col-start-1 col-end-3 font-bold text-xs text-white uppercase font-mono">
              Tenpin Presents: The Magic of Christmas
            </span>
            <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
              <span className="text-white shadow-sm">VFX</span>
            </span>
          </span>
        </div>

        {/* Frame #2 */}
        <div className="mb-2">
          <iframe
            className="w-full md:h-72 h-64 border-indigo-500/50 shadow-xl shadow-indigo-500/50 "
            src="https://www.youtube.com/embed/WA_vLGgb8RA?si=I5zWGOyPeoD5BWOx"
            title=" Luka Doncic | Jordan Brand"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="pt-4 grid grid-cols-6 gap-4">
            <span className="col-start-1 col-end-3 font-bold text-xs text-white uppercase font-mono">
              Luka Doncic <br></br>Jordan Brand
            </span>
            <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
              <span className="text-white shadow-sm">VFX</span>
            </span>
          </span>
        </div>

        {/* Frame #3 */}
        <div className="mb-2">
          <iframe
            className="w-full md:h-72 h-64 border-indigo-500/50 shadow-xl shadow-indigo-500/50 "
            src="https://www.youtube.com/embed/hEJjUsvXkP8?si=xOcSxU4UGuaBauvM"
            title="DC The Don - No Melody"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="pt-4 grid grid-cols-6 gap-4">
            <span className="col-start-1 col-end-3 font-bold text-xs text-white uppercase font-mono">
              DC The Don <br></br>No Melody
            </span>
            <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
              <span className="text-white shadow-sm">Director | VFX</span>
            </span>
          </span>
        </div>
        {/* Frame #4 */}
        <div className="mb-2">
          <iframe
            className="w-full md:h-72 h-64 border-indigo-500/50 shadow-xl shadow-indigo-500/50 "
            src="https://www.youtube.com/embed/GSOF9gphGrs?si=DVntk6VlXxs6zsmr"
            title="Cynthia Erivo Glowing Up"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="pt-4 grid grid-cols-6 gap-4">
            <span className="col-start-1 col-end-3 font-bold text-xs text-white uppercase font-mono">
              Cynthia Erivo <br></br> Glowing Up
            </span>
            <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
              <span className="text-white shadow-sm">Beauty</span>
            </span>
          </span>
        </div>
        {/* Frame #5 */}
        <div className="mb-2">
          <iframe
            className="w-full md:h-72 h-64 border-indigo-500/50 shadow-xl shadow-indigo-500/50 "
            src="https://www.ispot.tv/ad/qGE3/coravin-pour-yours-with-coravin"
            title="DC The Don - No Melody"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="pt-4 grid grid-cols-6 gap-4">
            <span className="col-start-1 col-end-3 font-bold text-xs text-white uppercase font-mono">
              Coravin TV Spot
            </span>
            <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
              <span className="text-white shadow-sm">Cleanup</span>
            </span>
          </span>
        </div>
        {/* Frame #6 */}
        <div className="mb-2">
          <iframe
            className="w-full md:h-72 h-64 border-indigo-500/50 shadow-xl shadow-indigo-500/50 "
            src="https://www.youtube.com/embed/5fcqEE0KZH0?si=MNDhC7DlCnBZRXY2"
            title="Esportes da Sorte World Cup TV Spot"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="pt-4 grid grid-cols-6 gap-4">
            <span className="col-start-1 col-end-3 font-bold text-xs text-white uppercase font-mono">
              Esportes da Sorte World Cup TV Spot
            </span>
            <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
              <span className="text-white shadow-sm">VFX</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
