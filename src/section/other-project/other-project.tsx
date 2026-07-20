import { motion } from "motion/react";

import { OTHER_PROJECTS } from "../../data/other-project";
import OtherProjectCard from "./other-project-card";

/**
 * =========================================================
 * OTHER PROJECT CONFIG
 * =========================================================
 * duration:
 * - Angka besar = carousel lebih lambat.
 * - Angka kecil = carousel lebih cepat.
 * =========================================================
 */

const OTHER_PROJECT_CONFIG = {
  loopDuration: 38,
} as const;

/**
 * =========================================================
 * OTHER PROJECT
 * =========================================================
 * Infinite carousel dibuat menggunakan dua kelompok project
 * yang sama. Saat kelompok pertama selesai, kelompok kedua
 * sudah berada pada posisi yang sama sehingga loop tidak
 * terlihat terputus.
 * =========================================================
 */

export default function OtherProject() {
  return (
    <section
      id="other-projects"
      className="relative overflow-hidden bg-[#080b10] py-28 text-[#e9eeeb] md:py-40"
    >
      {/* Section header */}
      <motion.header
        className="mx-auto mb-16 max-w-[1400px] px-5 sm:px-8 lg:px-12"
        initial={{
          opacity: 0,
          y: 40,
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
        <div className="mb-7 flex items-center gap-4">
          <span className="h-2 w-2 bg-[#ff2bd6] shadow-[0_0_12px_#ff2bd6]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/35">
            Extended archive / all experiments
          </span>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-12">
          <h2 className="cyber-heavy uppercase leading-[0.85] tracking-[-0.055em] lg:col-span-8">
            <span className="block text-[clamp(3rem,7vw,7.5rem)]">
              Other
            </span>

            <span className="block text-[clamp(3rem,7vw,7.5rem)] text-transparent [-webkit-text-stroke:1px_rgba(233,238,235,0.45)]">
              Projects
            </span>
          </h2>

          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-7 text-white/45">
              Smaller experiments, technical explorations, and
              unfinished ideas from across data, science, design,
              and development.
            </p>

            <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.25em] text-[#caff00]/60">
              Hover to pause transmission
            </p>
          </div>
        </div>
      </motion.header>

      {/* Infinite carousel */}
      <div className="other-project-marquee relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#080b10] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#080b10] to-transparent md:w-32" />

        <div
          className="other-project-track flex w-max"
          style={{
            animationDuration: `${OTHER_PROJECT_CONFIG.loopDuration}s`,
          }}
        >
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              aria-hidden={groupIndex === 1}
              className="flex shrink-0 gap-5 pr-5"
            >
              {OTHER_PROJECTS.map((project) => (
                <OtherProjectCard
                  key={`${groupIndex}-${project.id}`}
                  project={project}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom information */}
      <div className="mx-auto mt-12 flex max-w-[1400px] items-center justify-between border-t border-white/10 px-5 pt-7 font-mono text-[8px] uppercase tracking-[0.22em] text-white/25 sm:px-8 lg:px-12">
        <span>Continuous archive transmission</span>

        <span>{OTHER_PROJECTS.length} projects loaded</span>
      </div>
    </section>
  );
}