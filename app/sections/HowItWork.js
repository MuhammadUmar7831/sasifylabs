"use client";
import React from "react";
import styles from "@/app/styles/HowItWork.module.css";
import Glow from "../components/Glow";
import Design from "../components/Design";
import { motion } from "framer-motion";

// Reusable HowItWorkBox component
function HowItWorkBox({ step, heading, para, isOnRight, isLast }) {
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      x: isOnRight ? 100 : -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const grayscaleVariants = {
    hidden: { filter: "grayscale(100%)" },
    visible: {
      filter: "grayscale(0%)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="ourprocess"
      className={`w-full flex flex-wrap justify-center gap-10 ${
        isOnRight ? "flex-col xl:flex-row-reverse" : "flex-col xl:flex-row"
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        className={`glassmorphism ${styles.box} group md:max-w-[511px] mx-4 md:mx-auto xl:mx-0`}
      >
        <div className={`${styles.boxGlow} group-hover:opacity-100 `}></div>
        <div
          className={`${styles.gradient} text-[20px] md:text-[25px] w-fit rounded-lg px-[5px] py-[1px] font-black NunitoSans`}
        >
          <h3>Step-{step}</h3>
        </div>
        <h1 className="text-[25px] md:text-[35px] font-black w-[385px] leading-[36px] NunitoSans">
          {heading}
        </h1>
        <p className="md:text-[18px] font-normal mt-[8px] IBMPlexSans leading-[25.4px]">
          {para}
        </p>
      </motion.div>
      <div className={styles.howItWorkDividerSection}>
        <span className={styles.howItWorkDividerCircleOuter}>
          <span className={styles.howItWorkDividerCircleInner}></span>
        </span>
        {!isLast && (
          <motion.span
            className={styles.howItWorkDividerLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={grayscaleVariants}
          ></motion.span>
        )}
      </div>
      <div className="hidden xl:block w-[511px]"></div>
    </section>
  );
}

export default function HowItWork() {
  return (
    <section className="sectionGap relative">
      <Glow className="top-[40px] right-[-200px]" />
      <Design className="right-0 scale-x-[-1]" />
      <Design className="left-0 top-[30%]" />
      <Design className="right-0 top-[100%] scale-x-[-1]" />
      <h1 className="heading">
        <span>How It</span>
        <span className="textGradient"> Works</span>
      </h1>
      <div className="w-full mt-10">
        {steps.map((stepData, index) => (
          <HowItWorkBox
            key={index}
            step={stepData.step}
            heading={stepData.heading}
            para={stepData.para}
            isOnRight={stepData.isOnRight}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

const steps = [
  {
    step: "01",
    heading: "Defining The Product Scope",
    para: `Our journey begins with a focused, 7-day session to define the
            scope of your digital product. During this session, we align on
            vision and technical requirements, setting a solid foundation for
            development.`,
    isOnRight: false,
  },
  {
    step: "02",
    heading: "Crafting the Design Blueprint",
    para: `Our journey begins with a focused, 7-day session to define the
            scope of your digital product. During this session, we align on
            vision and technical requirements, setting a solid foundation for
            development.`,
    isOnRight: true,
  },
  {
    step: "03",
    heading: "Designing Digital Interfaces",
    para: `Using the blueprint, our design team develops the key UI/UX
            screens, ensuring that every aspect of the user interface enhances
            user interaction and functionality.`,
    isOnRight: false,
  },
  {
    step: "04",
    heading: "Product Development Execution",
    para: `With designs in place, our developers bring your digital product
            to life, utilizing advanced technologies to build robust and
            scalable solutions.`,
    isOnRight: true,
  },
  {
    step: "05",
    heading: "Testing & Deployment",
    para: `In the final stage, we rigorously test and refine the product to
            guarantee quality. After thorough validation, your digital product
            is launched and ready to make an impact.`,
    isOnRight: false,
  },
];
