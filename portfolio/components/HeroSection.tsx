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

      {/* Curved Loop at bottom */}
      <div className="absolute bottom-24 left-0 right-0 w-full">
        <CurvedLoop marqueeText="Welcome to my Portfolio ✦" />
      </div>
    </section>
  );
}
