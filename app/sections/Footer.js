"use client"
import React, { useState } from "react";
import styles from "@/app/styles/Footer.module.css";
import Modal from "../components/Modal";

export default function Footer() {
const [open, setOpen] = useState(false);
  return (
    <footer className="sectionGap sectionPadding relative">
      {<Modal open={open} setOpen={setOpen}/>}
      <div className="flex justify-between items-center">
        <h1 className="text-[70px] lg:text-[120px] font-black textGradient">{"Let's"} Talk</h1>
        <div className={`${styles.getaQuoteBtn}`}>
          <button onClick={()=>setOpen(true)}>Get a Quote</button>
        </div>
      </div>
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
