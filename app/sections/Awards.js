import React from "react";
import Design from "../components/Design";

export default function Awards() {
  return (
    <section className="sectionGap relative pt-[100px]">
      <Design className="top-[0px] left-0" />
      <Design className="top-[0px] right-0 scale-x-[-1]" />
      <h1 className="heading">
        <span>Awards</span>
        <span className="textGradient"> & Recognition</span>
      </h1>
      <p className="headingBottomText lg:w-[1016px]">
        {
          "Celebrated for excellence in digital product development, we've earned top honors from industry leaders. Explore our accolades that showcase our dedication to web and mobile innovation."
        }
      </p>
      <div className="boxystyle mx-auto flex gap-4 flex-wrap justify-center mt-10 grayscale filter">
        <div className="glassmorphism rounded-md w-[180px] p-4">
          <img src="./img/awards/clutch.png" alt="clutch" />
        </div>
        <div className="glassmorphism rounded-md w-[180px] p-4">
          <img src="./img/awards/topDev.png" alt="clutch" />
        </div>
        <div className="glassmorphism rounded-md w-[180px] p-4">
          <img src="./img/awards/clutch.png" alt="clutch" />
        </div>
        <div className="glassmorphism rounded-md w-[180px] p-4">
          <img src="./img/awards/topSoftDev.png" alt="clutch" />
        </div>
        <div className="glassmorphism rounded-md w-[180px] p-4">
          <img src="./img/awards/appFutura.png" alt="clutch" />
        </div>
        <div className="glassmorphism rounded-md w-[180px] p-4">
          <img src="./img/awards/manifest.png" alt="clutch" />
        </div>
        <div className="glassmorphism rounded-md w-[180px] p-4">
          <img src="./img/awards/designRush.png" alt="clutch" />
        </div>
        <div className="glassmorphism rounded-md w-[180px] p-4">
          <img src="./img/awards/agencyVista.png" alt="clutch" />
        </div>
        <div className="glassmorphism rounded-md w-[180px] p-4">
          <img src="./img/awards/trustPilot.png" alt="clutch" />
        </div>
        <div className="glassmorphism rounded-md w-[180px] p-4">
          <img src="./img/awards/goodForms.png" alt="clutch" />
        </div>
      </div>
    </section>
  );
}
