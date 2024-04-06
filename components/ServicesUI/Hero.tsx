import React from "react";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 section-bg-services min-h-screen pt-10">
      {/* Left Side: Text Content */}
      <div className="p-24 text-white max-w-3xl flex flex-col justify-center items-center md:items-start">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-7xl uppercase font-bold">Our Services</h1>
          <p className="text-lg">
            Laserbrain VFX is a full-service production agency specializing in
            Production and Post-Production. From concept to delivery, we bring
            your vision to life with unmatched expertise and innovation.
          </p>
        </div>
      </div>

      {/* Right Side: Video */}
      <div className="flex justify-center items-center px-8">
        <video autoPlay loop muted playsInline className="rounded-xl h-full">
          <source
            src="/video/hero.mp4"
            type="video/mp4"
            className="relative object-cover"
          />
        </video>
      </div>
    </div>
  );
}
