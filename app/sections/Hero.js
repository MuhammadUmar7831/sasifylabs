"use client";
import React, { useState } from "react";
import Glow from "../components/Glow";
import styles from "@/app/styles/Hero.module.css";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState();
  return (
    <>
      {/* <Glow className="top-[-30%] left-[100px]" /> */}
      {/* header for laptop screens */}
      <header
        className={`hidden boxystyle mx-auto lg:flex justify-between items-center py-[50px] 2xl:px-0`}
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
            className="bg-[#761CC4] rounded-full w-fit p-2 cursor-pointer z-10 fixed"
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
            className="bg-[#761CC4] rounded-full w-fit p-2 cursor-pointer fixed"
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
            <nav className="flex items-center bg-black  h-screen p-24 pt-52">
              <ul className="flex flex-col w-fit gap-5 text-lg IBMPlexSans">
                <li onClick={() => setMenuOpen(false)}>
                  <a href="#about" className="text-[30px] text-white font-bold">
                    About
                  </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <a
                    href="#ourprocess"
                    className="text-[30px] text-white font-bold"
                  >
                    Our Process
                  </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <a
                    href="#portfolio"
                    className="text-[30px] text-white font-bold"
                  >
                    Portfolio
                  </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <a
                    href="#pricing"
                    className="text-[30px] text-white font-bold"
                  >
                    Pricing
                  </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <a
                    href="#clientlove"
                    className="text-[30px] text-white font-bold"
                  >
                    {"Client's Love"}
                  </a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <a href="#faqs" className="text-[30px] text-white font-bold">
                    FAQs
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* logo for mobile & tablet */}
      <div className="flex lg:hidden mx-4">
        <img src="/svgs/logo.svg" alt="logo" />
      </div>

      <section className="boxystyle sectionGap mx-4 xl:mx-auto">
        <h1 className="textGradient NunitoSans text-[40px] md:text-[65px] font-black lg:max-w-[800px] md:leading-[68px] uppercase">
          Kickstart Your Journey with Our MVP Launchpad.
        </h1>
        <p className="my-5 IBMPlexSans lg:w-[800px] text-[18px] font-medium md:leading-[32px]">
          Fast-track your digital product development at SaaSify Labs. We
          specialize in turning your SaaS ideas into market-ready products in
          just 16 weeks.
        </p>
        <button className={`btn`}>Get Started</button>
        <div className="hidden xl:flex justify-end px-20 relative mt-10 bg-slate-50">
          <div className="verticalDivider h-[583px] bottom-0 right-[340px] absolute" />
          <div className="verticalDivider h-[500px] bottom-0 right-[240px] absolute" />
          <div className="verticalDivider h-[459px] bottom-0 right-[140px] absolute" />
          <div className="absolute flex items-end bottom-0 right-[0px]">
            <img
              src="./svgs/scrolllerCircle.svg"
              alt="scrolllerCircle"
              className="p-4 spin"
            />
            <div className="verticalDivider h-[366px]" />
          </div>
        </div>
      </section>

      {/* <!-- trusted by --> */}
      <div className="sectionDivider" />
      <section className="sectionGap w-[80%] xl:w-[60%] overflow-x-hidden mx-auto">
        <h1 class="heading">
          <span>Trusted by</span>
          <span class="textGradient"> Innovators and Leaders</span>
        </h1>
        <div className={`${styles.scrollingWrapper} mt-10`}>
          <div className={`${styles.scrollingContent}`}>
            <img src="./svgs/stera.svg" alt="stera" />
            <img src="./svgs/leadQuiz.svg" alt="leadQuiz" />
            <img src="./svgs/lifeInc.svg" alt="lifeInc" />
            <img src="./svgs/onSite.svg" alt="onSite" />
            <img src="./svgs/pixcile.svg" alt="pixcile" />
            <img src="./svgs/smartAnswers.svg" alt="smartAnswers" />
          </div>
          {/*duplicate*/}
          <div className={`${styles.scrollingContent}`}>
            <img src="./svgs/stera.svg" alt="stera" />
            <img src="./svgs/leadQuiz.svg" alt="leadQuiz" />
            <img src="./svgs/lifeInc.svg" alt="lifeInc" />
            <img src="./svgs/onSite.svg" alt="onSite" />
            <img src="./svgs/pixcile.svg" alt="pixcile" />
            <img src="./svgs/smartAnswers.svg" alt="smartAnswers" />
          </div>
        </div>
      </section>
      <div className="sectionDivider" />
    </>
  );
}
