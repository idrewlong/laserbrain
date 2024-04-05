import React from "react";

export default function Contact() {
  return (
    <div className="section-bg-contact">
      <div className="max-w-xl mx-auto rounded-xl my-8 p-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl uppercase font-bold text-white">
          Contact
        </h1>
        <p className="mt-3 text-white mb-8 text-center">
          You can reach me via email at{" "}
          <a className="hover:underline" href="mailto:ariel@laserbrainvfx.com">
            ariel@laserbrainvfx.com
          </a>{" "}
          or by using the form below:
        </p>
        <section className="grid grid-cols-1 gap-5 border border-indigo-500/50 shadow-xl shadow-indigo-500/50">
          <div className="flex items-center justify-center mx-auto max-w-2xl p-4">
            <div className="text-center">{/* <Contact_Form /> */}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
