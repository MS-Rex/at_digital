import React from "react";
import Logo from "../assets/Logo.svg";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="grid">
       <nav className="bg-primary flex h-16 py-5 px-5 justify-between">
        <img src={Logo} alt="Logo " className="md:ml-5"  />
                 <div className="flex items-center md:hidden">
                 <button onClick={() => setIsMenuOpen(!isMenuOpen)} >
                     <div className="space-y-2">
                         <span className="block h-1 rounded w-8 bg-white "></span>
                         <span className="block h-1 rounded  w-8 bg-white"></span>
                         <span className="block h-1  rounded w-8 bg-white"></span>
                     </div>
                 </button>
                
            </div> 
                 <div className="sm:hidden md:block mb-2 sm:mb-0">
         <a href="#" className="mr-7 text-sm text-white hover:text-gray-300">SERVICES</a>
         <a href="#" className="mr-7 text-sm text-white hover:text-gray-300">ABOUT US</a>
         <a href="#" className="mr-7 text-sm text-white hover:text-gray-300">CONTACT US</a>
         <a href="#" className="mr-7 text-sm text-white hover:text-gray-300">CARRIERS</a>
     </div>     
        </nav>
       
            
        </div>
    );

}
