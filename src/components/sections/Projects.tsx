"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-accent-sage to-neon-cyan",
  },
  {
    id: 2,
    title: "Import Export Website ",
    description: "Its an import export website named as JD ENTERPRISES GLOBAL ",
    tech: ["React", "Node.js", "OpenAI"],
    image: "/images/JD_img.png",
    github: "https://github.com/ritishabale/-JD-ENTERPRISES-GLOBAL-TRADE",
    demo: "https://www.jdenterprisesglobaltrade.com/",
    color: "from-accent-green to-neon-purple",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Comprehensive analytics dashboard for social media management with real-time metrics and automated reporting.",
    tech: ["Vue.js", "Firebase", "Chart.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-neon-cyan to-accent-sage",
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description: "Mobile-first fitness application with workout tracking, progress visualization, and personalized recommendations.",
    tech: ["React Native", "Express", "MySQL", "Redux"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-neon-purple to-accent-green",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "Modern real estate listing platform with 3D virtual tours, advanced search filters, and booking system.",
    tech: ["Next.js", "Three.js", "Prisma", "AWS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-accent-sage to-accent-green",
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Interactive learning platform with video courses, quizzes, progress tracking, and certificate generation.",
    tech: ["React", "Django", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-neon-cyan to-accent-green",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative glass-card rounded-2xl overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 glass-card rounded-full hover:neon-border"
            aria-label="View GitHub"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 glass-card rounded-full hover:neon-border"
            aria-label="View Live Demo"
          >
            <ExternalLink className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        <p className="text-foreground/70 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium glass-card rounded-full text-accent-sage"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 3D Effect Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, transparent 0%, ${
            project.color.includes('blue') ? 'rgba(0, 217, 255, 0.1)' : 'rgba(168, 85, 247, 0.1)'
          } 100%)`,
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-sage to-accent-green mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work featuring innovative solutions and creative implementations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 glass-card rounded-full font-semibold hover:neon-border transition-all"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
