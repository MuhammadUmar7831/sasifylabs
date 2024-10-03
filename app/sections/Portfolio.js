import React from "react";
import Glow from "../components/Glow";
import Design from "../components/Design";

function GlassBoxItem({ title, description }) {
  return (
    <div className="flex md:w-[45%] lg:w-[30%]">
      <img src="/svgs/upArrow.svg" alt="icon" className="w-[49px] h-[52px]" />
      <div>
        <h2 className="text-[25px] font-black NunitoSans">{title}</h2>
        <p className="text-[18px] IBMPlexSans">{description}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="sectionGap relative">
      <Glow className="top-[350px] left-[-100px]" />
      <Design className="top-[-150px]" />
      <h1 className="heading">
        <span>Our Work</span>
        <span className="textGradient"> Portfolio</span>
      </h1>
      <p className="headingBottomText">
        Check out some of our recent work for clients!
      </p>
      <div className="mt-10 space-y-5">
        <div className="flex overflow-x-hidden gap-[15px]">
          <img src="/img/work/work5.png" alt="image5" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work6.png" alt="image6" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work7.png" alt="image7" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work8.png" alt="image8" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work1.png" alt="image1" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work2.png" alt="image2" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work3.png" alt="image3" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work4.png" alt="image4" className="w-[378px] h-[267px]"/>
        </div>

        <div className="flex overflow-x-hidden flex-shrink-0 gap-[15px]">
        <img src="/img/work/work1.png" alt="image1" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work2.png" alt="image2" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work3.png" alt="image3" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work4.png" alt="image4" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work5.png" alt="image5" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work6.png" alt="image6" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work7.png" alt="image7" className="w-[378px] h-[267px]"/>
          <img src="/img/work/work8.png" alt="image8" className="w-[378px] h-[267px]"/>
        </div>
      </div>

      {/* Rendering the GlassBoxItems dynamically */}
      <div className="mt-20 w-[90%] glassmorphism mx-auto flex flex-wrap justify-between gap-10 px-4 py-16 rounded-[5px]">
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
