import React from "react";
import HeroImg from "../assets/hero.png";

export default function Hero() {
      return (
        <header className="flex w-full h-auto relative">
            <div className=" w-full h-full ">
            <img src={HeroImg} alt="hero_img" className="w-full h-56 md:h-[448px] lg:h-[783px] object-cover"/>
            
                <div className="lg:absolute lg:bottom-0 custom-gradient py-5 px-5 md:px-10 lg:w-[80%] lg:max-w-[640px] lg:mx-10 lg:my-5 flex flex-col items-start gap-5">
                <h1 className="text-white text-4xl md:text-5xl lg:text-5xl capitalize font-bold">We crush your competitors, goals, and sales records - without the B.S.</h1>
      <button className="bg-[#F28D35] text-xs  font-bold px-10 sm:px-5 py-3 rounded-md text-white uppercase hover:bg-orange-400">Get Free Consultation</button>

      
    </div>
            </div>
        </header>
    )
   
}

