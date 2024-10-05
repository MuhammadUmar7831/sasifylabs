"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "@/app/styles/Footer.module.css";
import Modal from "../components/Modal";
import Glow from "../components/Glow";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const quoteRef = useRef(null);

  // Split the button text into letters
  // const buttonText = "GET A QUOTE.";
  const getA = "GET A".split("");
  const quote = "QUOTE".split("");

  // Function to animate on hover
  const handleMouseEnter = () => {
    const duration = 0.2;
    const stagger = 0.02;
    const y = 8;
    gsap.fromTo(
      quoteRef.current.children,
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y,
        stagger,
        duration,
        ease: "power1.out",
        onComplete: () => {
          gsap.fromTo(
            quoteRef.current.children,
            {
              opacity: 0,
              y: -y,
            },
            {
              opacity: 1,
              y: 0,
              stagger,
              duration,
              ease: "bounce.out",
            }
          );
        },
      }
    );
  };

  return (
    <footer className="sectionGap sectionPadding boxystyle mx-auto relative">
      {<Modal open={open} setOpen={setOpen} />}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-0">
        <h1
          className={`text-[50px] md:text-[70px] lg:text-[120px] NunitoSans font-black textGradient ${styles.largeText}`}
        >
          {"Let's"} Talk.
        </h1>

        {/* Get a Quote Button with GSAP Animation */}
        <div
          className={`${styles.getaQuoteBtn} transition-colors duration-300 relative group`}
        >
          <Glow className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity w-[150px] h-[150px]" />
          <button
            onMouseEnter={handleMouseEnter}
            className="transition-colors NunitoSans duration-300 text-black"
            onClick={() => setOpen(true)}
          >
            <span ref={quoteRef}>
              {/* Render each letter */}
              {getA.map((letter, index) => (
                <span
                  className="text-[#7B1ECC] group-hover:text-white"
                  key={index}
                  style={{ display: "inline-block" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
              <div />
              {quote.map((letter, index) => (
                <span
                  className="text-[#7B1ECC] group-hover:text-white"
                  key={index}
                  style={{ display: "inline-block" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </button>
        </div>
      </div>

      {/* Rest of the footer */}
      <div className="flex mt-10 justify-between flex-col lg:flex-row border-b pb-5 gap-5">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="flex gap-2">
            <div className={`${styles.socialMediaBtn}  p-1 w-fit rounded-full`}>
              <div className="rounded-full bg-black p-2 w-10 h-10 flex justify-center items-center">
                <img src="./svgs/instagram.svg" alt="instagram" />
              </div>
            </div>
            <div className={`${styles.socialMediaBtn} p-1 w-fit rounded-full`}>
              <div className="rounded-full bg-black p-2 w-10 h-10 flex justify-center items-center">
                <img src="./svgs/linkedin.svg" alt="linkedin" />
              </div>
            </div>
            <div className={`${styles.socialMediaBtn} p-1 w-fit rounded-full`}>
              <div className="rounded-full bg-black p-2 w-10 h-10 flex justify-center items-center">
                <img src="./svgs/facebook.svg" alt="facebook" />
              </div>
            </div>
          </div>
          <span className="NunitoSans text-[25px] font-black">
            +1 (737) 313-4991
          </span>
        </div>
        <div className="IBMPlexSans flex gap-2 items-end justify-end text-[17px] lg:w-[50%]">
          <span className="text-3xl">✌️</span>
          <p>
            <a href="mailto:contact@saasifylabs.com">contact@saasifylabs.com</a>{" "}
            Ready to advance your next digital or SaaS product? {"We’re"} just
            an email {"away—let's"} discuss your project ideas.
          </p>
        </div>
      </div>
    </footer>
  );
}
