import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      className="flex flex-col justify-center w-screen h-screen"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div
        className="pl-56 max-md:pl-0 pt-44 max-md:pt-56 max-md:w-[90vw] max-md:mx-auto"
        id="bannerText"
      >
        <h1 className="font-bold text-6xl max-md:text-5xl">
          SUPREME FIGHT TEAM
        </h1>
        <h3 className="font-semibold text-3xl max-md:text-2xl mt-3 text-gold">
          Box és Kick-Box
        </h3>
      </div>
      <div className="absolute" id="bannerLogo">
        <Image
          alt="logo"
          width={1000}
          height={1000}
          src="/images/logo2_1.png"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
