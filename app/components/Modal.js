import React from "react";
import styles from "@/app/styles/Modal.module.css";

export default function Modal({ open, setOpen }) {
  if (!open) {
    return <></>;
  }
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 flex justify-center items-center bg-black">
      <img
        onClick={() => setOpen(false)}
        src="/svgs/modal/cross.svg"
        alt="cross"
        className="absolute top-2 right-2 cursor-pointer"
      />
      <div className="glassmorphism w-[90%] h-[90%s] rounded-[5px] flex justify-evenly items-center flex-col xl:flex-row p-4 z-20">
        <div className="w-full xl:w-[45%]">
          <h1 className="uppercase NunitoSans text-[40px] xl:text-[60px] font-black leading-[77px]">
            Kick off your project with us!
          </h1>
          <p className="IBMPlexSans xl:text-[18px] leading-[24px]">
            Schedule your initial product session today. {"We’re"} here to
            assist with your specific needs.
          </p>
          <div className="w-full flex flex-wrap gap-5 mt-3 xl:mt-10">
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
        </div>
        <div className="w-full xl:w-[45%]">
          <div className="flex gap-5">
            <input
              className="bg-[#eeeeee] rounded-[10px] bg-opacity-25 IBMPlexSans xl:text-[18px] font-medium px-2 py-2"
              placeholder="First Name*"
            />
            <input
              className="bg-[#eeeeee] rounded-[10px] bg-opacity-25 IBMPlexSans xl:text-[18px] font-medium px-2 py-2"
              placeholder="Last Name*"
            />
          </div>
          <div className="flex gap-5 mt-5">
            <input
              className="bg-[#eeeeee] rounded-[10px] bg-opacity-25 IBMPlexSans xl:text-[18px] font-medium px-2 py-2"
              placeholder="Email Addres*"
            />
            <input
              className="bg-[#eeeeee] rounded-[10px] bg-opacity-25 IBMPlexSans xl:text-[18px] font-medium px-2 py-2"
              placeholder="Phone Number*"
            />
          </div>
          <p className="IBMPlexSans text-[18px] mt-5 font-medium">
            I need assistance with:
          </p>
          <div className="space-y-1 mt-2">
            <p className="bg-[#eeeeee] px-3 py-2 rounded-[4px] border bg-opacity-25 w-fit">
              Bring a new product to market 🚀
            </p>
            <p className="bg-[#eeeeee] px-3 py-2 rounded-[4px] border bg-opacity-25 w-fit">
              Scale or revamp an existing platform 📈
            </p>
            <p className="bg-[#eeeeee] px-3 py-2 rounded-[4px] border bg-opacity-25 w-fit">
              Rescue my project 🔥
            </p>
            <p className="bg-[#eeeeee] px-3 py-2 rounded-[4px] border bg-opacity-25 w-fit">
              Something else entirely…👽
            </p>
          </div>
          <div className="mt-2">
            <textarea
              className="bg-[#eeeeee] px-3 py-2 rounded-[4px] border bg-opacity-25 w-full"
              placeholder="What should we know about your project?"
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
