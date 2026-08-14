'use client';

import Image from 'next/image';
import Folder from './Folder'
import LetterPopup from './LetterPopup'
import LogoLoop from './LogoLoop'
import { useState, useEffect } from 'react';
import { SiReact, SiNextdotjs, SiDocker, SiGit, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

const techLogos = [
  { node: <SiReact style={{ color: '#61DAFB' }} />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs style={{ color: '#000000' }} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiDocker style={{ color: '#2496ED' }} />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGit style={{ color: '#F05032' }} />, title: "Git", href: "https://git-scm.com" },
  { node: <SiTailwindcss style={{ color: '#06B6D4' }} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiTypescript style={{ color: '#3178C6' }} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript style={{ color: '#F7DF1E' }} />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiHtml5 style={{ color: '#E34F26' }} />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 style={{ color: '#1572B6' }} />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
];

export default function AboutSection() {
    const [isLetterOpen, setIsLetterOpen] = useState(false);
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    const [autoRotate, setAutoRotate] = useState(false);
    const [leftIconPos, setLeftIconPos] = useState({ top: '10%', left: '5%' });
    const [rightIconPos, setRightIconPos] = useState({ top: '80%', right: '5%' });

    useEffect(() => {
        // Auto rotate animation
        const rotateInterval = setInterval(() => {
            setAutoRotate(prev => !prev);
        }, 3000);

        // Random position change
        const positionInterval = setInterval(() => {
            setLeftIconPos({
                top: `${Math.random() * 20 + 5}%`,
                left: `${Math.random() * 5 + 2}%`
            });
            setRightIconPos({
                top: `${Math.random() * 20 + 5}%`,
                right: `${Math.random() * 5 + 2}%`
            });
        }, 8000);

        return () => {
            clearInterval(rotateInterval);
            clearInterval(positionInterval);
        };
    }, []);

    const handleLetterClose = () => {
        setIsLetterOpen(false);
        setIsFolderOpen(false);
    };

    const handleFolderClick = () => {
        setIsFolderOpen(true);
        setIsLetterOpen(true);
    };

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                {/* About Me, Folder and Floating Icons Container */}
                <div className="relative mb-20">
                    {/* Floating Icon Left */}
                    <Image 
                        src="/icon-2.png" 
                        alt="Decoration" 
                        width={80} 
                        height={80} 
                        className={`absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover transition-all duration-[2000ms] ease-in-out z-0 ${autoRotate ? 'rotate-180' : 'rotate-0'}`}
                        style={{
                            top: leftIconPos.top,
                            left: leftIconPos.left,
                        }}
                    />
                    
                    {/* Floating Icon Right */}
                    <Image 
                        src="/icon-3.png" 
                        alt="Decoration" 
                        width={120} 
                        height={120} 
                        className={`absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover transition-all duration-[2000ms] ease-in-out z-0 ${autoRotate ? '-rotate-180' : 'rotate-0'}`}
                        style={{
                            top: rightIconPos.top,
                            right: rightIconPos.right,
                        }}
                    />

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center mb-12 head-font relative z-10">About Me</h1>
                    {/* Folder centered below heading */}
                    <div className="flex flex-col items-center mt-20 relative z-10">
                        <div onClick={handleFolderClick} className="cursor-pointer">
                            <Folder size={1.8} color="#1d4ed8" open={isFolderOpen} onOpenChange={setIsFolderOpen} />
                        </div>
                        <p className="text-lg mt-12 font-bold animate-pulse">Click me!</p>
                    </div>
                </div>

                {/* Grid for Education, Certificate, and Experience */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {/* Education */}
                    <div className="bg-white rounded-lg p-6 sm:p-8 slide-in-bottom-normal">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Education</h3>
                        </div>
                        <p className="text-gray-700 font-medium mb-2">Sai Gon University</p>
                        <p className="text-gray-600 mb-2">Information and Technology</p>
                        <p className="text-gray-600 mb-1">2022 - 2027</p>
                        <p className="text-blue-700 font-semibold">GPA: 3.12/4.0</p>
                    </div>

                    {/* Certificate */}
                    <div className="bg-white rounded-lg p-6 sm:p-8 slide-in-bottom-normal">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Certificate</h3>
                        </div>
                        <p className="text-gray-700 font-medium mb-2">IELTS</p>
                        <p className="text-blue-700 font-bold">7.5 Overall</p>
                    </div>

                    {/* Experience */}
                    <div className="bg-white rounded-lg p-6 sm:p-8 slide-in-bottom-normal">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
                        </div>
                        <p className="text-gray-700 font-medium text-lg mb-2">Frontend Developer Intern</p>
                        <p className="text-gray-600 mb-1">GGO Company</p>
                        <p className="text-gray-600">6-month internship</p>
                    </div>
                </div>

                {/* Tech Stack Logo Loop */}
                <div className="md:mt-0 sm:mt-8 p-6 sm:p-8">
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Tech Stack</h3>
                    </div>
                    <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
                        <LogoLoop
                            logos={techLogos}
                            speed={100}
                            direction="left"
                            logoHeight={56}
                            gap={48}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#f9fafb"
                            ariaLabel="Technology stack"
                        />
                    </div>
                </div>
            </div>
            
            {/* Letter Popup - Outside container for proper z-index */}
            <LetterPopup isOpen={isLetterOpen} onClose={handleLetterClose} />
        </section>
    );
}
