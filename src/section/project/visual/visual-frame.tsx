import type { ReactNode } from "react";
import { motion } from "motion/react";

import type { Project } from "../../../data/project";

type VisualFrameProps = {
  project: Project;
  children: ReactNode;
};

/**
 * =========================================================
 * VISUAL FRAME
 * =========================================================
 * Bingkai cyberpunk yang digunakan oleh semua visual project.
 * Ubah tinggi, grid, scanline, dan top bar dari file ini.
 * =========================================================
 */

export default function VisualFrame({
  project,
  children,
}: VisualFrameProps) {
  return (
    <div
      className="relative aspect-[4/3] overflow-hidden border bg-[#0b0f14]"
      style={{
        borderColor: `${project.accent}55`,
        boxShadow: `0 0 60px ${project.accent}12`,
      }}
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(${project.accent} 1px, transparent 1px),
            linear-gradient(90deg, ${project.accent} 1px, transparent 1px)
          `,
          backgroundSize: "34px 34px",
        }}
      />

      {/* Window top bar */}
      <div className="relative z-10 flex h-10 items-center justify-between border-b border-white/10 px-4 font-mono text-[9px] uppercase tracking-[0.24em] text-white/40">
        <span>YS / Project interface</span>

        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{
              backgroundColor: project.accent,
              boxShadow: `0 0 10px ${project.accent}`,
            }}
          />

          <span>Online</span>
        </div>
      </div>

      {/* Project-specific visual */}
      <div className="relative z-10 h-[calc(100%-2.5rem)] p-4 md:p-6">
        {children}
      </div>

      {/* Moving scanline */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-20"
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent,
              ${project.accent}33,
              transparent
            )
          `,
        }}
        animate={{
          y: ["-100%", "500%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Decorative corners */}
      <span
        className="absolute bottom-3 left-3 h-4 w-4 border-b border-l"
        style={{ borderColor: project.accent }}
      />

      <span
        className="absolute right-3 top-12 h-4 w-4 border-r border-t"
        style={{ borderColor: project.accent }}
      />
    </div>
  );
}