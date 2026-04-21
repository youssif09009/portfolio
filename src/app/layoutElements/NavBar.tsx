"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home as HomeIcon } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [neon, setNeon] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    const navItems = ["My Skills", "Projects", "Contact"];

    // Detect client-side
    useEffect(() => {
        setMounted(true);

        // Handle scroll event for navbar background change
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Neon effect on client only
    useEffect(() => {
        if (!mounted) return;
        const interval = setInterval(() => setNeon((prev) => !prev), 2500);
        return () => clearInterval(interval);
    }, [mounted]);

    const handleNavClick = (item: string) => {
        if (item === "Contact") {
            setContactOpen(true);
            setOpen(false);
            return;
        }

        const sectionMap: Record<string, string> = {
            "My Skills": "skills",
            "Projects": "projects",
        };

        const id = sectionMap[item];
        if (id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
            }
        }
    };

    // Render nothing until mounted to avoid hydration error
    if (!mounted) return null;

    return (
        <>
            <nav className="fixed w-full top-4 z-50 px-4">
                <motion.div
                    className={`relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-900/40 via-blue-950/30 to-purple-900/40 shadow-xl backdrop-blur-3xl border border-purple-700/50 ${
                        neon ? "animate-neon-glow" : ""
                    } ${scrolled ? "bg-purple-900/70" : ""}`}
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <HomeIcon size={28} className="text-white" />
                    </motion.div>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex gap-8 text-white font-medium relative">
                        {navItems.map((item) => (
                            <motion.li
                                key={item}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group cursor-pointer"
                            >
                                <button
                                    onClick={() => handleNavClick(item)}
                                    className="px-3 py-1 text-white font-semibold relative z-10 hover:text-purple-300 transition-all duration-300"
                                >
                                    {item}
                                </button>
                                <motion.span
                                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden text-white duration-300 z-20 p-1 rounded-lg bg-purple-800/30"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </motion.button>
                </motion.div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="md:hidden bg-gradient-to-b from-purple-900/90 via-blue-950/80 to-purple-900/90 rounded-2xl shadow-2xl backdrop-blur-3xl border border-purple-700/40 overflow-hidden mt-2"
                        >
                            <ul className="flex flex-col items-center gap-2 py-4 text-white font-medium">
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative w-full text-center cursor-pointer"
                                    >
                                        <button
                                            onClick={() => handleNavClick(item)}
                                            className="w-full px-6 py-3 hover:bg-purple-700/30 transition-all duration-300 font-semibold rounded-lg mx-2"
                                        >
                                            {item}
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Contact Modal */}
            <AnimatePresence>
                {contactOpen && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setContactOpen(false)}
                        />

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: -50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: -50 }}
                            transition={{
                                type: "spring",
                                damping: 15,
                                stiffness: 300,
                                duration: 0.5
                            }}
                            className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 rounded-3xl shadow-2xl p-8 max-w-md w-full text-center z-10 border border-purple-600/50"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute top-4 right-4 text-white bg-purple-700 rounded-full p-1"
                                onClick={() => setContactOpen(false)}
                            >
                                <X size={20} />
                            </motion.button>

                            <motion.h2
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                            >
                                Contact Me
                            </motion.h2>
                            <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-300 mb-8"
                            >
                                Reach me through these platforms:
                            </motion.p>

                            <motion.div
                                className="flex justify-center gap-6 text-4xl text-purple-400 mb-6"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.a
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://wa.me/+201559472876"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-purple-900/50 hover:bg-green-500/20 transition-colors duration-300"
                                >
                                    <FaWhatsapp className="hover:text-green-400 transition-colors duration-300 drop-shadow-xl" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://linkedin.com/in/youssif-sameh-4a6261376?utm_source=share&utm_campaign=share_via_content=profile&utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-purple-900/50 hover:bg-blue-600/20 transition-colors duration-300"
                                >
                                    <FaLinkedin className="hover:text-blue-400 transition-colors duration-300 drop-shadow-xl" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=youssifdeveloperr999@gmail.com"
                                    className="p-2 rounded-full bg-purple-900/50 hover:bg-red-500/20 transition-colors duration-300"
                                >
                                    <FaEnvelope className="hover:text-red-400 transition-colors duration-300 drop-shadow-xl" />
                                </motion.a>
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setContactOpen(false)}
                                className="px-8 py-3 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-xl shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-semibold"
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .animate-neon-glow {
                    box-shadow: 0 0 10px #a855f7, 0 0 20px #ec4899,
                    0 0 30px #3b82f6, 0 0 40px rgba(255, 255, 255, 0.2);
                    animation: pulseNeon 2.5s infinite alternate;
                }

                @keyframes pulseNeon {
                    0% {
                        box-shadow: 0 0 10px #a855f7, 0 0 20px #ec4899,
                        0 0 30px #3b82f6, 0 0 40px rgba(255, 255, 255, 0.2);
                    }
                    50% {
                        box-shadow: 0 0 20px #a855f7, 0 0 30px #ec4899,
                        0 0 40px #3b82f6, 0 0 50px rgba(255, 255, 255, 0.3);
                    }
                    100% {
                        box-shadow: 0 0 15px #a855f7, 0 0 25px #ec4899,
                        0 0 35px #3b82f6, 0 0 45px rgba(255, 255, 255, 0.25);
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;