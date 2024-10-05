"use client";
import React, { useState } from "react";
import styles from "@/app/styles/Modal.module.css";
import Glow from "./Glow";

export default function Modal({ open, setOpen }) {
  const [message, setMessage] = useState();
  const messages = [
    "Bring a new product to market 🚀",
    "Scale or revamp an existing platform 📈",
    "Rescue my project 🔥",
    "Something else entirely…👽",
  ];
  if (!open) {
    return <></>;
  }
  return (
    <div className="fixed top-0 left-0 w-full pt-[50px] z-10 flex justify-center items-center bg-black overflow-y-scroll overflow-x-hidden py-2">
      <div className="glassmorphism w-[90%] max-w-[1600px] h-[90%s] rounded-[5px] flex justify-evenly items-center flex-col xl:flex-row px-4 py-10 relative">
        <img
          onClick={() => setOpen(false)}
          src="/svgs/modal/cross.svg"
          alt="cross"
          className="absolute top-[-20px] right-[-80px] cursor-pointer z-10"
        />
        <Glow className="w-[280px] h-[280px] blur-[150px] top-0 left-0 translate-x-[-50%] translate-y-[-50%]" />
        <Glow className="w-[136px] h-[136px] blur-[150px] bottom-0 right-0 translate-x-[50%] translate-y-[50%]" />
        <div className="w-full xl:w-[45%]">
          <h1 className="uppercase NunitoSans text-[40px] xl:text-[65px] font-black leading-[77px]">
            Kick off your project with us!
          </h1>
          <p className="IBMPlexSans xl:text-[18px] font-medium max-w-[511px] mt-2 leading-[24px]">
            Schedule your initial product session today. {"We’re"} here to
            assist with your specific needs.
          </p>
          <div className="w-full flex flex-wrap gap-10 mt-3 xl:mt-10">
            <div className="flex gap-5">
              <img src="./svgs/modal/phone.svg" alt="phone" />
              <div className="IBMPlexSans">
                <h1 className="text-[15px] font-bold">GIVE US A CALL</h1>
                <h2 className="text-[15px]">React out to us at</h2>
                <p className="text-[15px] font-bold">+1 (737) 313-4991</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="./svgs/modal/email.svg" alt="email" />
              <div className="IBMPlexSans">
                <h1 className="text-[15px] font-bold">EMAIL US</h1>
                <h2 className="text-[15px]">Email us at</h2>
                <p className="text-[15px] font-bold">contact@saasifylabs.com</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="./svgs/modal/phone.svg" alt="phone" />
              <div className="IBMPlexSans">
                <h1 className="text-[15px] font-bold">Our Office Location</h1>
                <h2 className="text-[15px]">Our Location</h2>
                <p className="text-[15px] font-bold">
                  5900 Balcones Dr, Unit400, Austin TX 78731, USA
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto w-fit mt-[50px] space-y-[19px]">
            <div className="flex gap-[12px] items-center">
              <div className="bg-white opacity-30 h-[1px] w-[130px]" />
              <p className="text-[18px] IBMPlexSans leading-[28.4px]">
                Contact With Us On
              </p>
              <div className="bg-white opacity-30 h-[1px] w-[130px]" />
            </div>
            <div className="flex gap-[27px] justify-center">
              <img src="./svgs/modal/facebook.svg" alt="facebook" />
              <img src="./svgs/modal/insta.svg" alt="insta" />
              <img src="./svgs/modal/linkedin.svg" alt="linkedin" />
            </div>
          </div>
        </div>
        <div className="w-full mt-10 xl:mt-0 xl:w-[45%] space-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <input
              className="bg-[#eeeeee] rounded-[10px] bg-opacity-25 IBMPlexSans xl:text-[18px] focus:outline-none font-medium p-4 w-full"
              placeholder="First Name*"
            />
            <input
              className="bg-[#eeeeee] rounded-[10px] bg-opacity-25 IBMPlexSans xl:text-[18px] focus:outline-none font-medium p-4 w-full"
              placeholder="Last Name*"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-5">
            <input
              className="bg-[#eeeeee] rounded-[10px] bg-opacity-25 IBMPlexSans xl:text-[18px] focus:outline-none font-medium p-4 w-full"
              placeholder="Email Addres*"
            />
            <input
              className="bg-[#eeeeee] rounded-[10px] bg-opacity-25 IBMPlexSans xl:text-[18px] focus:outline-none font-medium p-4 w-full"
              placeholder="Phone Number*"
            />
          </div>
          <p className="IBMPlexSans text-[18px] font-medium ml-4">
            I need assistance with:
          </p>
          <div className="space-y-1 mt-2 ml-4">
            {messages.map((mg, idx) => (
              <p
                key={idx}
                onClick={() => setMessage(mg)}
                className="bg-[#FFFFFF33] px-3 py-2 rounded-[4px] border border-[#FFFFFF33] w-fit"
              >
                {mg}
              </p>
            ))}
          </div>
          <div className="mt-2">
            <textarea
              rows={4}
              className="bg-[#FFFFFF40] px-3 py-2 rounded-[4px] w-full focus:outline-none"
              placeholder="What should we know about your project?"
              value={message}
            />
          </div>
          <button
            className={`${styles.btn} flex NunitoSans font-black xl:text-[20px] gap-2 justify-center w-full`}
          >
            <img src="./svgs/modal/send.svg" alt="send" />
            Send Information
          </button>
        </div>
      </div>
    </div>
  );
}
