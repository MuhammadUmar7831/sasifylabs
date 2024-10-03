"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "@/app/styles/Footer.module.css";
import Modal from "../components/Modal";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const quoteRef = useRef(null);

  // Split the button text into letters
  const buttonText = "Get a Quote";
  const letters = buttonText.split("");

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
    <footer className="sectionGap sectionPadding relative">
      {<Modal open={open} setOpen={setOpen} />}
      <div className="flex justify-between items-center">
        <h1 className="text-[70px] lg:text-[120px] font-black textGradient">
          {"Let's"} Talk
        </h1>

        {/* Get a Quote Button with GSAP Animation */}
        <div
          className={`${styles.getaQuoteBtn} transition-colors duration-300`}
          onMouseEnter={handleMouseEnter}
        >
          <button className="transition-colors duration-300" onClick={() => setOpen(true)}>
            <span ref={quoteRef}>
              {/* Render each letter */}
              {letters.map((letter, index) => (
                <span key={index} style={{ display: "inline-block" }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </button>
        </div>
      </div>

      {/* Rest of the footer */}
      <div className="flex mt-10 justify-between flex-col lg:flex-row border-b pb-5 gap-5">
        <div className="flex items-center gap-2">
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
