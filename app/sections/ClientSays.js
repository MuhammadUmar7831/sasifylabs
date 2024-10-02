import React from "react";

function TestimonialCard({ clientData }) {
  const { company, designation, quote, image, clientName } = clientData;

  return (
    <div className="glassmorphism w-[40%] xl:w-[30%] px-6 py-12 space-y-4 rounded-[5px] h-fit">
      <img src="./svgs/quote.svg" alt="quote" />
      <div className="flex gap-1">
        <img className="w-6 h-6" src="./svgs/star.svg" alt="star" />
        <img className="w-6 h-6" src="./svgs/star.svg" alt="star" />
        <img className="w-6 h-6" src="./svgs/star.svg" alt="star" />
        <img className="w-6 h-6" src="./svgs/star.svg" alt="star" />
        <img className="w-6 h-6" src="./svgs/star.svg" alt="star" />
      </div>
      <div>
        <h1 className="font-bold text-[30px] ClashDisplay">{company}</h1>
        <p className="IBMPlexSans text-[21px] leading-[28px]">{quote}</p>
      </div>
      <div className="flex gap-5">
        <img
          className="w-16 aspect-square rounded-full"
          src={`/img/client/${image}`}
          alt={clientName}
        />
        <div>
          <h4 className="font-bold text-[23px] ClashDisplay">{clientName}</h4>
          <p className="text-[21px] ClashDisplay font-thin">{designation}</p>
        </div>
      </div>
    </div>
  );
}

export default function ClientSays() {
  return (
    <section className="sectionGap">
      <h1 className="heading">
        <span>What Our</span>
        <span className="textGradient"> Client Say</span>
      </h1>
      <p className="text-center mt-5 IBM-Plex-Sans">
        Voices of Success: Hear From Our Clients How We Consistently Exceed
        Expectations
      </p>
      <div className="flex justify-evenly flex-wrap gap-7 mt-10">
        {clientData.map((client, index) => (
          <TestimonialCard key={index} clientData={client} />
        ))}
      </div>
    </section>
  );
}

const clientData = [
  {
    company: "Quantum Innovations",
    clientName: "Liam Wilson",
    designation: "VP of Technology",
    quote:
      "SaaSify Labs expertly crafted our MVP, accelerating our go-to-market strategy brilliantly.",
    image: "client1.jpg",
  },
  {
    company: "Apex Digital",
    clientName: "Olivia Sterling",
    designation: "Chief Information Officer",
    quote:
      "Their approach to web development is unmatched. Our site performance has never been better.",
    image: "client2.jpg",
  },
  {
    company: "TechFrontier",
    clientName: "Noah Bennett",
    designation: "Lead Developer",
    quote:
      "SaaSify Labs delivered on their promise of high-quality mobile apps tailored to our needs.",
    image: "client3.jpg",
  },
  {
    company: "GreenGrow AgriTech",
    clientName: "Elijah Martin",
    designation: "Chief Operations Officer",
    quote:
      "Our MVP created by SaaSify Labs has been a critical tool in our tech-driven agricultural services.",
    image: "client4.jpg",
  },
  {
    company: "Streamline Logistics",
    clientName: "Abigail Turner",
    designation: "Digital Officer",
    quote:
      "Our logistical operations have become smoother and more efficient with the web tools developed by SaaSify Labs.",
    image: "client5.jpg",
  },
  {
    company: "Quantum Innovation",
    clientName: "Benjamin Carter",
    designation: "Director of Innovation",
    quote:
      "SaaSify Labs' approach to MVP development is rigorous, detailed, and highly professional.",
    image: "client6.jpg",
  },
];
