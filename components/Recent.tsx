"use client";

import React from "react";

const Recent: React.FC = () => {
  const hoverVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    const videoElement = e.currentTarget.querySelector("video");
    if (videoElement) videoElement.play();
  };

  const hideVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    const videoElement = e.currentTarget.querySelector("video");
    if (videoElement) videoElement.pause();
  };

  return (
    <div className="section-bg relative flex min-h-screen flex-col bg-black py-24">
      <div className="min-h-28">
        <div className="mx-auto py-4">
          <h2 className="font-black text-center text-5xl md:text-7xl text-white uppercase">
            recent work
          </h2>

          <div className="gap-6 mt-8 mx-4 md:flex">
            <div
              className="md:w-1/2"
              onMouseEnter={hoverVideo}
              onMouseLeave={hideVideo}
            >
              <div className="wrap-video">
                <video className="object-cover h-96 w-full bg-black" loop>
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span className="pt-4 grid grid-cols-6 gap-4">
                <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                  bodega x new balance
                </span>
                <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                  <span className="">fashion/retail</span>
                </span>
              </span>
              <span className="block text-slate-400 text-xs uppercase font-mono">
                the trail less taken
              </span>
            </div>
            <div
              className="md:w-1/2"
              onMouseEnter={hoverVideo}
              onMouseLeave={hideVideo}
            >
              <div className="wrap-video">
                <video className="object-cover h-96 w-full bg-black" loop>
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/640fe762f883d05b8f683c6d_HOKABODEGA-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span className="pt-4 grid grid-cols-6 gap-4">
                <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                  bodega x hoka
                </span>
                <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                  <span className="">music video</span>
                </span>
              </span>
              <span className="block text-slate-400 text-xs uppercase font-mono">
                the world at large
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="/work"
          className=" font-black text-3xl md:text-7xl text-white text-center uppercase my-16 hover:bg-white hover:text-black hover:rounded-full hover:px-32"
        >
          view more
        </a>
      </div>
    </div>
  );
};

export default Recent;
