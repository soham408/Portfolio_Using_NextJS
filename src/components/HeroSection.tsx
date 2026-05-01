// import React from 'react'
// import { Button } from './ui/button'
// import Link from 'next/link'
// import { Github, LinkedinIcon, Mail, X } from "lucide-react"

// export default function HeroSection() {
//   return (
//     <section className="pt-10 overflow-hidden bg-[#140303] md:pt-0 sm:pt-16 2xl:pt-16">
//     <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="grid items-center grid-cols-1 md:grid-cols-2 pt-[40px]">
//             <div>
//                 <h2 className="text-3xl font-bold leading-tight text-gray-300 sm:text-4xl lg:text-5xl">Hey..! I am <br className="block sm:hidden" />SOHAM</h2>
//                 <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Web Development | Freelancing</p>

//                 <div className="space-x-4 p-[20px]">
//                 <Link href="https://github.com/soham408" target="_blank">
//                   <Button variant="outline" size="icon">
//                     <Github className="h-4 w-4" />
//                     <span className="sr-only">GitHub</span>
//                   </Button>
//                 </Link>
//                 <Link href="https://www.linkedin.com/in/soham408/" target="_blank">
//                   <Button variant="outline" size="icon">
//                     <LinkedinIcon className="h-4 w-4" />
//                     <span className="sr-only">LinkedIn</span>
//                   </Button>
//                 </Link>
//                 <Link href="https://x.com/soham_bambade" target="_blank">
//                   <Button variant="outline" size="icon">
//                     <X className="h-4 w-4" />
//                     <span className="sr-only">Twitter</span>
//                   </Button>
//                 </Link>
//                 <Link href="mailto:bambadesoham408@gmail.com">
//                   <Button variant="outline" size="icon">
//                     <Mail className="h-4 w-4" />
//                     <span className="sr-only">Email</span>
//                   </Button>
//                 </Link>
//               </div>
//             </div>

//             <div className="relative">
//                 <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="/" alt="" />

//                 <img className="rounded-xl relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://res.cloudinary.com/dpn5b2cx8/image/upload/v1758179557/0A7F9CA9-46F3-49B9-AA8D-75A14E18DD7E_cqevtu.jpg" alt="" />
//             </div>
//         </div>
        
//     </div>

// </section>

//   )
// }


// "use client"; // Required for Next.js App Router hooks
// import React, { useState, useEffect } from 'react'
// import { Button } from './ui/button'
// import Link from 'next/link'
// import { Github, LinkedinIcon, Mail, X } from "lucide-react"

// export default function HeroSection() {
//   // 1. Array of images to cycle through
//   const images = [
//     "https://res.cloudinary.com/dpn5b2cx8/image/upload/v1758179557/0A7F9CA9-46F3-49B9-AA8D-75A14E18DD7E_cqevtu.jpg",
//     "https://res.cloudinary.com/dpn5b2cx8/image/upload/v1746712678/Untitled_design_2_ssfuve.png"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // 2. Timer logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000); // 4000ms = 4 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [images.length]);

//   return (
//     <section className="pt-10 overflow-hidden bg-[#140303] md:pt-0 sm:pt-16 2xl:pt-16">
//       <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="grid items-center grid-cols-1 md:grid-cols-2 pt-[40px]">
//           <div>
//             <h2 className="text-3xl font-bold leading-tight text-gray-300 sm:text-4xl lg:text-5xl">
//               Hey..! I am <br className="block sm:hidden" />SOHAM
//             </h2>
//             <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Web Development | Freelancing</p>

//             <div className="space-x-4 p-[20px]">
//               <Link href="https://github.com/soham408" target="_blank">
//                 <Button variant="outline" size="icon">
//                   <Github className="h-4 w-4" />
//                   <span className="sr-only">GitHub</span>
//                 </Button>
//               </Link>
//               <Link href="https://www.linkedin.com/in/soham408/" target="_blank">
//                 <Button variant="outline" size="icon">
//                   <LinkedinIcon className="h-4 w-4" />
//                   <span className="sr-only">LinkedIn</span>
//                 </Button>
//               </Link>
//               <Link href="https://x.com/soham_bambade" target="_blank">
//                 <Button variant="outline" size="icon">
//                   <X className="h-4 w-4" />
//                   <span className="sr-only">Twitter</span>
//                 </Button>
//               </Link>
//               <Link href="mailto:bambadesoham408@gmail.com">
//                 <Button variant="outline" size="icon">
//                   <Mail className="h-4 w-4" />
//                   <span className="sr-only">Email</span>
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           <div className="relative overflow-hidden h-[400px] md:h-[600px] flex items-center justify-center">
//             {/* 3. Render Images with Transitions */}
//             {images.map((src, index) => (
//               <img
//                 key={src}
//                 className={`rounded-xl absolute w-full xl:max-w-lg transition-all duration-1000 ease-in-out transform 
//                   ${index === currentIndex 
//                     ? "opacity-100 scale-100 translate-x-0" 
//                     : "opacity-0 scale-95 translate-x-full pointer-events-none"
//                   }`}
//                 src={src}
//                 alt={`Slide ${index}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";
import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github, LinkedinIcon, Mail, X } from "lucide-react"

export default function HeroSection() {
  const images = [
    "https://res.cloudinary.com/dpn5b2cx8/image/upload/v1746712678/Untitled_design_2_ssfuve.png",
    "https://res.cloudinary.com/dpn5b2cx8/image/upload/v1746516117/Green_and_White_Modern_Organic_Logo_1_qzdqva.png",
    "https://res.cloudinary.com/dpn5b2cx8/image/upload/v1758177425/C53D024C-A4A4-4195-8A98-4C915F4A9DF9_uoalwi.jpg",
    // You can add more images here easily
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="pt-10 overflow-hidden bg-[#140303] md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 pt-[40px] gap-8">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-gray-300 sm:text-4xl lg:text-5xl">
              Hey..! I am <br className="block sm:hidden" />SOHAM
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
              Web Development | Freelancing
            </p>

            <div className="flex gap-4 mt-8">
              <Link href="https://github.com/soham408" target="_blank">
                <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800 bg-transparent">
                  <Github className="h-4 w-4 text-white" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/soham408/" target="_blank">
                <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800 bg-transparent">
                  <LinkedinIcon className="h-4 w-4 text-white" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/soham_bambade" target="_blank">
                <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800 bg-transparent">
                  <X className="h-4 w-4 text-white" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:bambadesoham408@gmail.com">
                <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800 bg-transparent">
                  <Mail className="h-4 w-4 text-white" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Slideshow Image Container */}
          <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-xl shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    src={src} 
                    alt={`Slide ${index}`} 
                    className="w-full h-auto object-cover aspect-[4/5] md:aspect-square"
                  />
                </div>
              ))}
            </div>

            {/* Optional: Slide Indicators (Dots) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    currentIndex === index ? "bg-white w-4" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}