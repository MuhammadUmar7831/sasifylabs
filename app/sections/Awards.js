import React from "react";

export default function Awards() {
  return (
    <section className="sectionGap">
      <h1 className="heading">
        <span>Awards</span>
        <span className="textGradient"> & Recognition</span>
      </h1>
      <p className="headingBottomText w-[1016px]">
        Celebrated for excellence in digital product development, we&aposve earned
        top honors from industry leaders. Explore our accolades that showcase
        our dedication to web and mobile innovation.
      </p>
      <div className="flex gap-5 flex-wrap justify-center mt-10 grayscale filter">
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
