import { motion } from "motion/react";

import { FEATURED_PROJECTS } from "../../data/project";
import ProjectCard from "./project-card";

/**
 * =========================================================
 * FEATURED PROJECT SECTION
 * =========================================================
 * File ini hanya bertugas untuk:
 * 1. Membuat section project.
 * 2. Menampilkan section header.
 * 3. Melakukan looping data project.
 * =========================================================
 */

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080b10] px-5 text-[#e9eeeb] sm:px-8 lg:px-12"
    >
      {/* Decorative vertical lines */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1500px] border-x border-white/[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-white/[0.035]" />

      {/* Section header */}
      <div className="relative z-10 mx-auto max-w-[1400px] border-b border-white/10 pb-16 pt-28 md:pb-24 md:pt-40">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-8 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 bg-[#caff00] shadow-[0_0_12px_#caff00]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
                Selected archive / 2026
              </span>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.3em] text-white/25 sm:block">
              Transmission 02
            </span>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-12">
            <h2 className="cyber-heavy uppercase leading-[0.82] tracking-[-0.06em] lg:col-span-8">
              <span className="block text-[clamp(3.5rem,9vw,9rem)]">
                Featured
              </span>

              <span className="block text-[clamp(3.5rem,9vw,9rem)] text-transparent [-webkit-text-stroke:1px_rgba(233,238,235,0.5)]">
                Projects
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/45 lg:col-span-4 lg:pb-2">
              Selected systems where data, visual thinking, and
              technology become functional experiences.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Project list */}
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {FEATURED_PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className={
              index !== FEATURED_PROJECTS.length - 1
                ? "border-b border-white/10"
                : ""
            }
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Section footer */}
      <div className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between border-t border-white/10 py-8 font-mono text-[8px] uppercase tracking-[0.25em] text-white/25 md:text-[9px]">
        <span>End of selected archive</span>

        <span>
          {FEATURED_PROJECTS.length.toString().padStart(2, "0")}{" "}
          projects indexed
        </span>
      </div>
    </section>
  );
}