"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, LinkedinIcon, Mail, X } from "lucide-react";
import PageEntrance from "./ui/PageEntrance";

export default function HeroSection() {
  const backgroundImage =
    "https://res.cloudinary.com/dpn5b2cx8/image/upload/f_jpg/v1790921265/20260914_124028_vqgu9x.heic";

  return (
    <PageEntrance>
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
          quality={100}
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
              {/* Hey..! I am { } */}
              {/* <br className="block sm:hidden" /> */}
              SOHAM BAMBADE
            </h2>

            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-200 md:mt-8">
              WEB DEVELOPMENT | FREELANCING
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
    </ PageEntrance>

  );
}


