import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden bg-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-w-full min-h-full absolute object-cover"
        >
          <source
            src="/video/hero.mp4"
            type="video/mp4"
            className="min-w-full min-h-full absolute object-cover "
          />
        </video>
      </div>
    </section>
  );
}
