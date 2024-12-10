import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      className="w-screen max-md:w-[90vw] max-md:mx-auto min-h-screen h-fit bg-transparent flex flex-col gap-40 py-32 items-center justify-center "
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="flex gap-16 items-center justify-center max-md:flex-col-reverse mx-auto">
        <div className="relative w-96 max-md:w-80 h-fit m-3 items-center-justify-center flex max-md:m-0">
          <div className="absolute bg-gold h-40 w-40 z-10" />
          <Image
            src="/images/old1.png"
            alt="Boxing lesson image"
            width={1000}
            height={1000}
            className="w-96 h-fit max-md:w-80 object-contain p-2 z-30"
          />
          <div className="absolute bg-gold h-40 w-40 z-10 right-0 bottom-0" />
        </div>
        <div className="flex flex-col gap-7 w-[30%] max-md:w-[90vw]">
          <h2 className="text-4xl font-semibold text-gold">
            Supreme Fight Team
          </h2>
          <p className="text-justify">
            Üdvözlünk a Supreme Fight Team kick-box klub hivatalos oldalán!
            Klubunk több évtizedes múltra tekint vissza, tagjai vagyunk a WAKO
            Magyar Kick-box Szövetségének és büszkék vagyunk rá, hogy a régió
            egyik meghatározó kick-box közössége vagyunk.
          </p>
          <p className="text-justify">
            Célunk, hogy minden korosztály számára elérhetővé tegyük a
            kick-boxot, legyen szó a fizikai fittség növeléséről, önvédelemről
            vagy versenysportokról. Nálunk a technikai tudás, a fegyelem és a
            közösségi élmény kéz a kézben jár.
          </p>
          <p className="text-justify">
            Szeretettel várunk edzéseinkre mindenkit, tapasztalattól és kortól
            függetlenül.
          </p>
        </div>
      </div>
      <div className="flex gap-16 items-center justify-center flex-row-reverse max-md:flex-col-reverse mx-auto">
        <div className="relative  max-md:w-80 w-96 h-fit m-3 items-center-justify-center flex max-md:m-0">
          <div className="absolute bg-gold h-40 w-40 z-10" />
          <div className="z-30 m-2 pt-3" id="trainer">
            <Image
              src="/images/edzo.png"
              alt="Boxing lesson image"
              width={1000}
              height={1000}
              className="w-96 h-fit max-md:w-80 object-contain"
            />
          </div>
          <div className="absolute bg-gold h-40 w-40 z-10 right-0 bottom-0" />
        </div>
        <div className="flex flex-col gap-7 w-[30%] max-md:w-[90vw]">
          <h2 className="text-4xl font-semibold text-white">Edzőnk</h2>
          <p className="text-justify">
            <b className="text-gold">Balogh Csaba</b> [X] év kick-box és több
            száz órányi edzői tapasztalattal a háta mögött mára már számos
            tanítványának segített a fejlődésében. Az edzéseken mindenkinek
            egyenlő arányú figyelmet szentel, valamint az oktatás mellett
            aktívan részt vesz minden órán, így önmagát is folyamatosan
            fejlesztve ösztönzi a többieket.
          </p>
          <p className="text-justify">
            Ha szeretnél egy tapasztalt, támogató és motiváló edzővel dolgozni,
            aki segít kihozni belőled a legjobbat, csatlakozz hozzánk, és ismerd
            meg őt személyesen az edzéseken!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
