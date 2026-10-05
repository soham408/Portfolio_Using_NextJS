// "use client";
// import React, { useState, useEffect } from 'react'
// import { Button } from './ui/button'
// import Link from 'next/link'
// import { Github, LinkedinIcon, Mail, X } from "lucide-react"

// export default function HeroSection() {
//   const images = [
//     "https://res.cloudinary.com/dpn5b2cx8/image/upload/v1773854476/a47f44da-dd15-4836-8dc5-31b04b5f3ab8.png",
//     "https://res.cloudinary.com/dpn5b2cx8/image/upload/v1787496181/IMG_20220215_174315_trmifm.jpg",
//     "https://res.cloudinary.com/dpn5b2cx8/image/upload/v1758177425/C53D024C-A4A4-4195-8A98-4C915F4A9DF9_uoalwi.jpg",
  
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 4000); 
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     // <section className="pt-10 overflow-hidden bg-[#140303] md:pt-0 sm:pt-16 2xl:pt-16">
//     <section className="pt-10 overflow-hidden bg-white text-black dark:bg-[#140303] dark:text-white md:pt-0 sm:pt-16 2xl:pt-16">
//       <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="grid items-center grid-cols-1 md:grid-cols-2 pt-[40px] gap-8">
          
//           {/* Text Content */}
//           <div>
//             <h2 className="text-3xl font-bold leading-tight text-gray-300 sm:text-4xl lg:text-5xl">
//               Hey..! I am <br className="block sm:hidden" />SOHAM
//             </h2>
//             <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
//               Web Development | Freelancing
//             </p>

//             <div className="flex gap-4 mt-8">
//               <Link href="https://github.com/soham408" target="_blank">
//                 <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800 bg-transparent">
//                   <Github className="h-4 w-4 text-white" />
//                   <span className="sr-only">GitHub</span>
//                 </Button>
//               </Link>
//               <Link href="https://www.linkedin.com/in/soham408/" target="_blank">
//                 <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800 bg-transparent">
//                   <LinkedinIcon className="h-4 w-4 text-white" />
//                   <span className="sr-only">LinkedIn</span>
//                 </Button>
//               </Link>
//               <Link href="https://x.com/soham_bambade" target="_blank">
//                 <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800 bg-transparent">
//                   <X className="h-4 w-4 text-white" />
//                   <span className="sr-only">Twitter</span>
//                 </Button>
//               </Link>
//               <Link href="mailto:bambadesoham408@gmail.com">
//                 <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800 bg-transparent">
//                   <Mail className="h-4 w-4 text-white" />
//                   <span className="sr-only">Email</span>
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           {/* Slideshow Image Container */}
//           <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-2xl">
//             <div 
//               className="flex transition-transform duration-700 ease-in-out" 
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {images.map((src, index) => (
//                 <div key={index} className="w-full flex-shrink-0">
//                   <img 
//                     src={src} 
//                     alt={`Slide ${index}`} 
//                     className="w-full h-auto object-cover aspect-[4/5] md:aspect-square"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Optional: Slide Indicators (Dots) */}
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//               {images.map((_, index) => (
//                 <div 
//                   key={index}
//                   className={`h-1.5 w-1.5 rounded-full transition-all ${
//                     currentIndex === index ? "bg-white w-4" : "bg-white/30"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }




"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, LinkedinIcon, Mail, X } from "lucide-react";

export default function HeroSection() {
  const backgroundImage =
    "https://res.cloudinary.com/dpn5b2cx8/image/upload/f_jpg/v1790921265/20260914_124028_vqgu9x.heic";

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Soham Bambade"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center min-h-screen grid-cols-1 md:grid-cols-2 pt-[40px] gap-8">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Hey..! I am
              <br className="block sm:hidden" />
              SOHAM
            </h2>

            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-200 md:mt-8">
              Web Development | Freelancing
            </p>

            <div className="flex gap-4 mt-8">
              {/* GitHub */}
              <Link
                href="https://github.com/soham408"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/40 hover:bg-white/20 bg-black/20 backdrop-blur-sm"
                >
                  <Github className="h-4 w-4 text-white" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/soham408/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/40 hover:bg-white/20 bg-black/20 backdrop-blur-sm"
                >
                  <LinkedinIcon className="h-4 w-4 text-white" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>

              {/* X */}
              <Link
                href="https://x.com/soham_bambade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/40 hover:bg-white/20 bg-black/20 backdrop-blur-sm"
                >
                  <X className="h-4 w-4 text-white" />
                  <span className="sr-only">X</span>
                </Button>
              </Link>

              {/* Email */}
              <Link href="mailto:slbambade01@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/40 hover:bg-white/20 bg-black/20 backdrop-blur-sm"
                >
                  <Mail className="h-4 w-4 text-white" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


