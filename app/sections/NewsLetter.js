import React from "react";
import styles from "@/app/styles/News.module.css";
import Glow from "../components/Glow";

export default function NewsLetter() {
  return (
    <section className="sectionPadding sectionGap pt-[80px]">
      <div className="boxystyle w-full glassmorphism rounded-[5px] py-10 mt-20 mx-auto relative">
        <Glow className="top-[0px] right-[0%] translate-y-[-50%] translate-x-[50%]" />
        <Glow className="bottom-[0px] left-[0px] translate-x-[-50%] translate-y-[50%] blur-[190px] w-[200px] h-[200px]" />
        <h1 className="font-black text-center text-[20px] md:text-[40px] NunitoSans">
          <span>Newsletter</span>
          <span className="textGradient"> Subscription</span>
        </h1>
        <p className="lg:w-[756px] headingBottomText leading-[28px]">
          Subscribe to our newsletter for the latest insights and updates in
          SaaS product development. Get tips, success stories, and exclusive
          content delivered straight to your inbox.
        </p>
        <div className="w-2/3 lg:w-1/2 mt-5 mx-auto space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              name="first-name"
              placeholder="First Name*"
              className="bg-white rounded-md px-6 py-4 w-full text-black focus:outline-none"
            />
            <input
              type="text"
              name="last-name"
              placeholder="Last Name*"
              className="bg-white rounded-md px-6 py-4 w-full text-black focus:outline-none"
            />
          </div>
          <input
            type="text"
            name="email-address"
            placeholder="Email Address*"
            className="bg-white rounded-md px-6 py-4 w-full text-black focus:outline-none"
          />
          <button className={`${styles.btn}`}>
            Subscribe To Our News Letter
          </button>
        </div>
        <p className="mt-5 IBMPlexSans lg:w-[756px] mx-auto text-center">
          We value your privacy: no spam, just valuable updates and industry
          insights.
        </p>
      </div>
    </section>
  );
}
