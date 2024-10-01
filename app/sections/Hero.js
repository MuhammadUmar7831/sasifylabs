import React from "react";
import Glow from "../components/Glow";

export default function Hero() {
  return (
    <>
      <header
        className={`flex justify-between items-center py-[50px] px-[70px]`}
      >
        {/* <!-- Glows --> */}
        <Glow top="-150px" left="150px" />

        {/* <!-- logo --> */}
        <div>
          <img src="/svgs/logo.svg" alt="logo" />
        </div>

        <nav className="flex items-center">
          <ul className="flex w-fit gap-10 text-lg IBMPlexSans">
            <li>
              <a href="#about" className="text-[17px]">
                About
              </a>
            </li>
            <li>
              <a href="#ourprocess" className="text-[17px]">
                Our Process
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-[17px]">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-[17px]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#clientlove" className="text-[17px]">
                {"Client's Love"}
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-[17px]">
                FAQs
              </a>
            </li>
          </ul>
        </nav>
        <button className={`btn`}>Contact Us</button>
      </header>
      <section className="pl-[135px]">
        <h1 className="textGradient NunitoSans text-[65px] font-black max-w-[800px] uppercase">
          Kickstart Your Journey with Our MVP Launchpad.
        </h1>
        <p className="my-5 IBMPlexSans w-[800px] text-[18px] font-medium">
          Fast-track your digital product development at SaaSify Labs. We
          specialize in turning your SaaS ideas into market-ready products in
          just 16 weeks.
        </p>
        <button className={`btn`}>Get Started</button>
      </section>

      {/* <!-- trusted by --> */}
      <section className="sectionGap">
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
