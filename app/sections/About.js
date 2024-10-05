import React from "react";
import Design from "../components/Design";

export default function About() {
  return (
      <section id="about" className="sectionGap sectionPadding relative">
        <Design className="top-0 left-0" />
        <h1 class="heading ">
          <span>About</span>
          <span class="textGradient"> Us</span>
        </h1>
        <p class="mx-auto IBMPlexSans text-center text-[18px] mt-5 max-w-[1016px] leading-[30px]">
          We help entrepreneurs and business leaders build and launch innovative
          custom software solutions to the market across a range of verticals &
          industries. We can help you turn your vision into a successful product
          together, whether it&aposs in the form of a Minimum Viable Product,
          UX/UI services, full product custom software development or help to
          scale your company.
        </p>
        <p class="mx-auto IBMPlexSans text-center text-[18px] mt-5 max-w-[1151px] leading-[30px]">
          <strong>Vision:</strong> We aim to be the global partner of choice,
          transforming ideas into leading digital products that advance
          industries and drive innovation.
          <strong>Mission:</strong>{" "}
          {
            "We empower startups to launch market-ready SaaS products swiftly. Our MVP Launchpad Package, tailored for Silicon Valley's innovators and beyond, ensures timely, budget-aligned launches without scope creep."
          }
        </p>
        <div class="flex justify-center flex-col md:flex-row gap-2 md:gap-10 mt-10">
          <button class="btn">Realize Your Vision</button>
          <button class="btn">Explore Our Services</button>
        </div>
      </section>
  );
}
