"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Rocket, Award } from "lucide-react";

const experiences = [
  {
    year: "2023 - Present",
    role: "Senior Full-Stack Developer",
    company: "Tech Company Inc.",
    description: "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies.",
  },
  {
    year: "2021 - 2023",
    role: "Full-Stack Developer",
    company: "Creative Agency",
    description: "Developed responsive web applications and managed client projects from concept to deployment.",
  },
  {
    year: "2019 - 2021",
    role: "Frontend Developer",
    company: "Startup Studio",
    description: "Built modern user interfaces and collaborated with design teams to create engaging experiences.",
  },
];

const stats = [
  { icon: Code2, value: "50+", label: "Projects Completed" },
  { icon: Award, value: "10+", label: "Awards Won" },
  { icon: Rocket, value: "5+", label: "Years Experience" },
  { icon: Palette, value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-sage/10 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-sage to-accent-green mx-auto" />
        </motion.div>

        {/* Introduction */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-20">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              I'm a passionate developer and designer with a keen eye for creating
              beautiful, functional, and user-centric digital experiences. With over
              5 years of experience in web development, I specialize in building
              modern applications using cutting-edge technologies.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              My approach combines technical expertise with creative problem-solving,
              ensuring that every project not only meets requirements but exceeds
              expectations. I'm constantly learning and adapting to new technologies
              to deliver the best solutions.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl text-center group cursor-pointer"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent-sage group-hover:text-accent-green transition-colors" />
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Professional <span className="text-gradient">Journey</span>
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group"
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-sage/10 to-accent-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-1">{exp.role}</h4>
                      <p className="text-accent-sage font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-foreground/60 mt-2 md:mt-0 glass-card px-4 py-2 rounded-full inline-block w-fit">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
