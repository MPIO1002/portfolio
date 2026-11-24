'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// ─── Types ───────────────────────────────────────────────────────────────────
interface ProjectLink {
    label: string;
    href: string;
    icon: 'github' | 'link' | 'doc' | 'video';
}

interface ProjectImage {
    src: string;
    alt: string;
    caption: string;
}

interface Project {
    id: number;
    title: string;
    category: 'work' | 'project';
    platform: 'desktop' | 'mobile';
    role: string;
    duration: string;
    description: string;
    highlights: string[];
    techStack: string[];
    links: ProjectLink[];
    featuredImage: ProjectImage;
    galleryImages: ProjectImage[];
}

// ─── Data ────────────────────────────────────────────────────────────────────
const projects: Project[] = [
    {
        id: 1,
        title: 'AplusT Ventures',
        category: 'work',
        platform: 'desktop',
        role: 'Freelance Frontend / Full-Stack Developer',
        duration: 'Sep — Nov 2026',
        description:
            'Official responsive web platform for a cross-border sourcing consultancy, featuring multi-flow application forms, automated email routing, and production-grade API security.',
        highlights: [
            'Built with Next.js 16, React 19, TypeScript & Tailwind CSS 4',
            'Multi-flow forms with React Hook Form + Zod, file uploads & email via Resend',
            'Secured APIs with Cloudflare Turnstile, honeypot traps & Upstash Redis rate limiting',
            'Automated API integration tests for validation, rate-limits & secret protection',
        ],
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zod', 'Resend', 'Upstash Redis'],
        links: [
            { label: 'Live Site', href: 'https://aplust-ventures.vercel.app/', icon: 'link' },
        ],
        featuredImage: {
            src: '/aplust-ventures-1.png',
            alt: 'AplusT Homepage Hero',
            caption: 'Homepage & Sourcing Services',
        },
        galleryImages: [
            { src: '/aplust-ventures-1.png', alt: 'AplusT Homepage Hero', caption: 'Homepage & Global Sourcing Overview' },
            { src: '/aplust-ventures-2.png', alt: 'AplusT Application Form', caption: 'Multi-flow Client Application & Inquiry Form' },
            { src: '/aplust-ventures-3.png', alt: 'AplusT Services', caption: 'Core Services & Sourcing Process Breakdown' },
            { src: '/aplust-ventures-4.png', alt: 'AplusT About Us', caption: 'Company Background, Team & Mission' },
            { src: '/aplust-ventures-5.png', alt: 'AplusT Footer Section', caption: 'Footer & Contact Channels' },
        ],
    },
    {
        id: 2,
        title: 'CaloViet AI',
        category: 'project',
        platform: 'mobile',
        role: 'Mobile Developer — School Project',
        duration: 'Sep — Nov 2026',
        description:
            'Mobile nutrition & calorie tracking app for Vietnamese cuisine with AI food scanning, container selection, macronutrient parsing, and rich analytics dashboards.',
        highlights: [
            'AI-powered food scanning with container selection & macro parsing',
            'Type-safe API clients from OpenAPI specs via Orval',
            'Server state managed with TanStack Query & Zod runtime validation',
            'Interactive meal logging, portion adjustment & daily/weekly/monthly analytics',
        ],
        techStack: ['React Native', 'Expo SDK 58', 'TypeScript', 'NativeWind', 'TanStack Query', 'Zod', 'Orval'],
        links: [
            { label: 'GitHub', href: 'https://github.com/MPIO1002/VNFood-Nutrition-FE/', icon: 'github' },
        ],
        featuredImage: {
            src: '/caloviet-homescreen.png',
            alt: 'CaloViet Home Screen',
            caption: 'Daily Calorie & Macro Tracking Dashboard',
        },
        galleryImages: [
            { src: '/caloviet-homescreen.png', alt: 'CaloViet Home Screen', caption: 'Daily Calorie & Macro Tracking Dashboard' },
            { src: '/caloviet-scanscreen.png', alt: 'CaloViet AI Scanner', caption: 'AI Camera Vietnamese Food Scanning & Detection' },
            { src: '/caloviet-analytics-screen.png', alt: 'CaloViet Analytics', caption: 'Nutrient Analytics & Historical Trends' },
            { src: '/caloviet-diaryscreen.png', alt: 'CaloViet Meal Diary', caption: 'Interactive Meal Diary & Portion Customization' },
            { src: '/caloviet-profilescreen.png', alt: 'CaloViet Profile', caption: 'User Profile, TDEE & Health Target Settings' },
        ],
    },
    {
        id: 3,
        title: 'Mộng Huyễn Giang Hồ Compendium',
        category: 'work',
        platform: 'desktop',
        role: 'Web Developer Intern',
        duration: 'Feb — Jul 2025',
        description:
            'Character compendium website extending the official game page, helping players easily browse and manage character data with full CRUD functionality.',
        highlights: [
            'Comprehensive CRUD for character management via RESTful APIs',
            'Containerized with Docker and deployed on a VPS',
            "Expanded from the official game's main page for player accessibility",
        ],
        techStack: ['ReactJS', 'NodeJS', 'Docker', 'VPS'],
        links: [
            { label: 'Live Site', href: 'https://mhgh.ggo.vn/thuvientuong/', icon: 'link' },
        ],
        featuredImage: {
            src: '/mhgh-hero-section.png',
            alt: 'MHGH Compendium Hero',
            caption: 'Game Character Compendium & Hero Roster',
        },
        galleryImages: [
            { src: '/mhgh-hero-section.png', alt: 'MHGH Compendium Hero', caption: 'Game Character Compendium & Hero Roster' },
            { src: '/mhgh-admin.png', alt: 'MHGH Admin Panel', caption: 'Admin Dashboard for Character CRUD Management' },
            { src: '/mhgh-heroes-detail.png', alt: 'MHGH Character Detail', caption: 'In-depth Character Skill & Stat Details' },
        ],
    },
    {
        id: 4,
        title: 'Cineme',
        category: 'project',
        platform: 'desktop',
        role: 'Frontend Developer',
        duration: '4 months',
        description:
            'Cinema management system with notable integrations including WebSocket for real-time updates, RabbitMQ messaging, Redis caching, and a generative seat-assignment algorithm.',
        highlights: [
            'Real-time updates via WebSocket integration',
            'Message queuing with RabbitMQ & caching with Redis',
            'Generative algorithm for intelligent seat assignment',
        ],
        techStack: ['ReactJS', 'WebSocket', 'RabbitMQ', 'Redis'],
        links: [
            { label: 'GitHub', href: 'https://github.com/MPIO1002/CINEME', icon: 'github' },
            { label: 'Video Demo', href: 'https://www.tiktok.com/@thichfrontend/video/7585484069299948821', icon: 'video' },
        ],
        featuredImage: {
            src: '/cineme-homesreen.png',
            alt: 'Cineme Homepage',
            caption: 'Cinema Home & Movie Showtime Booking',
        },
        galleryImages: [
            { src: '/cineme-homesreen.png', alt: 'Cineme Homepage', caption: 'Cinema Home & Movie Showtime Booking' },
            { src: '/cineme-bookingscreen.png', alt: 'Cineme Seat Booking', caption: 'Real-time WebSocket Interactive Seat Selection' },
            { src: '/cineme-dashboardscreen.png', alt: 'Cineme Dashboard', caption: 'Box Office Revenue & Ticket Sales Analytics' },
            { src: '/cineme-film-detail.png', alt: 'Cineme Film Detail', caption: 'Film Information, Cast & Trailer Player' },
            { src: '/cineme-film-list.png', alt: 'Cineme Film Catalogue', caption: 'Movie Catalogue with Category & Date Filters' },
        ],
    },
];

