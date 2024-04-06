import React from "react";

export default function CTA() {
  return (
    <section className="section-bg-services min-h-[30rem] px-8 md:px-0">
      <div className="max-w-7xl mx-auto rounded-3xl p-5 my-8 border border-indigo-500/50 shadow-xl shadow-indigo-500/50 shadow-xl text-white text-center md:text-left ">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="max-w-3xl px-6 py-6 md:px-12">
            <h2 className="md:my-12 text-4xl md:text-5xl font-bold">
              Let's Create Something Special Together
            </h2>
          </div>
          <div className="flex justify-center md:justify-end mt-6 md:mt-0 md:p-10">
            <a
              href="/contact"
              role="button"
              className="inline-block rounded bg-gradient-to-br from-purple-400 to-sky-300 hover:opacity-90 duration-200 px-8 py-3 font-bold uppercase text-white transition md:mr-2 md:mb-0"
              data-te-ripple-init="true"
              data-te-ripple-color="light"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
