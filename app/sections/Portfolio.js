import React from "react";
import Glow from "../components/Glow";
import Design from "../components/Design";
import styles from "@/app/styles/Portfolio.module.css";

function GlassBoxItem({ title, description }) {
  return (
    <div className="flex md:w-[45%] lg:w-[30%]">
      <img src="/svgs/upArrow.svg" alt="icon" className="w-[49px] h-[52px]" />
      <div>
        <h2 className="text-[25px] leading-[34px] font-black NunitoSans">
          {title}
        </h2>
        <p className="text-[18px] leading-[23.4px] IBMPlexSans">
          {description}
        </p>
      </div>
    </div>
  );
}

function ImageSlider({ urls, className, isTop }) {
  return (
    <div
      className={`flex overflow-x-hidden gap-[15px] ${className} ${
        isTop ? styles.scrollingContentTop : styles.scrollingContentBottom
      }`}
    >
      {urls.map((url, idx) => (
        <img
          key={idx}
          src={`/img/work/${url}`}
          alt={url}
          className="w-[378px] h-[267px]"
        />
      ))}
      {urls.map((url, idx) => (
        <img
          key={idx}
          src={`/img/work/${url}`}
          alt={url}
          className="w-[378px] h-[267px]"
        />
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="sectionGap relative">
      <Glow className="top-[500px] left-[-100px]" />
      <Design className="top-[-150px]" />
      <h1 className="heading">
        <span>Our Work</span>
        <span className="textGradient"> Portfolio</span>
      </h1>
      <p className="headingBottomText">
        Check out some of our recent work for clients!
      </p>
      <div className="mt-[80px] space-y-5">
        <ImageSlider isTop={true} urls={images1} />
        <ImageSlider
          isTop={false}
          urls={images2}
          className="ml-[100px] duration-1000"
        />
      </div>

      {/* Rendering the GlassBoxItems dynamically */}
      <div className="relative mt-20 w-[90%] max-w-[1170px] glassmorphism mx-auto flex flex-wrap justify-between gap-10 px-4 py-16 rounded-[5px]">
        {/* <Glow className="top-[0px] left-[0px] translate-x-[-50%] translate-y-[-50%] z-[-1]" /> */}
        {glassBoxData.map((item, index) => (
          <GlassBoxItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

const glassBoxData = [
  {
    title: "100% On-Time Delivery",
    description:
      "Guaranteeing timely launches to keep your project on track and on schedule.",
  },
  {
    title: "50% Average Client Growth in the First Year",
    description: "Fueling startup success with significant growth post-launch.",
  },
  {
    title: "16 Weeks to Launch",
    description:
      "Rapid project delivery with our MVP Launchpad, achieving market readiness in just 16 weeks.",
  },
  {
    title: "98% First-Time Right Feature Integration",
    description:
      "Precise execution, ensuring features meet client specifications from the start.",
  },
  {
    title: "95% Customer Satisfaction",
    description:
      "High satisfaction rates reflect our commitment to exceeding client expectations.",
  },
  {
    title: "80% Repeat Business",
    description:
      "A testament to our trusted client relationships and consistent performance.",
  },
];

const images1 = [
  "work5.png",
  "work6.png",
  "work7.png",
  "work1.png",
  "work2.png",
  "work3.png",
  "work4.png",
];
const images2 = [
  "work1.png",
  "work2.png",
  "work3.png",
  "work4.png",
  "work5.png",
  "work6.png",
  "work7.png",
];
