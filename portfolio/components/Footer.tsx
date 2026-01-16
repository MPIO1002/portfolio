'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a1a1a] text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Column */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Phuc Huynh</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Frontend developer passionate about creating beautiful and functional web applications.
                            Specializing in modern web technologies and cloud solutions.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
                        <div className="space-y-3">
                            <a href="mailto:huynhminhphuc.fe@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                                <FaEnvelope className="w-4 h-4" />
                                <span>huynhminhphuc.fe@gmail.com</span>
                            </a>
                        </div>
                        {/* Social Links */}
                        <div className="flex gap-4 mt-4">
                            <a href="https://github.com/MPIO1002" target="_blank" rel="noopener noreferrer" 
                               className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <FaGithub className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Built With */}
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <span>Built with</span>
                            <div className="flex items-center gap-2">
                                <SiReact className="w-4 h-4" style={{ color: '#61DAFB' }} />
                                <SiNextdotjs className="w-4 h-4" />
                                <SiTailwindcss className="w-4 h-4" style={{ color: '#06B6D4' }} />
                                <SiTypescript className="w-4 h-4" style={{ color: '#3178C6' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
