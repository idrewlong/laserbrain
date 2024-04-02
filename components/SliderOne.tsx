"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1080 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const images = [
    { src: "/brands/defjam.webp", alt: "Dej Jam Logo" },
    { src: "/brands/apple.webp", alt: "Apple Logo" },
    { src: "/brands/coravin.webp", alt: "Coravin Logo" },
    { src: "/brands/empire.webp", alt: "Empire Logo" },
    { src: "/brands/epic.webp", alt: "Epic Logo" },
    { src: "/brands/engel&volkers.webp", alt: "Engel & Volkers Logo" },
    { src: "/brands/interscope.webp", alt: "Interscope Logo" },
    { src: "/brands/nike.webp", alt: "Nike Logo" },
    { src: "/brands/rca.webp", alt: "RCA Logo" },
    { src: "/brands/rostrum.webp", alt: "Rostrum Logo" },
    { src: "/brands/universal.webp", alt: "Universal Logo" },
    { src: "/brands/warner.webp", alt: "Warner Music Group Logo" },
  ];

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto center-mode",
  };

  if (isLargeScreen) {
    settings.slidesToShow = 6;
  } else if (isMediumScreen) {
    settings.slidesToShow = 5;
  } else if (isSmallScreen) {
    settings.slidesToShow = 3;
  }

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="w-16 h-16 rounded bg-indigo-50 sm:w-24 sm:h-24">
              <Image
                priority
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="rounded-2xl p-2 items-center"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderOne;
