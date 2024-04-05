import React from "react";

export default function VideoFrame() {
  return (
    <div className="">
      <iframe
        className="w-full md:h-72 h-64 border-indigo-500/50 shadow-xl shadow-indigo-500/50 "
        src="https://www.youtube.com/embed/gQA5p6yBNIQ?si=OcywmPrUBZKu754F"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
