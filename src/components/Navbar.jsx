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
            {isMenuOpen && (
             <div className="absolute right-0 mt-12  mr-1 py-2 w-48 bg-[#6d4ce4] rounded-lg shadow-xl z-20">
            <a href="#" className="block px-4 py-2 text-sm text-white"> SERVICES</a>

             <hr className="my-1 mx-2" />
             <a href="#" className="block px-4 py-2 text-sm text-white ">ABOUT US</a>
             <hr className="my-1 mx-2" />
             <a href="#" className="block px-4 py-2 text-sm text-white ">CONTACT US</a>
             <hr className="my-1 mx-2" />
             <a href="#" className="block px-4 py-2 text-sm text-white">CARRIERS</a>
             
         </div>
            )}
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
