import React from "react";
import SliderOne from "./SliderOne";

export default function Brands() {
  return (
    <div className="section-bg-client md:min-h-screen">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-32">
        <h2 className="max-w-lg mb-6 justify-center items-center text-center text-5xl md:text-7xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          CLIENTS
        </h2>
        <p className="text-base font-semibold text-center text-white md:text-lg px-8">
          We proudly showcase the diverse and impressive list of companies we
          have had the privilege of collaborating with. From industry leaders
          like Interscope and Nike, to cultural powerhouses like Def Jam, we
          have had the honor of working with over 40 of the world's top brands.
        </p>
      </div>
      <div className="items-center w-auto mx-auto md:p-8 p-4">
        <div className="text-center">
          <SliderOne />
        </div>
      </div>
    </div>
  );
}
