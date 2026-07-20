import { motion } from "motion/react";

import type { OtherProjectData } from "../../data/other-project";

/**
 * =========================================================
 * OTHER PROJECT CARD PROPS
 * =========================================================
 * Kartu menerima satu data project dari other-project.tsx.
 * =========================================================
 */

type OtherProjectCardProps = {
  project: OtherProjectData;
};

/**
 * =========================================================
 * ARROW ICON
 * =========================================================
 */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M5 19 19 5M8 5h11v11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * =========================================================
 * OTHER PROJECT CARD
 * =========================================================
 * Satu kartu project pada infinite carousel.
 *
 * Yang paling gampang diubah:
 * - Ukuran kartu: w-[300px] / sm:w-[340px] / lg:w-[380px]
 * - Tinggi kartu: min-h-[430px]
 * - Efek hover: whileHover
 * =========================================================
 */

export default function OtherProjectCard({
  project,
}: OtherProjectCardProps) {
  return (
    <motion.article
      className="group relative flex min-h-[430px] w-[300px] shrink-0 flex-col overflow-hidden border border-white/10 bg-[#0b0f14] p-5 sm:w-[340px] sm:p-6 lg:w-[380px]"
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Background glow ketika kartu di-hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `
            radial-gradient(
              circle at 80% 10%,
              ${project.accent}18,
              transparent 45%
            )
          `,
        }}
      />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(${project.accent} 1px, transparent 1px),
            linear-gradient(90deg, ${project.accent} 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
        }}
      />

      {/* Header kartu */}
      <div className="relative z-10 flex items-start justify-between gap-5">
        <div>
          <span
            className="block font-mono text-sm font-semibold tracking-[0.2em]"
            style={{
              color: project.accent,
            }}
          >
            /{project.number}
          </span>

          <span className="mt-2 block font-mono text-[8px] uppercase tracking-[0.22em] text-white/30">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/35">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: project.accent,
              boxShadow: `0 0 8px ${project.accent}`,
            }}
          />

          {project.status === "completed"
            ? "Complete"
            : "In progress"}
        </div>
      </div>

      {/* Visual dekoratif kartu */}
      <div className="relative z-10 my-8 h-28 overflow-hidden border border-white/10 bg-[#080b10]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              linear-gradient(
                135deg,
                ${project.accent},
                transparent 45%,
                ${project.secondaryAccent}
              )
            `,
          }}
        />

        <div
          className="absolute left-5 top-1/2 h-px w-[65%] origin-left transition-transform duration-500 group-hover:scale-x-125"
          style={{
            backgroundColor: project.accent,
            boxShadow: `0 0 12px ${project.accent}`,
          }}
        />

        <div
          className="absolute bottom-5 right-5 h-12 w-12 rotate-45 border transition-transform duration-500 group-hover:rotate-[135deg]"
          style={{
            borderColor: project.secondaryAccent,
          }}
        />

        <span
          className="absolute bottom-3 left-4 font-mono text-5xl font-black leading-none opacity-10"
          style={{
            color: project.accent,
          }}
        >
          {project.number}
        </span>

        <span className="absolute right-3 top-3 font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
          Data archive
        </span>
      </div>

      {/* Isi kartu */}
      <div className="relative z-10 flex flex-1 flex-col">
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/30">
          {project.year}
        </span>

        <h3 className="cyber-heavy mt-3 text-2xl uppercase leading-[0.95] tracking-[-0.035em] text-[#e9eeeb] sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-5 text-xs leading-6 text-white/45 sm:text-sm">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/35"
            >
              + {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-5">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
            Open project
          </span>

          <a
            href={project.href}
            aria-label={`Open ${project.title}`}
            className="grid h-10 w-10 place-items-center border border-white/15 text-white/60 transition-all duration-300 group-hover:border-white/40 group-hover:text-white"
            style={{
              backgroundColor: `${project.accent}08`,
            }}
          >
            <ArrowIcon />
          </a>
        </div>
      </div>

      {/* Garis neon bawah saat hover */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
        style={{
          backgroundColor: project.accent,
          boxShadow: `0 0 14px ${project.accent}`,
        }}
      />
    </motion.article>
  );
}