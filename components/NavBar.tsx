import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 text-white p-4 flex items-center justify-between border-b-2 border-b-purple-200 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link className="hover:text-gray-600" href="/">
          Home
        </Link>
        <Link className="hover:text-gray-600" href="/about">
          About
        </Link>
        <Link className="hover:text-gray-600" href="/services">
          Services
        </Link>
        <Link className="hover:text-gray-600" href="/work">
          Work
        </Link>
      </div>

      {/* {Logo} */}
      <div className="text-xl md:font-bold text-center flex justify-center items-center">
        <Link href="/">
          <Image
            src="/laserbrain.webp"
            alt="laserbrain logo"
            width={50}
            height={50}
            className=""
          />
        </Link>
      </div>

      {/* {Mobile Menu} */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex flex-1 items-center justify-end">
        <div className="relative flex items-center gap-2 cursor-pointer">
          <Link href="/contact">
            <div className="bg-gradient-to-br from-purple-400 to-sky-300 px-4 py-2 rounded hover:opacity-80 transition duration-300">
              <span className="text-white font-bold uppercase">Contact</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
