'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Project {
    id: number;
    title: string;
    role: string;
    duration: string;
    description: string;
    technologies: string;
    links: { label: string; href: string; icon: string }[];
    images: { src: string; alt: string; orientation: 'horizontal' | 'vertical' }[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Mộng Huyễn Giang Hồ Compendium",
        role: "FE & BE Developer",
        duration: "6 months (Internship)",
        description: "Website expanding from the main page of Mộng Huyễn Giang Hồ game, presenting a character library to help players easily access game content. With basic features to display character lists and add/edit/delete characters via API, experience with VPS deployment and Docker packaging.",
        technologies: "NodeJS, ReactJS",
        links: [
            { label: "GitHub", href: "https://github.com/MPIO1002/Characters-Website", icon: "github" },
            { label: "Production", href: "https://mhgh.ggo.vn/thuvientuong/", icon: "link" },
            { label: "Document", href: "https://docs.google.com/document/d/1CkK7RCdVcNLNSzGxRXsU7pIAj9kL4BWa3x84nXhvT_8/edit?usp=sharing", icon: "doc" }
        ],
        images: [
            { src: "/mhgh-1.png", alt: "MHGH Screenshot 1", orientation: "horizontal" }
        ]
    },
    {
        id: 2,
        title: "Green Store",
        role: "Frontend Developer",
        duration: "2 months",
        description: "Basic store management system website with CRUD and scanner for QR code scanning, utilizing modern technologies such as Open API Generator, Tan Stack Query, custom hooks, and react hook form.",
        technologies: "NextJS",
        links: [
            { label: "GitHub", href: "https://github.com/MPIO1002/store-management-fe", icon: "github" }
        ],
        images: [
            { src: "/gs-1.png", alt: "Green Store Screenshot 1", orientation: "horizontal" }
        ]
    },
    {
        id: 3,
        title: "Cineme",
        role: "Frontend Developer",
        duration: "4 months",
        description: "Cinema management system website with notable features integrating WebSocket, RabbitMQ, Redis, and generative algorithm.",
        technologies: "ReactJS",
        links: [
            { label: "GitHub", href: "https://github.com/MPIO1002/CINEME", icon: "github" },
            { label: "Video Demo", href: "https://www.tiktok.com/@thichfrontend/video/7585484069299948821", icon: "video" }
        ],
        images: [
            { src: "/ci-1.png", alt: "Cineme Screenshot 1", orientation: "horizontal" }
        ]
    }
];

export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Auto swipe every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextProject();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const project = projects[currentIndex];

    const getIconPath = (iconType: string) => {
        switch (iconType) {
            case 'github':
                return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
            case 'link':
                return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>;
            case 'doc':
                return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
            case 'video':
                return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
            default:
                return null;
        }
    };

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            {/* Rotating Qualities Loop at top */}
            <div className="absolute left-0 right-0 top-0 overflow-hidden z-20" style={{ transform: 'rotate(-5deg)', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginTop: '-40px' }}>
                <div className="bg-blue-700 py-4 relative">
                    <div className="flex gap-0 animate-loop-scroll">
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ PASSIONATE</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ CREATIVE</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ PROBLEM SOLVER</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ TEAM PLAYER</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ FAST LEARNER</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ DETAIL-ORIENTED</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ INNOVATIVE</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ DEDICATED</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ PASSIONATE</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ CREATIVE</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ PROBLEM SOLVER</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ TEAM PLAYER</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ FAST LEARNER</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ DETAIL-ORIENTED</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ INNOVATIVE</span>
                        <span className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ DEDICATED</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center mb-8 sm:mb-5 md:mb-16 mt-4 head-font text-gray-800">Projects</h1>
                
                {/* 3D Carousel Container */}
                <div className="relative h-[500px] sm:h-[550px] md:h-[650px] flex items-center justify-center px-4 sm:px-0">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevProject}
                        className="absolute left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-20"
                        aria-label="Previous project"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={nextProject}
                        className="absolute right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-20"
                        aria-label="Next project"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Cards */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {projects.map((proj, idx) => {
                            const position = (idx - currentIndex + projects.length) % projects.length;
                            const isCenter = position === 0;
                            const isLeft = position === projects.length - 1;
                            const isRight = position === 1;
                            const isVisible = isCenter || isLeft || isRight;

                            return (
                                <div
                                    key={proj.id}
                                    onClick={() => !isCenter && setCurrentIndex(idx)}
                                    className={`absolute transition-all duration-500 ease-out ${
                                        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    } ${!isCenter && isVisible ? 'cursor-pointer hidden md:block' : ''} ${
                                        isCenter ? 'block' : ''
                                    }`}
                                    style={{
                                        transform: isCenter
                                            ? 'translateX(0) scale(1) rotateY(0deg)'
                                            : isLeft
                                            ? 'translateX(-80%) scale(0.75) rotateY(15deg)'
                                            : isRight
                                            ? 'translateX(80%) scale(0.75) rotateY(-15deg)'
                                            : 'translateX(0) scale(0.5)',
                                        zIndex: isCenter ? 10 : 5,
                                        filter: !isCenter && isVisible ? 'brightness(0.7)' : 'brightness(1)'
                                    }}
                                >
                                    <div className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ${
                                        isCenter ? 'w-[280px] xs:w-[320px] sm:w-[400px] md:w-[600px]' : 'w-[280px] xs:w-[320px] sm:w-[350px] md:w-[450px]'
                                    }`}>
                                        {/* Single Image */}
                                        <div className="relative w-full aspect-video bg-gray-100">
                                            <Image
                                                src={proj.images[0].src}
                                                alt={proj.images[0].alt}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 sm:p-5 md:p-6">
                                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{proj.title}</h2>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                                <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] sm:text-xs font-medium">
                                                    {proj.role}
                                                </span>
                                                <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-green-100 text-green-700 rounded-full text-[10px] sm:text-xs font-medium">
                                                    {proj.duration}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{proj.description}</p>
                                            <div className="mb-3 sm:mb-4">
                                                <h3 className="text-[10px] sm:text-xs font-semibold text-gray-600 mb-1">Technologies:</h3>
                                                <p className="text-gray-800 text-xs sm:text-sm font-medium">{proj.technologies}</p>
                                            </div>
                                            {/* Links */}
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {proj.links.map((link, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-700 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-800 transition-colors"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        {getIconPath(link.icon)}
                                                        <span>{link.label}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-0 md:-bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${
                                    currentIndex === idx ? 'bg-blue-700 w-8' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to project ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
