"use client";

import Image from "next/image";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import About from "./components/About";
import Prices from "./components/Prices";
import { useState } from "react";
import Link from "next/link";
import Contact from "./components/Contact";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY !== 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const navItemStyle =
    "hover:text-gold transition-all duration-500 cursor-pointer";

  return (
    <div className="h-fit w-screen text-white" id="page">
      <nav
        className={`h-20 max-md:hidden z-50 w-screen flex items-center justify-center fixed top-0 left-0 ${
          // isScrolled ? "bg-white text-black" : "bg-black text-white"
          "bg-black text-white"
        } transition-all duration-500 bg-opacity-80 backdrop-blur-sm`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
        id="TopBar"
      >
        <Link href="#banner" className="absolute left-32" id="navBarLogo">
          <Image
            alt="logo"
            width={1000}
            height={1000}
            src="/images/logo2.png"
            className="h-12 w-fit object-contain"
          />
        </Link>
        <ul className="w-[60%] h-full flex gap-28 items-center justify-center font-semibold">
          <li className={navItemStyle}>
            <Link href="#about">Bemutatkozás</Link>
          </li>
          <li className={navItemStyle}>
            <Link href="#prices">Edzések és díjak</Link>
          </li>
          <li className={navItemStyle}>
            <Link href="#contact">Kapcsolat</Link>
          </li>
          {/* <li className={navItemStyle}>FB IN EM</li> */}
        </ul>
      </nav>

      <div
        className="lg:hidden fixed z-50 top-0 left-0 w-screen h-20 flex items-center bg-dark bg-opacity-90 backdrop-blur-lg"
        id="TopBar"
      >
        <div
          className="absolute flex flex-col gap-2 right-6 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`h-1 rounded-full bg-white transition-all duration-500 ${
              isOpen ? "w-12 -rotate-45 mt-4" : "w-10 -rotate-0 mt-0"
            }`}
          />
          <div
            className={`h-1 w-10 rounded-full transition-all duration-500 ${
              isOpen ? "bg-transparent" : "bg-white"
            }`}
          />
          <div
            className={`h-1 rounded-full bg-white transition-all duration-500 ${
              isOpen ? "w-12 rotate-45 -mt-6" : "w-10 rotate-0 -mt-0"
            }`}
          />
        </div>
        <Link
          href="#banner"
          className="lg:hidden w-fit fixed h-fit left-6 mt-1 z-50"
          id="navBarLogo"
          onClick={() => setIsOpen(false)}
        >
          <Image
            alt="logo"
            width={1000}
            height={1000}
            src="/images/logo2.png"
            className="h-[5.5rem] w-fit object-contain"
          />
        </Link>
      </div>

      <nav
        className={`lg:hidden h-screen z-40 w-screen flex items-center justify-center fixed top-0 ${
          isOpen ? "left-0" : "left-[100vw]"
        } transition-all duration-500 bg-opacity-80 bg-dark backdrop-blur-sm`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <ul className="w-[80%] h-full mx-auto flex flex-col gap-12 justify-center font-semibold text-3xl">
          <li className={navItemStyle} onClick={() => setIsOpen(false)}>
            <Link href="#about">Bemutatkozás</Link>
          </li>
          <li className={navItemStyle} onClick={() => setIsOpen(false)}>
            <Link href="#prices">Edzések és díjak</Link>
          </li>
          <li className={navItemStyle} onClick={() => setIsOpen(false)}>
            <Link href="#contact">Kapcsolat</Link>
          </li>
          {/* <li className={navItemStyle}>FB IN EM</li> */}
        </ul>
      </nav>

      {/* snap-y snap-mandatory */}
      <main className="h-screen scroll-smooth bg-bg">
        <div className="snap-always snap-center" id="banner">
          <Banner />
        </div>
        <div className="snap-always snap-start" id="about">
          <About />
        </div>
        <div className="snap-always snap-center" id="prices">
          <Prices />
        </div>
        <div className="snap-always snap-center" id="contact">
          <Contact />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
