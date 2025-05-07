import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github, LinkedinIcon, Mail, X } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-10 overflow-hidden bg-black-50 md:pt-0 sm:pt-16 2xl:pt-16">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 pt-[20px]">
            <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Hey..! I am <br className="block sm:hidden" />SOHAM</h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Web Development | Freelancing</p>

                <div className="space-x-4 p-[20px]">
                <Link href="https://github.com/soham408" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/soham408/" target="_blank">
                  <Button variant="outline" size="icon">
                    <LinkedinIcon className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://x.com/soham_bambade" target="_blank">
                  <Button variant="outline" size="icon">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:bambadesoham408@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
                <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="/" alt="" />

                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://res.cloudinary.com/dpn5b2cx8/image/upload/v1746600597/Green_and_White_Modern_Organic_Logo_1_ltpcm7.png" alt="" />
            </div>
        </div>
        
    </div>
</section>


  )
}