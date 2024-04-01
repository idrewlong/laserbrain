import React from "react";

export default function Director() {
  return (
    <div className="section-bg-about min-h-screen py-24 sm:py-32">
      <h2 className="max-w-lg mb-6 justify-center items-center text-center text-5xl md:text-7xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
        ABOUT US
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-ap_dark_gray uppercase">
                About Us
              </h2> */}
              <p className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl uppercase">
                LaserBrain VFX IS AN INDEPENDENT, CREATIVELY DRIVEN FULL-SERVICE
                VIDEO PRODUCTION COMPANY DESIGNED TO TAKE A PROJECT FROM CONCEPT
                TO PACKAGING, ENSURING THAT OUR CLIENT'S VISION BECOMES A
                REALITY.
              </p>
              <div className="mt-6">
                <a
                  className="px-4 py-2 bg-gradient-to-br from-purple-400 to-sky-300 rounded-md shadow-md hover:shadow-blue-400 hover:shadow-sm uppercase font-bold"
                  href="/about"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div>
            <video
              className="rounded-2xl shadow p-1 mt-8"
              autoPlay
              loop
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src="/video/director.mp4" data-wf-ignore="true" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
