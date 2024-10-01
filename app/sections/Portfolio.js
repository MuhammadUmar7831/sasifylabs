import React from "react";

function GlassBoxItem({ title, description }) {
  return (
    <div className="flex w-[30%]">
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
    <section className="sectionGap">
      <h1 className="heading">
        <span>Our Work</span>
        <span className="textGradient"> Portfolio</span>
      </h1>
      <p className="headingBottomText">
        Check out some of our recent work for clients!
      </p>
      <div className="mt-10 space-y-5">
        <div className="flex overflow-x-hidden gap-[15px]">
          <img src="/img/work/img1.png" alt="image1" />
          <img src="/img/work/img2.png" alt="image2" />
          <img src="/img/work/img3.png" alt="image3" />
          <img src="/img/work/img4.png" alt="image4" />
        </div>

        <div className="flex overflow-x-hidden flex-shrink-0 gap-[15px]">
          <img src="/img/work/img5.png" alt="image5" />
          <img src="/img/work/img6.png" alt="image6" />
          <img src="/img/work/img7.png" alt="image7" />
          <img src="/img/work/img8.png" alt="image8" />
          <img src="/img/work/img9.png" alt="image9" />
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
