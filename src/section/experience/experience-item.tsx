import { motion } from "motion/react";

import type {
  ExperienceCategory,
  ExperienceData,
} from "../../data/experience";

/**
 * =========================================================
 * EXPERIENCE ITEM PROPS
 * =========================================================
 */

type ExperienceItemProps = {
  experience: ExperienceData;
  index: number;
};

/**
 * =========================================================
 * CATEGORY LABEL
 * =========================================================
 */

const CATEGORY_LABEL: Record<ExperienceCategory, string> = {
  work: "Professional experience",
  "technology-program": "Technology program",
  organization: "Leadership experience",
};

/**
 * =========================================================
 * EXPERIENCE ITEM
 * =========================================================
 * Menampilkan satu baris pengalaman.
 *
 * Data pengalaman diubah melalui:
 * src/data/experience.ts
 * =========================================================
 */

export default function ExperienceItem({
  experience,
  index,
}: ExperienceItemProps) {
  return (
    <motion.article
      className="group relative grid gap-8 border-t border-white/10 py-12 lg:grid-cols-12 lg:gap-6 lg:py-16"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.06, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Hover background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `
            linear-gradient(
              90deg,
              ${experience.accent}08,
              transparent 55%
            )
          `,
        }}
      />

      {/* Number and period */}
      <div className="relative z-10 flex items-start justify-between gap-5 lg:col-span-2 lg:block">
        <span
          className="font-mono text-sm font-semibold tracking-[0.25em]"
          style={{
            color: experience.accent,
          }}
        >
          /{String(index + 1).padStart(2, "0")}
        </span>

        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 lg:mt-6 lg:block">
          {experience.period}
        </span>
      </div>

      {/* Organization and role */}
      <div className="relative z-10 lg:col-span-4">
        <span
          className="font-mono text-[8px] uppercase tracking-[0.23em]"
          style={{
            color: experience.accent,
          }}
        >
          {CATEGORY_LABEL[experience.category]}
        </span>

        <h3 className="cyber-heavy mt-4 text-2xl uppercase leading-[1.05] tracking-[-0.035em] text-[#e9eeeb] sm:text-3xl">
          {experience.organization}
        </h3>

        <p className="mt-3 text-sm text-white/60">
          {experience.role}
        </p>

        <span className="mt-3 block font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
          {experience.location}
        </span>
      </div>

      {/* Description and highlights */}
      <div className="relative z-10 lg:col-span-4">
        <p className="text-sm leading-7 text-white/50">
          {experience.summary}
        </p>

        <ul className="mt-6 space-y-3">
          {experience.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-xs leading-6 text-white/35"
            >
              <span
                className="mt-[10px] h-1 w-1 shrink-0"
                style={{
                  backgroundColor: experience.accent,
                  boxShadow: `0 0 7px ${experience.accent}`,
                }}
              />

              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="relative z-10 lg:col-span-2">
        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
          Systems used
        </span>

        <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="border border-white/10 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/40 transition-colors duration-300 group-hover:text-white/60"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Animated bottom line */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full"
        style={{
          backgroundColor: experience.accent,
          boxShadow: `0 0 12px ${experience.accent}`,
        }}
      />
    </motion.article>
  );
}