"use client";

import { useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
});

const Float = dynamic(() => import("@react-three/drei").then((mod) => mod.Float), {
  ssr: false,
});

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95, color: "#61DAFB" },
      { name: "Next.js", level: 90, color: "#000000" },
      { name: "TypeScript", level: 88, color: "#3178C6" },
      { name: "Tailwind CSS", level: 92, color: "#a3b18a" },
      { name: "Three.js", level: 85, color: "#000000" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90, color: "#339933" },
      { name: "Python", level: 85, color: "#3776AB" },
      { name: "PostgreSQL", level: 88, color: "#336791" },
      { name: "MongoDB", level: 86, color: "#47A248" },
      { name: "GraphQL", level: 82, color: "#E10098" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 93, color: "#F05032" },
      { name: "Docker", level: 84, color: "#2496ED" },
      { name: "AWS", level: 80, color: "#FF9900" },
      { name: "Figma", level: 88, color: "#F24E1E" },
      { name: "VS Code", level: 95, color: "#007ACC" },
    ],
  },
];

function FloatingIcon({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<any>(null);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function SkillBar({ skill, index }: { skill: typeof skillCategories[0]['skills'][0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-foreground">{skill.name}</span>
        <span className="text-sm text-foreground/60">{skill.level}%</span>
      </div>
      <div className="h-3 glass-card rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
          className="h-full relative"
          style={{
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
          }}
        >
          <motion.div
            animate={isHovered ? { x: [0, 10, 0] } : {}}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute inset-0 bg-white/20"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-sage to-accent-green mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="h-[400px] glass-card rounded-2xl overflow-hidden hidden lg:block"
          >
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3a5a40" />
                
                {/* Floating 3D Icons */}
                <FloatingIcon position={[-2, 2, 0]} color="#61DAFB" />
                <FloatingIcon position={[2, 2, 0]} color="#3178C6" />
                <FloatingIcon position={[-2, -2, 0]} color="#339933" />
                <FloatingIcon position={[2, -2, 0]} color="#47A248" />
                <FloatingIcon position={[0, 0, 0]} color="#a3b18a" />
              </Canvas>
            </Suspense>
          </motion.div>

          {/* Skills List */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  {category.title}
                </h3>
                <div>
                  {category.skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Achievements & <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                year: "2023",
              },
              {
                title: "Meta Frontend Developer",
                issuer: "Meta",
                year: "2022",
              },
              {
                title: "Google UX Design",
                issuer: "Google",
                year: "2023",
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 rounded-2xl group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-sage to-accent-green rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                  {cert.title}
                </h4>
                <p className="text-foreground/60 text-sm mb-1">{cert.issuer}</p>
                <p className="text-accent-sage text-sm font-medium">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
