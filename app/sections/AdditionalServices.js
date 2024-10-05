import React from "react";
import styles from "@/app/styles/AdditionalServices.module.css";
import Design from "../components/Design";
import Glow from "../components/Glow";


function AdditionalServiceCard({ service }) {
  return (
    <div className="flex flex-col gap-5 glassmorphism justify-center items-center w-[369px] px-6 py-12 rounded-[5px] mt-[70px] relative">
      <div className={`${styles.gradient}`}>
        <img src={service.image} alt={service.name} />
      </div>
      <h1 className="text-[25px] font-black NunitoSans">{service.name}</h1>
      <p className="IBMPlexSans text-center text-[18px] leading-[23.4px]">
        {service.description}
      </p>
    </div>
  );
}

export default function AdditionalServices() {
  return (
    <section className="sectionGap pt-[100px] relative">
      <Glow className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[350px]" />
      <Design className="top-[-150px] left-0" />
      <Design className="top-[-100px] right-0 scale-x-[-1]" />
      <h1 className="heading">
        <span>Additional</span>
        <span className="textGradient"> Expertise & Services</span>
      </h1>
      <div className="boxystyle mx-auto w-full mt-10 flex flex-wrap gap-7 justify-center">
        {services.map((service, index) => (
          <AdditionalServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    name: "UI/UX Design",
    description:
      "We craft user interfaces that are not only visually appealing but also optimized for user interaction, increasing satisfaction and usability.",
    image: "./svgs/uiux.svg",
  },
  {
    name: "Web Development",
    description:
      "Develop your digital footprint with our tailored web solutions that ensure scalability and robust performance, meeting the dynamic needs of modern businesses.",
    image: "./svgs/webdev.svg",
  },
  {
    name: "Mobile App Dev",
    description:
      "Expand your reach with our mobile app solutions, offering sleek, responsive designs and functional features that perform seamlessly across devices.",
    image: "./svgs/mobiledev.svg",
  },
  {
    name: "Integration & Automation",
    description:
      "Enhance operational efficiency by integrating advanced automation processes that streamline workflows and reduce manual intervention.",
    image: "./svgs/integration.svg",
  },
  {
    name: "AI Integration",
    description:
      "Incorporate the latest AI technologies into your existing products to drive innovation, improve user engagement, and maintain competitive advantage.",
    image: "./svgs/aiIntegration.svg",
  },
];