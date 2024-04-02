import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-black">
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl">
          <a className="flex justify-center md:mx-auto mb-5" href="/">
            <img src="/laserbrain.webp" alt="" className="h-20 w-auto" />
          </a>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0 w-full md:w-auto p-3 md:px-6">
            <a
              href="/about"
              className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium uppercase"
            >
              About
            </a>

            <a
              href="/services"
              className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium uppercase"
            >
              Services
            </a>

            <a
              className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium uppercase"
              href="/work"
            >
              Work
            </a>

            <a
              href="/contact"
              className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium uppercase"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* <div className="border-b border-gray-100"></div> */}
      <div className="container flex flex-col justify-center items-center px-4 mx-auto">
        <p className=" md:pb-5 text-sm text-gray-400 font-medium text-center">
          © 2024 Laserbrain VFX All rights reserved.
        </p>
      </div>
    </footer>
  );
}
