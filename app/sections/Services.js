import React from "react";
import styles from "@/app/styles/Services.module.css";

function ServiceBox({ title, price, description, features }) {
  return (
    <div className="w-[367px] glassmorphism rounded-[5px]">
      <div className={`${styles.gradeint} px-10 py-6 space-y-2`}>
        <h1 className="text-[25px] font-black NunitoSans">{title}</h1>
        <div className="p-1 rounded-full bg-white text-black text-[20px] font-bold w-fit IBMPlexSans leading-[28px]">
          ({price})
        </div>
        <p className="text-[14px] font-semibold leading-[18px]">
          {description}
        </p>
      </div>
      <div className="p-4 space-y-[20px]">
        {features.map((feature, index) => (
          <div className="flex gap-2" key={index}>
            <img
              src={feature.included ? "./svgs/tick.svg" : "./svgs/cross.svg"}
              alt={feature.included ? "tick" : "cross"}
            />
            <p className="IBMPlexSans text-[18px] leading-[27px]">
              {feature.feature}
            </p>
          </div>
        ))}
      </div>
      <div className="px-4 py-8">
        <button className={`${styles.subscribeBtn} NunitoSans`}>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="sectionGap sectionPadding">
      <h1 className="heading">
        <span>Services</span>
        <span className="textGradient"> & Pricing</span>
      </h1>
      <div className="w-full flex justify-center gap-10 mt-10">
        {servicesData.map((service, index) => (
          <ServiceBox
            key={index}
            title={service.title}
            price={service.price}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>
    </section>
  );
}

const servicesData = [
  {
    title: "Launchpad Essentials Package",
    price: "$23,000",
    description:
      "Kickstart your web-based SaaS project with our streamlined design and rapid development services.",
    features: [
      { feature: "UI/UX of Web-based SaaS product", included: true },
      { feature: "Landing Page Development", included: true },
      { feature: "Pitch Deck Template", included: true },
      { feature: "Web-based MVP Development", included: true },
      { feature: "UI/UX of Mobile Based SaaS product", included: false },
      { feature: "Landing Page Design", included: false },
      {
        feature: "Cross Platform Mobile based MVP Development",
        included: false,
      },
    ],
  },
  {
    title: "Accelerator Pro Package",
    price: "$28,000",
    description:
      "Propel your mobile SaaS product to new heights with our full-spectrum cross-platform development and design.",
    features: [
      { feature: "UI/UX of Mobile Based SaaS product", included: true },
      { feature: "Landing Page Development", included: true },
      {
        feature: "Cross Platform Mobile based MVP Development",
        included: true,
      },
      { feature: "Pitch Deck Template", included: true },
      { feature: "UI/UX of Web-based SaaS product", included: false },
      { feature: "Landing Page Design", included: false },
      { feature: "Web-based MVP Development", included: false },
    ],
  },
  {
    title: "Visionary Full-Spectrum Package",
    price: "$35,000",
    description:
      "Master the digital landscape with our comprehensive package for both web and mobile SaaS solutions, ensuring maximum.",
    features: [
      { feature: "UI/UX of Web-based SaaS product", included: true },
      { feature: "UI/UX of Mobile Based SaaS product", included: true },
      { feature: "Landing Page Development", included: true },
      { feature: "Landing Page Design", included: true },
      { feature: "Web-based MVP Development", included: true },
      {
        feature: "Cross Platform Mobile based MVP Development",
        included: true,
      },
      { feature: "Pitch Deck Template", included: true },
    ],
  },
];
