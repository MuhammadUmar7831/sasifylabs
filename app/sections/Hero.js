"use client";
import React, { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState();
  return (
    <>
      {/* header for laptop screens */}
      <header
        className={`hidden lg:flex justify-between items-center py-[50px] px-[35px] xl:px-[70px]`}
      >
        {/* <!-- logo --> */}
        <div>
          <img src="/svgs/logo.svg" alt="logo" />
        </div>

        <nav className="flex items-center">
          <ul className="flex w-fit gap-10 text-lg IBMPlexSans">
            <li>
              <a href="#about" className="text-[14px] xl:text-[17px]">
                About
              </a>
            </li>
            <li>
              <a href="#ourprocess" className="text-[14px] xl:text-[17px]">
                Our Process
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-[14px] xl:text-[17px]">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-[14px] xl:text-[17px]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#clientlove" className="text-[14px] xl:text-[17px]">
                {"Client's Love"}
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-[14px] xl:text-[17px]">
                FAQs
              </a>
            </li>
          </ul>
        </nav>
        <button className={`btn`}>Contact Us</button>
      </header>
      {/* header for mobile & tablet */}
      <header className="relative w-full lg:hidden flex justify-end p-[20px] md:p-[35px] z-10">
        {menuOpen ? (
          <div
            onClick={() => setMenuOpen(false)}
            className="glassmorphism rounded-full w-fit p-2 cursor-pointer z-10 fixed"
          >
            <img
              src="/svgs/cross-menu.svg"
              atl="burger"
              className="w-10 h-10 p-2"
            />
          </div>
        ) : (
          <div
            onClick={() => setMenuOpen(true)}
            className="glassmorphism rounded-full w-fit p-2 cursor-pointer fixed"
          >
            <img
              src="/svgs/burger-menu.svg"
              atl="burger"
              className="w-10 h-10"
            />
          </div>
        )}
        {menuOpen && (
          <div className="top-0 left-0 w-full h-full fixed">
            <nav className="flex items-center glassmorphism  h-screen p-24 pt-52">
              <ul className="flex flex-col w-fit gap-5 text-lg IBMPlexSans">
                <li>
                  <a href="#about" className="text-[26px]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#ourprocess" className="text-[26px]">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-[26px]">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-[26px]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#clientlove" className="text-[26px]">
                    {"Client's Love"}
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-[26px]">
                    FAQs
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <section className="mx-4 md:pl-[100px] xl:pl-[135px]">
        <h1 className="textGradient NunitoSans text-[40px] md:text-[65px] font-black lg:max-w-[800px] uppercase">
          Kickstart Your Journey with Our MVP Launchpad.
        </h1>
        <p className="my-5 IBMPlexSans lg:w-[800px] text-[18px] font-medium">
          Fast-track your digital product development at SaaSify Labs. We
          specialize in turning your SaaS ideas into market-ready products in
          just 16 weeks.
        </p>
        <button className={`btn`}>Get Started</button>
      </section>

      {/* <!-- trusted by --> */}
      <section className="sectionGap overflow-x-hidden">
        <h1 class="heading">
          <span>Trusted by</span>
          <span class="textGradient"> Innovators and Leaders</span>
        </h1>
        <div class="flex justify-center mt-5 gap-[50px]">
          <img src="./svgs/stera.svg" alt="stera" />
          <img src="./svgs/leadQuiz.svg" alt="leadQuiz" />
          <img src="./svgs/lifeInc.svg" alt="lifeInc" />
          <img src="./svgs/onSite.svg" alt="onSite" />
          <img src="./svgs/pixcile.svg" alt="pixcile" />
          <img src="./svgs/smartAnswers.svg" alt="smartAnswers" />
        </div>
      </section>
    </>
  );
}
