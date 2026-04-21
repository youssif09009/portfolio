"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { Code, Image, ShoppingCart, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import Projects from "@/app/components/projects/page";
import Skills from "@/app/components/skills/page";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// ----------------- Component meteors (شهب) -----------------
function Meteors() {
    const group = useRef<THREE.Group>(null);

    useFrame(() => {
        if (group.current) {
            group.current.children.forEach((meteor) => {
                meteor.position.x -= 0.05; // تتحرك شمال
                meteor.position.y += 0.02; // تتحرك لفوق
                if (meteor.position.x < -10 || meteor.position.y > 6) {
                    meteor.position.x = Math.random() * 20 - 10; // رجّعها من جديد
                    meteor.position.y = Math.random() * -5;
                }
            });
        }
    });

    return (
        <group ref={group}>
            {Array.from({ length: 25 }).map((_, i) => (
                <mesh key={i} position={[Math.random() * 10, Math.random() * 5, -2]}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
            ))}
        </group>
    );
}

// ----------------- Component planet (كوكب + حلقات) -----------------
function Planet() {
    const planetRef = useRef<THREE.Mesh>(null);
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (planetRef.current) {
            planetRef.current.rotation.y += 0.01; // دوران الكوكب
        }
        if (ringRef.current) {
            ringRef.current.rotation.z += 0.005; // دوران الحلقة
        }
    });

    return (
        <group position={[6, 2, -5]}> {/* مكان الكوكب أقصى يمين فوق */}
            {/* الكوكب */}
            <mesh ref={planetRef}>
                <sphereGeometry args={[2, 64, 64]} /> {/* كبرته */}
                <meshStandardMaterial
                    color="#9370db"
                    emissive="#a855f7"
                    emissiveIntensity={4}
                    metalness={0.3}
                    roughness={0.4}
                />
            </mesh>

            {/* الحلقات */}
            <mesh ref={ringRef} rotation={[1.5, 0, 0]}>
                <torusGeometry args={[3, 0.15, 32, 200]} /> {/* كبرتها */}
                <meshStandardMaterial
                    color="#c084fc"
                    emissive="#c084fc"
                    emissiveIntensity={2}
                />
            </mesh>
        </group>
    );
}

// ----------------- Main Section -----------------
export default function HomeSection() {
    const roles = [
        { title: "Programmer", icon: <Code size={34} /> },
        { title: "Graphic Designer", icon: <Image size={34} /> },
        { title: "Digital Marketer", icon: <Megaphone size={34} /> },
        { title: "Media Buyer", icon: <ShoppingCart size={34} /> },
    ];

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative w-screen font-sans overflow-x-hidden">
            {/* Header Section */}
            <section className="min-h-screen flex flex-col justify-center ml-6 md:ml-10 z-50 text-left relative">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white font-extrabold text-4xl md:text-5xl mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] animate-pulse"
                >
                    Hello, I&apos;m Youssif.
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0, y: -40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-extrabold text-5xl md:text-6xl bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                >
                    I turn ideas into code.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-6 flex gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollTo("skills")}
                        className="px-6 py-3 bg-purple-700 rounded-lg text-white font-semibold tracking-wide uppercase hover:bg-purple-800 transition-all duration-300"
                    >
                        My Skills
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollTo("projects")}
                        className="px-6 py-3 bg-blue-700 rounded-lg text-white font-semibold tracking-wide uppercase hover:bg-blue-800 transition-all duration-300"
                    >
                        Projects
                    </motion.button>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section
                id="skills"
                className="min-h-screen flex flex-col items-center w-full max-w-7xl px-4 sm:px-6 space-y-10 mx-auto mt-16 z-50 relative"
            >
                <h3 className="text-amber-50 text-lg md:text-xl font-medium w-full text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    Who Am I..?
                </h3>

                <span className="text-white text-md md:text-base font-bold self-start drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          I&apos;m A
        </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full justify-items-center">
                    {roles.map((role) => (
                        <div
                            key={role.title}
                            className="relative w-56 h-40 sm:w-60 md:w-64 md:h-40 bg-[#0a1f44]/40 rounded-xl flex flex-col items-center justify-center overflow-hidden shadow-lg transition-all duration-500"
                        >
                            <div
                                className="absolute inset-0 rounded-xl p-[2px]"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, #a855f7, #ec4899, #3b82f6, #a855f7)",
                                    animation: "rotate 8s linear infinite",
                                }}
                            />
                            <div className="absolute inset-0 rounded-xl bg-[#0a1f44]/80 backdrop-blur-sm" />
                            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <span className="text-white text-lg md:text-xl font-bold mb-2 relative drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
                  {role.title}
                </span>
                                <div className="text-white relative drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                                    {role.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full mt-12 relative z-50">
                    <Skills />
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen mt-16 z-50 relative">
                <Projects />
            </section>

            {/* Background Canvas */}
            <Canvas
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: -1,
                    pointerEvents: "none",
                }}
                camera={{ position: [0, 0, 10], fov: 75 }}
            >
                <color attach="background" args={["#000814"]} />
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <Stars
                    radius={150}
                    depth={50}
                    count={5000}
                    factor={3}
                    saturation={0}
                    fade
                    speed={2}
                />
                <Meteors />
                <Planet />
                <EffectComposer>
                    <Bloom
                        intensity={2}
                        luminanceThreshold={0}
                        luminanceSmoothing={0.9}
                    />
                </EffectComposer>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
            </Canvas>

            <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
