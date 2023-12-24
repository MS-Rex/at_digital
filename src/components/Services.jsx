import React from "react";
import Image1 from "../assets/image_01.png";
import Image2 from "../assets/image_02.png";

export default function Services() {
  function ServiceCard({
    title,
    description,
    imageSrc,
    imageAlt,
    reverse = false,
  }) {
    const containerOrder = reverse ? "md:flex-row-reverse" : "md:flex-row";

    return (
      <div
        className={`flex flex-col ${containerOrder} px-5 py-5 justify-center items-center w-full`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full  md:w-[275px] lg:w-[346px] max-w-[414px] h-auto"
        />
        <div className="flex flex-col mt-5 gap-5 justify-center md:items-start items-center md:w-1/2 ">
          <div className="text-2xl text-center   text-[#6B3CC9] font-bold">
            {title}
          </div>
          <div className="text-center md:text-start md:w-full md:text-sm lg:text-lg max-w-[568px]">
            {description}
          </div>
          <button className="bg-[#F28D35] text-white uppercase rounded-md w-[129px] h-[38px] hover:bg-orange-400">
            Learn More
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <ServiceCard
        title="Web & Mobile App Development"
        description="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
        imageSrc={Image1}
        imageAlt="Digital Strategy Consulting"
      />
      <ServiceCard
        title="Digital Strategy Consulting"
        description="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
        imageSrc={Image2}
        imageAlt="Digital Strategy Consulting"
        reverse={true}
      />
    </>
  );
}
