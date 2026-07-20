import { motion } from "motion/react";

import { EXPERIENCES } from "../../data/experience";
import ExperienceItem from "./experience-item";

/**
 * =========================================================
 * EXPERIENCE CONFIG
 * =========================================================
 * Link CV dan LinkedIn bisa diubah dari sini.
 * =========================================================
 */

const EXPERIENCE_CONFIG = {
  cvUrl: "/cv-adyuda.pdf",

  linkedInUrl:
    "https://linkedin.com/in/adyudaghiffari/",
} as const;

/**
 * =========================================================
 * EXPERIENCE SECTION
 * =========================================================
 * File ini bertugas untuk:
 * 1. Membuat header Experience.
 * 2. Melakukan looping data pengalaman.
 * 3. Menampilkan tombol CV dan LinkedIn.
 * =========================================================
 */

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080b10] px-5 py-28 text-[#e9eeeb] sm:px-8 md:py-40 lg:px-12"
    >
      {/* Garis vertikal background */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1500px] border-x border-white/[0.04]" />

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-72 top-1/3 h-[550px] w-[550px] rounded-full bg-[#caff00] opacity-[0.05] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section label */}
        <motion.div
          className="mb-14 flex items-center justify-between border-b border-white/10 pb-6"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 bg-[#caff00] shadow-[0_0_12px_#caff00]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/35">
              Operational history / selected records
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.3em] text-white/20 sm:block">
            Transmission 05
          </span>
        </motion.div>

        {/* Main header */}
        <div className="mb-20 grid items-end gap-10 lg:grid-cols-12">
          <motion.h2
            className="cyber-heavy uppercase leading-[0.82] tracking-[-0.06em] lg:col-span-8"
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="block text-[clamp(3.8rem,8vw,8.5rem)]">
              Experience
            </span>

            <span className="block text-[clamp(3.8rem,8vw,8.5rem)] text-transparent [-webkit-text-stroke:1px_rgba(233,238,235,0.45)]">
              Log
            </span>
          </motion.h2>

          <motion.div
            className="lg:col-span-4"
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
              delay: 0.15,
            }}
          >
            <p className="max-w-md text-sm leading-7 text-white/45">
              Selected records across technology, operational
              management, scientific education, and creative
              leadership.
            </p>

            <div className="mt-6 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-[#caff00]/60">
              <span className="h-px w-8 bg-[#caff00]/50" />

              Full history available in CV
            </div>
          </motion.div>
        </div>

        {/* Experience list */}
        <div className="border-b border-white/10">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* CV information */}
        <motion.div
          className="mt-12 flex flex-col justify-between gap-8 border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center md:p-8"
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.65,
          }}
        >
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
              Complete professional record
            </span>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
              Detailed responsibilities, education, certification,
              and organizational experience are available through my
              CV and LinkedIn.
            </p>
          </div>

          {/* External links */}
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={EXPERIENCE_CONFIG.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-[#caff00] px-5 py-3 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#080b10] transition-transform duration-300 hover:-translate-y-1"
            >
              View CV
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={EXPERIENCE_CONFIG.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 border border-white/15 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-[#00e5ff]/60 hover:text-[#00e5ff]"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}