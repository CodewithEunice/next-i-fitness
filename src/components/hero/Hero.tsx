import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className=" w-full h-[calc(100vh-60px)] mt-[60px] pt-[90px] ,    first-letter: bg-hero bg-no-repeat
       bg-cover bg-center rounded-[20px] font-medium
        md:min-h-[700px] m-4 md:m-8 "
    >
      <div className=" p-24"></div>
      <div className="  flex-col align-top container">
        <h1 className=" text-4xl font-bold font-serif leading-tight text-white">
          <br />
          To i-fitness
          <br className="hidden md:block" /> where Fitness{" "}
          <br className="hidden md:block" /> Becomes Your Lifestyle
        </h1>

        <div className="mt-7 flex items-center flex-colgap-5">
          <button
            className=" px-10 py-2 my-2 rounded-full cursor-pointer fon-bold text-white
           bg-red-700"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