// ─── Icons ───────────────────────────────────────────────────────────────────
function LinkIcon({ type, className = 'w-4 h-4' }: { type: string; className?: string }) {
    switch (type) {
        case 'github':
            return (
                <svg className={className} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            );
        case 'link':
            return (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            );
        case 'doc':
            return (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            );
        case 'video':
            return (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        default:
            return null;
    }
}

// ─── Interactive Lightbox Modal (Nền nhạt / Light Theme) ─────────────────────
interface GalleryModalProps {
    project: Project;
    initialIndex: number;
    onClose: () => void;
}

function GalleryModal({ project, initialIndex, onClose }: GalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const total = project.galleryImages.length;

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
    }, [total]);

    const prevImage = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, nextImage, prevImage]);

    const activeImage = project.galleryImages[currentIndex];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex flex-col justify-between bg-neutral-100/90 backdrop-blur-xl p-4 sm:p-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                onClick={onClose}
            >
                {/* ── Top Bar ──────────────────────────────────────────────── */}
                <div
                    className="flex items-center justify-between z-10 w-full max-w-6xl mx-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div>
                        <div className="flex items-center gap-3">
                            <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                                {project.title}
                            </h4>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-200 text-neutral-800">
                                {currentIndex + 1} / {total}
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">{activeImage.caption}</p>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-white hover:bg-neutral-200 text-neutral-800 border border-neutral-300 shadow-sm flex items-center justify-center transition-colors text-base font-bold cursor-pointer"
                        aria-label="Close gallery"
                    >
                        ✕
                    </button>
                </div>

                {/* ── Main Image View Area (Clicking outside image closes modal) ── */}
                <div className="relative flex-1 w-full max-w-6xl mx-auto my-3 sm:my-4 flex items-center justify-center">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-neutral-900 border border-neutral-300 shadow-md hover:shadow-lg flex items-center justify-center transition-all cursor-pointer"
                        aria-label="Previous image"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div
                        className="relative w-full h-full max-h-[75vh] flex items-center justify-center p-2 sm:p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            key={activeImage.src}
                            src={activeImage.src}
                            alt={activeImage.alt}
                            fill
                            unoptimized
                            className="object-contain drop-shadow-md select-none"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-neutral-900 border border-neutral-300 shadow-md hover:shadow-lg flex items-center justify-center transition-all cursor-pointer"
                        aria-label="Next image"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* ── Thumbnail Strip ──────────────────────────────────────── */}
                <div
                    className="w-full max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2 z-10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md px-3 py-2 rounded-2xl border border-neutral-200 shadow-sm">
                        {project.galleryImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(idx);
                                }}
                                className={`relative w-16 h-12 sm:w-20 sm:h-14 flex-shrink-0 overflow-hidden rounded-md transition-all cursor-pointer ${currentIndex === idx
                                    ? 'ring-2 ring-black scale-105 opacity-100 shadow'
                                    : 'opacity-50 hover:opacity-90'
                                    }`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

// ─── Single Project Card ─────────────────────────────────────────────────────
function ProjectCard({
    project,
    index,
    onOpenGallery,
}: {
    project: Project;
    index: number;
    onOpenGallery: (project: Project) => void;
}) {
    const number = String(index + 1).padStart(2, '0');
    const isCaloViet = project.id === 2; // CaloViet AI (Mobile App)

    // ── Content Block Component (Reused for both layouts) ───────────────────
    const contentBlock = (
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
            <div>
                {/* Title + Number + Badges Group */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <span
                            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-black select-none leading-none shrink-0"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            {number}
                        </span>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-neutral-600 mt-1 sm:mt-1.5">
                                <span className="font-semibold text-black">{project.role}</span>
                                <span className="hidden sm:inline text-neutral-300">•</span>
                                <span className="text-neutral-500 block sm:inline">{project.duration}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white flex-shrink-0">
                            {project.category === 'work' ? 'Experience' : 'Personal'}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-medium text-neutral-700 bg-neutral-100 border border-neutral-200">
                            {project.platform === 'mobile' ? 'Mobile App' : 'Desktop Web'}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-neutral-800 leading-relaxed mt-4 text-sm sm:text-base font-normal">
                    {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        KEY HIGHLIGHTS
                    </h4>
                    <ul className="space-y-1.5">
                        {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-800">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                                <span>{h}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom: Tech Stack & Action Links (Pushed down to bottom edge of the card) */}
            <div className="mt-8 pt-4 space-y-3.5">
                {/* Tech Stack Pills - Xếp ngang trải rộng tự nhiên */}
                <div className="flex flex-wrap items-center gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-neutral-100 text-black border border-neutral-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Links & Gallery Trigger (Ảnh và Link) */}
                <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                    <button
                        type="button"
                        onClick={() => onOpenGallery(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl border border-neutral-300 text-black bg-neutral-50 hover:bg-black hover:text-white hover:border-black transition-colors duration-200 shadow-sm cursor-pointer"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Screenshots ({project.galleryImages.length})</span>
                    </button>

                    {project.links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl border border-neutral-300 text-black bg-white hover:bg-black hover:text-white hover:border-black transition-colors duration-200 shadow-sm cursor-pointer"
                        >
                            <LinkIcon type={link.icon} />
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

    // ── SPECIAL LAYOUT FOR CALOVIET: Content on LEFT, Massive Impact Phone on RIGHT ──
    if (isCaloViet) {
        return (
            <motion.article
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-sm overflow-hidden"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
                <div className="flex flex-col lg:flex-row items-stretch">
                    {/* Left: Content Block */}
                    <div className="flex-1 p-6 sm:p-8 md:p-10 order-2 lg:order-1 flex flex-col justify-between">
                        {contentBlock}
                    </div>

                    {/* Right: Large Featured Mobile Phone Mockup */}
                    <div
                        onClick={() => onOpenGallery(project)}
                        className="group relative w-full lg:w-[440px] xl:w-[480px] flex-shrink-0 bg-white cursor-pointer overflow-hidden rounded-t-2xl lg:rounded-t-none lg:rounded-r-2xl sm:rounded-t-3xl sm:lg:rounded-r-3xl order-1 lg:order-2 flex items-center justify-center p-3 sm:p-5 lg:p-6 min-h-[480px] sm:min-h-[580px] lg:min-h-[680px]"
                    >
                        {/* High-Impact Big Phone Frame (Takes 95%+ of the column height) */}
                        <div className="relative w-full max-w-[360px] sm:max-w-[400px] h-[480px] sm:h-[580px] lg:h-[680px]">
                            <Image
                                src={project.featuredImage.src}
                                alt={project.featuredImage.alt}
                                fill
                                unoptimized
                                className="object-contain object-center drop-shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 480px"
                                priority
                            />
                        </div>

                        {/* Subtle Hover Shade */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Bottom-right: Interactive View Gallery Button */}
                        <div className="absolute bottom-3 right-3 z-10">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenGallery(project);
                                }}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-black/85 hover:bg-black text-white backdrop-blur-md shadow-md transition-all duration-200 cursor-pointer"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>View Photos ({project.galleryImages.length})</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.article>
        );
    }

    // ── STANDARD LAYOUT FOR DESKTOP PROJECTS: Large Full-Width Image Top, Content Bottom ──
    return (
        <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-sm overflow-hidden"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
            {/* ── Top: Large Featured Image (Full-Width, Widescreen 16:9 / 16:10, flush with outer card edges) ── */}
            <div
                onClick={() => onOpenGallery(project)}
                className="group relative w-full aspect-[16/10] sm:aspect-[16/9] bg-neutral-100 cursor-pointer overflow-hidden rounded-t-2xl sm:rounded-t-3xl"
            >
                <Image
                    src={project.featuredImage.src}
                    alt={project.featuredImage.alt}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 1152px"
                    priority={index === 0}
                />

                {/* Subtle Hover Shade */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bottom-right: Interactive View Gallery Button */}
                <div className="absolute bottom-3 right-3 z-10">
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpenGallery(project);
                        }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-black/85 hover:bg-black text-white backdrop-blur-md shadow-md transition-all duration-200 cursor-pointer"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>View All Photos ({project.galleryImages.length})</span>
                    </button>
                </div>
            </div>

            {/* ── Bottom: Project Info ──────────────────────────────────── */}
            <div className="p-6 sm:p-8 md:p-10">
                {contentBlock}
            </div>
        </motion.article>
    );
}

// ─── Main Section ────────────────────────────────────────────────────────────
export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 relative"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
            {/* Rotating Qualities Loop at top */}
            <div
                className="absolute left-0 right-0 top-0 overflow-hidden z-20"
                style={{ transform: 'rotate(-5deg)', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginTop: '-40px' }}
            >
                <div className="bg-blue-700 py-4 relative">
                    <div className="flex gap-0 animate-loop-scroll">
                        {['PASSIONATE', 'CREATIVE', 'PROBLEM SOLVER', 'TEAM PLAYER', 'FAST LEARNER', 'DETAIL-ORIENTED', 'INNOVATIVE', 'DEDICATED'].map((q) => (
                            <span key={q} className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ {q}</span>
                        ))}
                        {['PASSIONATE', 'CREATIVE', 'PROBLEM SOLVER', 'TEAM PLAYER', 'FAST LEARNER', 'DETAIL-ORIENTED', 'INNOVATIVE', 'DEDICATED'].map((q) => (
                            <span key={`dup-${q}`} className="text-white text-2xl md:text-3xl font-bold mx-8 whitespace-nowrap">✦ {q}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center mb-4 mt-4 head-font text-black">
                    Projects
                </h1>
                <p className="text-center text-neutral-600 text-base sm:text-lg mb-16 max-w-2xl mx-auto font-medium">
                    A selection of work I&apos;ve built — from freelance products to personal explorations.
                </p>

                {/* Project Cards */}
                <div className="space-y-16 lg:space-y-24">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onOpenGallery={(proj) => setSelectedProject(proj)}
                        />
                    ))}
                </div>
            </div>

            {/* Interactive Lightbox Gallery Modal (Nền nhạt / Light Background) */}
            {selectedProject && (
                <GalleryModal
                    project={selectedProject}
                    initialIndex={0}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
