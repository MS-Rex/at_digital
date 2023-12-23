import React from "react";
import Logo from "../assets/Logo.svg";

export default function Footer() {
    const technologies = ["ReactJs", "Gatsby", "NextJS", "NodeJS", "GraphQL", "Laravel"];

    const services = ["Social media Marketing", "Web & Mobile App Development", "Data & Analytics", "Google Marketing solutions", "Search Engine Optimization"];

    function FooterList({ title, items }) {
        return (
          <div className="flex flex-col w-auto justify-items-end items-start">
            <div className="text-lg flex w-auto">{title}</div>
            <div className="font-lato flex flex-col h-full">
              <ul className="flex flex-col h-full justify-between text-sm gap-2">
                {items.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      }
      
    return (
        <div className="flex flex-col items-start py-5 px-5 gap-5 w-full h-auto bg-[#6B3CC9] text-white">
                <div className="flex flex-col lg:flex-row sm:gap-5 lg:gap-20 items-start w-full h-auto" >
                     <div className="flex flex-col gap-5 items-start">
                        <img src={Logo} alt="logo" className="w-auto h-[25px]" />
                        <div className="font-lato text-sm w-8/12 md:w-1/2 lg:w-[438px]">
                        Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                        </div>
                     </div>
                    
                 <div className="flex flex-col md:flex-row gap-5 md:gap-40">
                    <FooterList title="Our Technologies" items={technologies} />
                 
                    <FooterList title="Our Services" items={services} />
                 </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-2"> 
           <hr className="mt-5 bg-white h-[1px] w-full max-w-[630px]" />
           <div className=" text-sm">Privacy Policy | Terms & Conditions</div>
           </div>
            
           </div>
    )
}
