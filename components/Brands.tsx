import React from "react";

export default function Brands() {
  return (
    <div className="section-bg-client min-h-screen">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 justify-center items-center text-center text-5xl md:text-7xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          CLIENTS
        </h2>
        <p className="text-base text-center text-white md:text-lg">
          we proudly showcase the diverse and impressive list of companies we
          have had the privilege of collaborating with. From industry leaders
          like Lionsgate and Nike, to cultural powerhouses like Def Jam, we have
          had the honor of working with over 40 of the world's top brands.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        {/* Logo #1 */}
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/defjam.webp"
              alt=""
              className="h-12 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo #2 */}
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/interscope.webp"
              alt=""
              className="h-12 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo #3 */}
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/rca.webp"
              alt=""
              className="h-12 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo #4 */}
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/universal.webp"
              alt=""
              className="h-12 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo #5 */}
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/nike.webp"
              alt=""
              className="h-12 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo #6 */}
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/apple.webp"
              alt=""
              className="h-10 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo #7 */}
        <div className="text-center">
          <div className="hidden md:flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/coravin.webp"
              alt=""
              className="h-12 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo #8 */}
        <div className="text-center">
          <div className="hidden md:flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/empire.webp"
              alt=""
              className="h-10 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo #9 */}
        <div className="text-center">
          <div className="hidden md:flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/engel&volkers.webp"
              alt=""
              className="h-14 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo #10 */}
        <div className="text-center">
          <div className="hidden md:flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/epic.webp"
              alt=""
              className="h-12 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo 11 */}
        <div className="text-center">
          <div className="hidden md:flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/rostrum.webp"
              alt=""
              className="h-12 hover:scale-105 duration-200"
            />
          </div>
        </div>
        {/* Logo #12 */}
        <div className="text-center">
          <div className="hidden md:flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded bg-indigo-50 sm:w-24 sm:h-24">
            <img
              src="/brands/warnermusicgroup.webp"
              alt=""
              className="h-12 hover:scale-105 duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
