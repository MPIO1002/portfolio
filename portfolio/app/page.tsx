'use client';

import Image from "next/image";
import SplitText from "../components/SplitText";
import RotatingText from '../components/RotatingText'
import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiDocker, SiVercel } from 'react-icons/si';
import { useState } from 'react';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <Image
                src="/my-logo.jpg"
                alt="Logo"
                width={60}
                height={60}
                className="h-10 w-auto sm:h-12 md:h-14 object-contain"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 sm:gap-8 md:gap-10">
              <a href="#about" className="text-base sm:text-lg font-medium hover:text-blue-700 transition-colors">
                About me
              </a>
              <a href="#projects" className="text-base sm:text-lg font-medium hover:text-blue-700 transition-colors">
                Projects
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a 
                  href="#about" 
                  className="text-lg font-medium hover:text-blue-700 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About me
                </a>
                <a 
                  href="#projects" 
                  className="text-lg font-medium hover:text-blue-700 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="relative flex min-h-screen flex-col items-center justify-center py-8 px-4 sm:px-6 md:px-8 overflow-x-hidden gap-0.5">
        <div className="flex items-center gap-3 sm:gap-4">
          <SplitText
            text="Hello, I'm Phuc"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <Image 
            src="/icon.jpg" 
            alt="Icon" 
            width={60} 
            height={60} 
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-cover rotate-[30deg] hover:rotate-180 transition-transform duration-500"
          />
        </div>
        <div className="relative w-full max-w-6xl flex items-center justify-center my-2 px-8 md:px-0">
          {/* Left Card - my-tiktok */}
          <div className="absolute left-2 sm:left-5 md:left-10 lg:left-16 top-1/2 translate-y-[100px] md:-translate-y-1/2 bg-white rounded-sm shadow-md p-3 sm:p-4 md:p-6 z-10 w-24 sm:w-36 md:w-44 lg:w-52 -rotate-[20deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/my-tiktok.png"
              alt="My TikTok"
              width={300}
              height={300}
              className="w-full h-auto rounded-sm object-cover mb-5"
            />
          </div>

          {/* Center Text */}
          <SplitText
            text="Frontend Developer"
            className="head-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center z-20 px-4"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          {/* Right Card - my-photo */}
          <div className="absolute right-2 sm:right-5 md:right-10 lg:right-12 top-1/2 -translate-y-[230px] md:-translate-y-1/2 bg-white rounded-sm shadow-md p-3 sm:p-4 md:p-6 z-10 w-24 sm:w-36 md:w-44 lg:w-52 rotate-[30deg] hover:rotate-0 transition-transform duration-300">
            <Image
              src="/my-photo.jpg"
              alt="My Photo"
              width={300}
              height={300}
              className="w-full h-auto rounded-sm object-cover mb-5"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-0 text-2xl sm:text-3xl md:text-4xl font-medium gap-2 sm:gap-0">
          <p className="text-center sm:mr-2">Creative</p>
          <RotatingText
            texts={['thinking', 'coding', 'components']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-blue-700 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </section>
      <section>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </section>
    </div>
  );
}
