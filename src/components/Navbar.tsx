"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function NavbarComponent() {

  // Direct resume Download

  // const handleResumeDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = 'https://drive.google.com/uc?export=download&id=1NVQY0QIMFBi_-gLcTUIsVNCFHgj9AvbC';
  //   link.download = 'resume.pdf';
  //   link.click();
  // };

  return (
    <header className="sticky top-0 z-50 border-b border-red-900/50 bg-[#140303] backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            {/* <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-full bg--600 blur-sm"></div>
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-orange-900 to-blue-900 font-bold">
                S
              </div>
            </div> */}
            <span className="text-xl font-bold tracking-wider text-gray-400 uppercase
            ">SOHAM ∞ /</span>
          </div>
          <nav className="">
            <ul className="flex space-x-8">
              {/* <li>
                <Link
                  href="#"
                  className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-red-500"
                >
                  Home
                </Link>
              </li> */}
              <li>
                <a
                  href="#projects"
                  className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-red-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#techstack"
                  className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-red-500"
                >
                  Tech Stack
                </a>
              </li>
            </ul>
          </nav>

          

          <Link href="https://drive.google.com/file/d/1NVQY0QIMFBi_-gLcTUIsVNCFHgj9AvbC/view?usp=drive_link"
          
          target="_blank"
          rel="noopener noreferrer"
          >
          <Button
           
          //  onClick={handleResumeDownload} 
           
           variant="outline" className="bg-black-50 hover:bg-gray-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path> </g> </g></svg>
                Resume
              </Button>
              </Link>
        </div>
      </header>
      
  );
}
