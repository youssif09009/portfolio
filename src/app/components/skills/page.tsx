"use client";

import {
    FaReact, FaNodeJs, FaDatabase, FaDocker, FaAws, FaGitAlt,
    FaJs, FaMobileAlt, FaLaptopCode, FaServer
} from "react-icons/fa";
import {
    SiMongodb, SiTypescript, SiTailwindcss, SiNextdotjs, SiNestjs,
    SiRedux, SiPrisma, SiPostgresql, SiThreedotjs, SiFramer, SiGnubash, SiGreensock
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
        { name: "React", icon: <FaReact className="text-sky-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
        { name: "Express", icon: <SiGnubash className="text-gray-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
        { name: "Prisma", icon: <SiPrisma className="text-indigo-400" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "GSAP", icon: <SiGreensock className="text-green-500" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
        { name: "Three.js", icon: <SiThreedotjs className="text-white" /> },
        { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
        { name: "AWS", icon: <FaAws className="text-orange-400" /> },
        { name: "GitHub", icon: <FaGitAlt className="text-gray-300" /> },
    ];

    const specializations = [
        { title: "Web Development", desc: "Building modern full-stack websites with React, Next.js, Node.js, and databases.", icon: <FaLaptopCode className="text-indigo-400 text-5xl" /> },
        { title: "Mobile Development", desc: "Cross-platform apps with React Native, Expo, and smooth animations.", icon: <FaMobileAlt className="text-green-400 text-5xl" /> },
        { title: "DevOps", desc: "Dockerized apps, CI/CD pipelines, scalable deployment.", icon: <FaServer className="text-yellow-400 text-5xl" /> },
    ];

    return (
        <section className="relative w-full min-h-screen text-white">
            <div className="relative flex flex-col items-center justify-center px-6 py-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    I&apos;m <span className="text-cyan-400">Specialized</span> With Programming
                </motion.h2>
                <p className="max-w-3xl text-gray-300 mb-12 leading-relaxed">
                    I have learnt a lot to make high quality full stack websites and apps from code to deploy.
                </p>

                {/* Specialization Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                    {specializations.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="relative bg-black/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-lg hover:bg-black/50 transition"
                        >
                            <div className="mb-4 flex justify-center">{s.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                            <p className="text-sm text-gray-400">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Skills Grid */}
            <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-12"
                >
                    Skills
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="flex flex-col items-center justify-center p-4 bg-black/30 rounded-2xl shadow-lg cursor-pointer transition"
                        >
                            <div className="text-5xl mb-3">{skill.icon}</div>
                            <p className="text-lg font-semibold">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
