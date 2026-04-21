"use client";

import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// TypeScript interfaces for project data
interface ProjectData {
    id: string;
    name: string;
    description: string;
    url: string;
    glowColor: string;
    images: string[];
};

// Hardcoded project data
const projects: ProjectData[] = [
    {
        id: 'admin-dashboard',
        name: 'UI Admin Dashboard',
        description: 'Modern admin dashboard with intuitive UI design',
        url: 'https://admin-dashboard.vercel.app', // placeholder, adjust if needed
        glowColor: 'from-cyan-500 via-blue-400 to-purple-300',
        images: [
            '/assets/images/projects/admin-dashbaord/Screenshot (125).png',
            '/assets/images/projects/admin-dashbaord/Screenshot (126).png',
            '/assets/images/projects/admin-dashbaord/Screenshot (127).png',
            '/assets/images/projects/admin-dashbaord/Screenshot (128).png'
        ]
    },
    {
        id: 'demedia',
        name: 'DeMedia',
        description: 'Modern new social media platform',
        url: 'https://de-media.vercel.app',
        glowColor: 'from-pink-500 via-red-400 to-yellow-300',
        images: [
            '/assets/images/projects/demedia/Screenshot (94).png',
            '/assets/images/projects/demedia/Screenshot (95).png',
            '/assets/images/projects/demedia/Screenshot (96).png',
            '/assets/images/projects/demedia/Screenshot (97).png',
            '/assets/images/projects/demedia/Screenshot (98).png',
            '/assets/images/projects/demedia/Screenshot (99).png',
            '/assets/images/projects/demedia/Screenshot (100).png',
            '/assets/images/projects/demedia/Screenshot (101).png',
            '/assets/images/projects/demedia/Screenshot (102).png',
            '/assets/images/projects/demedia/Screenshot (103).png',
            '/assets/images/projects/demedia/Screenshot (104).png',
            '/assets/images/projects/demedia/Screenshot (105).png'
        ]
    },
    {
        id: 'productivity-app',
        name: 'Productivity App',
        description: 'A comprehensive productivity application to boost efficiency',
        url: 'https://productivity-app.vercel.app', // placeholder
        glowColor: 'from-green-500 via-teal-400 to-blue-300',
        images: [
            '/assets/images/projects/prodcutivty-app/WhatsApp Image 2026-04-08 at 20.15.34.jpeg',
            '/assets/images/projects/prodcutivty-app/WhatsApp Image 2026-04-08 at 20.15.43.jpeg',
            '/assets/images/projects/prodcutivty-app/WhatsApp Image 2026-04-08 at 20.15.54.jpeg',
            '/assets/images/projects/prodcutivty-app/WhatsApp Image 2026-04-08 at 20.16.04.jpeg'
        ]
    },
    {
        id: 'lamborghini',
        name: 'Lamborghini redesign',
        description: 'Redesign for lamborghini unofficial version',
        url: 'https://lamboredesign.vercel.app',
        glowColor: 'from-blue-400 to-green-300',
        images: [] // no images provided
    }
];

export default function Projects() {

    // refs & animation controls
    const titleRef = useRef<HTMLDivElement | null>(null);
    const titleInView = useInView(titleRef, { margin: "-100px" });
    const titleControls = useAnimation();

    if (titleInView) titleControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });

    return (
        <section className="relative w-full min-h-screen text-white overflow-hidden">
            {/* Title */}
            <motion.div
                ref={titleRef}
                initial={{ opacity: 0, y: -50 }}
                animate={titleControls}
                className="pt-16 text-center z-20 relative"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                    My Projects
                </h1>
                <p className="mt-2 text-sm md:text-lg text-gray-300">
                    Explore some of the work I&apos;ve been building ✨
                </p>
            </motion.div>

            {/* Content - Projects */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-10 px-6 md:px-20 mt-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="w-full max-w-4xl"
                    >
                        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group">
                            {/* Project Name with Glowing Effect */}
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${project.glowColor} bg-clip-text text-transparent drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300`}>
                                {project.name}
                            </h2>
                            
                            {/* Project Description */}
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            
                            {/* Project Images */}
                            {project.images.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-4 text-white">Screenshots</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {project.images.map((image, imgIndex) => (
                                            <motion.img
                                                key={imgIndex}
                                                src={image}
                                                alt={`${project.name} screenshot ${imgIndex + 1}`}
                                                className="w-full h-48 object-cover rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                                                whileHover={{ scale: 1.05 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {/* Project Link */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                            >
                                <span>Visit Project</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                            
                            {/* Project URL Display */}
                            <div className="mt-4 text-sm text-gray-400">
                                <span className="font-mono">{project.url.replace('https://', '')}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}


