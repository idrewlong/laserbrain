import React from "react";

const Cta = () => {
  return (
    <div className="flex items-center justify-center mt-12 md:mt-0 ">
      <div className="rounded-xl m-8 md:m-16 border border-indigo-500/50 shadow-xl shadow-indigo-500/50 p-4 md:p-16 space-y-6 items-center text-center">
        <h1 className="font-bold text-3xl md:text-6xl text-white tracking-wide uppercase">
          Work with the{" "}
          <span className="hover:underline hover:underline-offset-4">VFX </span>
          expert you need
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl px-18">
          Connect with Laserbrain VFX to increase your sales, make your website
          stand out, and more
        </p>
        <div className="mt-4">
          <a href="/contact">
            <button className="rounded bg-gradient-to-br from-purple-400 to-sky-300 shadow-lg uppercase font-bold shadow-indigo-500/50 text-white text-lg py-2 px-6 hover:opacity-80 transition duration-300">
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
