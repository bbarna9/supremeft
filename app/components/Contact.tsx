import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col bg-dark items-center justify-center"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <h2 className="text-4xl font-semibold text-gold mb-20">Kapcsolat</h2>
      <div className="max-md:w-screen">
        <p className="mb-10 w-[35vw] max-md:w-[90vw] max-md:mx-auto text-justify">
          Bármilyen kérdés esetén, amire nem találtál választ az oldalon
          nyugodtan fordulj hozzánk a következő elérhetőségeink bármelyikén:
        </p>
        <ul className="p-0 max-md:mx-auto max-md:w-[90vw]">
          <li className="flex items-center mb-2">
            <div className="w-4 flex items-center justify-center mr-4">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <p className="">papplaszlodse@gmail.com</p>
          </li>
          <li className="">
            <Link
              href="https://www.facebook.com/supremefightteamoriginal"
              className="flex items-center mb-2"
            >
              <div className="w-4 flex items-center justify-center mr-4">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <p className="">supremefightteamoriginal</p>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/supremefightteamoriginal/"
              className="flex items-center mb-2"
            >
              <div className="w-4 flex items-center justify-center mr-4">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <p className="">@supremefightteamoriginal</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
