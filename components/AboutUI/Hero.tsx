import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 px-8 md:space-y-0">
      {/* About Section */}
      <div className="text-center">
        <h1 className="text-white text-7xl font-bold uppercase pt-8">About</h1>
        <div className="max-w-4xl text-white mt-8 text-center text-lg md:text-left mb-24">
          <p className="mb-8">
            Laserbrain VFX is a visual effects company based in Dallas, Texas,
            with routes in the Bay and Los Angelas, California. As a
            full-service visual effects house, Laserbrain VFX has the
            versatility to provide high-quality visual effects regardless of the
            size or scope of the project.
          </p>
          <p>
            Founded in 2021 by Ariel Porta, Laserbrain VFX comprises of a
            network of American film directors, producers, and VFX supervisors
            who have delivered work on commercial projects with companies such
            as Xfinity, Apple, Interscope, Coravin, Nike, RCA, & many more.
          </p>
          <div className="flex flex-col justify-center items-center mt-8">
            <a
              href="/work"
              className="px-4 py-2 inline-block rounded bg-gradient-to-br from-purple-400 to-sky-300 hover:opacity-80"
            >
              <button>View Work</button>
            </a>
          </div>
        </div>
      </div>

      {/* Name and Image Section */}
      <div className="flex flex-col items-center text-white text-center md:text-left space-y-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl uppercase font-bold">
          Ariel Porta
        </h1>
        <img
          src="/ariel.webp"
          alt="Laserbrain"
          className="mt-4 w-64 h-auto rounded-md"
        />
        <h1 className="text-xl font-bold uppercase">
          Director & Visual Effects Artist
        </h1>
        <p className="mt-4 text-lg">
          a distinguished videographer celebrated for his exceptional expertise
          in directing and visual effects. His illustrious career includes
          crafting compelling content for local artists in the Bay Area as well
          as renowned personalities in Los Angeles. Ariel's work is marked by
          its ingenuity, precision, and profound impact. Proficient across
          various tools such as Adobe Premiere, After Effects, and Blender, he
          showcases remarkable versatility in executing intricate visual effects
          with finesse. Opting for passion over convention, Ariel transitioned
          from a career in mechanical engineering to pursue videography, where
          his competitive spirit and commitment to perfection have thrived.
        </p>
        <p className="mt-4 text-lg">
          Ariel's portfolio showcases collaborations with esteemed athletes such
          as Christian McCaffrey and Luka Dončić, as well as music industry
          luminaries like Khalid, Avril Lavigne, and Future. These partnerships
          underscore his adaptability and creativity across a wide spectrum of
          projects. In addition to his technical prowess, Ariel is renowned for
          his dynamic storytelling approach. He aspires to craft narratives that
          resonate deeply on a personal level while also delivering tangible
          results for businesses and individuals alike. Ariel's unwavering
          commitment to excellence and innovation continues to propel his
          journey, establishing him as a pivotal figure in the realms of
          videography and visual storytelling.
        </p>
      </div>
    </div>
  );
}
