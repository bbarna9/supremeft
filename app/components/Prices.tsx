import React from "react";

const Prices = () => {
  return (
    <div
      className="w-screen bg-bg h-screen max-md:h-fit max-md:pt-32 flex flex-col items-center justify-center"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <h2 className="text-4xl font-semibold text-gold mb-20">
        Edzések és áraink
      </h2>
      <div>
        <p className="mb-3 w-[40vw] text-justify max-md:w-[90vw] max-md:mx-auto">
          Egyesületünknél heti kétszer vannak edzések, emellett versenyre való
          felkészüléskor gyakran tartunk extra órákat előre egyeztetett
          időpontokban, valamint jóidőben a közös sportpályai futások is
          gyakoriak.
        </p>
        <p className="mb-10 w-[40vw] text-justify max-md:w-[90vw] max-md:mx-auto">
          Az árak egy hónapra vonatkoznak, és tartalmazzák az esetleges extra
          órákat is.
        </p>
        <div className="flex flex-col gap-5 mb-10 mt-5 max-md:w-[90vw] mx-auto">
          <b className="text-gold">Edzéseink ára:</b>
          <ul className="p-0 flex flex-col gap-2">
            <li>Gyermek: 6000 Ft</li>
            <li>Felnőtt: 8000 Ft</li>
          </ul>
        </div>
        <div className="flex flex-col w-[40vw] mx-auto max-md:w-[90vw] justify-between mb-10 mt-5">
          <b className="text-gold mb-5 max-md:mb-0">Edzéseink időpontjai:</b>
          <div className="flex max-md:flex-col max-md:gap-5 max-md:mt-5 lg:justify-between">
            <div className="flex flex-col gap-5">
              <b>Hétfő</b>
              <ul className="p-0 flex flex-col gap-2">
                <li>17:00-18:00 - Gyermek edzések</li>
                <li>18:00-19:30 - Felnőtt és versenyzői edzések</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <b>Szerda</b>
              <ul className="p-0 flex flex-col gap-2">
                <li>17:00-18:00 - Gyermek edzések</li>
                <li>18:00-19:30 - Felnőtt és versenyzői edzések</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 mb-10 mt-5 max-md:w-[90vw]">
          <b className="text-gold">Helyszín:</b>
          <ul className="p-0 flex flex-col gap-2">
            <li>Balmazújváros, Veres Péter u. 5 - Forma Fitness</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Prices;
