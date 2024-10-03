import React from "react";
import styles from "@/app/styles/FAQs.module.css";
import Design from "../components/Design";

function FAQBox({ question, answer, collapse }) {
  return (
    <div className="glassmorphism p-4 rounded-md space-y-4">
      <div className="flex justify-between">
        <h3 className="text-[21px] IBMPlexSans font-bold">{question}</h3>
        <img
          src="./svgs/upArrow-faq.svg"
          alt="uparrow-faq"
          className={`${styles.gradient} p-2 rounded-md aspect-square h-fit`}
        />
      </div>
      {!collapse && (
        <p className="IBMPlexSans pr-12 text-[18px] leading-[27px]">{answer}</p>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <section className="sectionGap sectionPadding flex flex-col lg:flex-row mt-40 justify-evenly gap-10 relative">
      <Design className="bottom-[100px] left-0" />
      <Design className="bottom-[-150px] right-0  scale-x-[-1]" />
      <div className="lg:w-[40%]">
        <h1 className="heading">
          <span>Frequently</span>
          <span className="textGradient"> Asked Questions</span>
        </h1>
        <p className={`${styles.para} IBMPlexSans`}>
          Gain insights into how we streamline your path to launching successful
          digital products. Explore common queries about our services to
          understand better how we can help turn your ideas into market-ready
          SaaS solutions.
        </p>
        <div className="flex gap-2 mt-5">
          <button className={`${styles.btn} NunitoSans`}>Contact Us</button>
          <button className={`${styles.btn} NunitoSans`}>
            View Our Portfolio
          </button>
        </div>
      </div>
      <div className="lg:w-[60%] space-y-5">
        {faqs.map((faq, idx) => (
          <FAQBox
            key={idx}
            question={faq.question}
            answer={faq.answer}
            collapse={idx !== 0}
          />
        ))}
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "What is included in your MVP Launchpad Package?",
    answer:
      "Our MVP Launchpad Package includes UI/UX design, development, and testing services tailored to bring your product to market within 16 weeks quickly.",
  },
  {
    question: "How do you ensure product quality within a tight timeframe?",
    answer:
      "Our MVP Launchpad Package includes UI/UX design, development, and testing services tailored to bring your product to market within 16 weeks quickly.",
  },
  {
    question:
      "What technologies do you use for web and mobile app development?",
    answer:
      "Our MVP Launchpad Package includes UI/UX design, development, and testing services tailored to bring your product to market within 16 weeks quickly.",
  },
  {
    question: "Can I modify my project scope after it has started?",
    answer:
      "Our MVP Launchpad Package includes UI/UX design, development, and testing services tailored to bring your product to market within 16 weeks quickly.",
  },
  {
    question: "What support do you offer post-launch?",
    answer:
      "Our MVP Launchpad Package includes UI/UX design, development, and testing services tailored to bring your product to market within 16 weeks quickly.",
  },
  {
    question: "How do you handle data security during development?",
    answer:
      "Our MVP Launchpad Package includes UI/UX design, development, and testing services tailored to bring your product to market within 16 weeks quickly.",
  },
  {
    question: "What makes your pricing competitive?",
    answer:
      "Our MVP Launchpad Package includes UI/UX design, development, and testing services tailored to bring your product to market within 16 weeks quickly.",
  },
];
