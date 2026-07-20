import { motion } from "motion/react";

/**
 * =========================================================
 * CAPABILITY TYPE
 * =========================================================
 */

export type Capability = {
  number: string;
  title: string;
  description: string;
  tools: string[];
  accent: string;
};

type CapabilityCardProps = {
  capability: Capability;
  index: number;
};

/**
 * =========================================================
 * CAPABILITY CARD
 * =========================================================
 * Menampilkan satu bidang kemampuan.
 *
 * Bagian yang gampang diubah:
 * - Ukuran kartu: min-h-[...]
 * - Jarak isi: p-5 / md:p-6
 * - Gerakan hover: whileHover
 * =========================================================
 */

export default function CapabilityCard({
  capability,
  index,
}: CapabilityCardProps) {
  return (
    <motion.article
      className="group relative min-h-[290px] overflow-hidden border border-white/10 bg-white/[0.025] p-5 md:p-6"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -8,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `
            radial-gradient(
              circle at 80% 10%,
              ${capability.accent}18,
              transparent 48%
            )
          `,
        }}
      />

      {/* Background number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -right-1 font-mono text-[7rem] font-black leading-none opacity-[0.035]"
        style={{
          color: capability.accent,
        }}
      >
        {capability.number}
      </span>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span
            className="font-mono text-xs font-semibold tracking-[0.25em]"
            style={{
              color: capability.accent,
            }}
          >
            /{capability.number}
          </span>

          <span
            className="h-2 w-2"
            style={{
              backgroundColor: capability.accent,
              boxShadow: `0 0 12px ${capability.accent}`,
            }}
          />
        </div>

        <h3 className="cyber-heavy mt-10 text-3xl uppercase leading-none tracking-[-0.04em] text-[#e9eeeb]">
          {capability.title}
        </h3>

        <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
          {capability.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-8">
          {capability.tools.map((tool) => (
            <span
              key={tool}
              className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/30"
            >
              + {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Hover line */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
        style={{
          backgroundColor: capability.accent,
          boxShadow: `0 0 15px ${capability.accent}`,
        }}
      />
    </motion.article>
  );
}