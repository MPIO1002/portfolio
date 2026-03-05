'use client';

import Image from "next/image";
import SplitText from "./SplitText";
import RotatingText from './RotatingText';
import CurvedLoop from './CurvedLoop';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [autoRotate, setAutoRotate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoRotate(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
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
          className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-cover transition-transform duration-500 ${autoRotate ? 'rotate-180' : 'rotate-[30deg]'} hover:rotate-180`}
        />
      </div>
      <div className="relative w-full max-w-6xl flex items-center justify-center my-2 px-8 md:px-0">
        {/* Left Card - my-tiktok */}
        <div className={`absolute left-2 sm:left-5 md:left-10 lg:left-16 top-1/2 translate-y-[100px] md:-translate-y-1/2 bg-white rounded-sm shadow-md p-3 sm:p-4 md:p-6 z-10 w-24 sm:w-36 md:w-44 lg:w-52 transition-transform duration-300 ${autoRotate ? 'rotate-0' : '-rotate-[20deg]'} hover:rotate-0`}>
          <Image
            src="/my-tiktok.jpg"
            alt="My TikTok"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm object-cover mb-10"
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
        <div className={`absolute right-2 sm:right-5 md:right-10 lg:right-12 top-1/2 -translate-y-[230px] md:-translate-y-1/2 bg-white rounded-sm shadow-md p-3 sm:p-4 md:p-6 z-10 w-24 sm:w-36 md:w-44 lg:w-52 transition-transform duration-300 ${autoRotate ? 'rotate-0' : 'rotate-[30deg]'} hover:rotate-0`}>
          <Image
            src="/my-photo.jpg"
            alt="My Photo"
            width={300}
            height={300}
            className="w-full h-auto rounded-sm object-cover mb-10"
          />
        </div>
      </div>

      

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 mt-8 z-30">
        <a
          href="https://github.com/MPIO1002"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a
          href="/Huynh Minh Phuc Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </a>
      </div>

      {/* Curved Loop at bottom */}
      <div className="absolute bottom-24 left-0 right-0 w-full">
        <CurvedLoop marqueeText="Welcome to my Portfolio ✦" />
      </div>
    </section>
  );
}
