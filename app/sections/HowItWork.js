import React from "react";
import styles from "@/app/styles/HowItWork.module.css";

// Reusable HowItWorkBox component
function HowItWorkBox({ step, heading, para, isOnRight, isLast }) {
  return (
    <div
      className={`w-full flex flex-wrap justify-between ${
        isOnRight ? "flex-row-reverse" : ""
      }`}
    >
      <div className={`glassmorphism ${styles.box} group max-w-[511px]`}>
        <div className={`${styles.boxGlow} group-hover:opacity-100 `}></div>
        <div
          className={`${styles.gradient} text-[25px] w-fit rounded-lg px-[5px] py-[1px] font-black NunitoSans`}
        >
          <h3>Step-{step}</h3>
        </div>
        <h1 className="text-[35px] font-black w-2/3 leading-[36px] NunitoSans">
          {heading}
        </h1>
        <p className="text-[18px] font-normal mt-[15px] IBMPlexSans">{para}</p>
      </div>
      <div className={styles.howItWorkDividerSection}>
        <span className={styles.howItWorkDividerCircleOuter}>
          <span className={styles.howItWorkDividerCircleInner}></span>
        </span>
        {!isLast && <span className={styles.howItWorkDividerLine}></span>}
      </div>
      <div className="w-[511px]"></div>
    </div>
  );
}

export default function HowItWork() {
  return (
    <section className="sectionGap sectionPadding">
      <h1 className="heading">
        <span>How it</span>
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
    heading: "Defining the Product Scope",
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
