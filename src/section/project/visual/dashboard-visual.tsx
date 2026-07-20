import { motion } from "motion/react";

import type { Project } from "../../../data/project";
import VisualFrame from "./visual-frame";

type DashboardVisualProps = {
  project: Project;
};

/**
 * =========================================================
 * DASHBOARD PROJECT VISUAL
 * =========================================================
 * Visual khusus project Power BI.
 * Tinggi bar chart dapat diubah melalui CHART_BARS.
 * =========================================================
 */

const CHART_BARS = [42, 68, 48, 88, 63, 76, 52];

export default function DashboardVisual({
  project,
}: DashboardVisualProps) {
  return (
    <VisualFrame project={project}>
      <div className="grid h-full grid-cols-12 grid-rows-6 gap-2">
        <div className="col-span-4 row-span-2 border border-white/10 bg-white/[0.025] p-3">
          <span className="font-mono text-[7px] uppercase tracking-widest text-white/30 md:text-[9px]">
            Revenue
          </span>

          <span
            className="mt-2 block font-mono text-lg md:text-2xl"
            style={{ color: project.accent }}
          >
            82.4K
          </span>
        </div>

        <div className="col-span-4 row-span-2 border border-white/10 bg-white/[0.025] p-3">
          <span className="font-mono text-[7px] uppercase tracking-widest text-white/30 md:text-[9px]">
            Orders
          </span>

          <span className="mt-2 block font-mono text-lg text-white md:text-2xl">
            1.2K
          </span>
        </div>

        <div className="col-span-4 row-span-2 border border-white/10 bg-white/[0.025] p-3">
          <span className="font-mono text-[7px] uppercase tracking-widest text-white/30 md:text-[9px]">
            Rating
          </span>

          <span
            className="mt-2 block font-mono text-lg md:text-2xl"
            style={{ color: project.secondaryAccent }}
          >
            4.81
          </span>
        </div>

        {/* Bar chart */}
        <div className="col-span-8 row-span-4 flex items-end gap-2 border border-white/10 bg-white/[0.025] p-3 md:p-4">
          {CHART_BARS.map((height, index) => (
            <motion.div
              key={`${height}-${index}`}
              className="flex-1"
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              style={{
                background: `
                  linear-gradient(
                    to top,
                    ${project.accent},
                    ${project.secondaryAccent}
                  )
                `,
                boxShadow: `0 0 10px ${project.accent}30`,
              }}
            />
          ))}
        </div>

        {/* Circular performance chart */}
        <div className="col-span-4 row-span-4 border border-white/10 bg-white/[0.025] p-3">
          <span className="font-mono text-[7px] uppercase tracking-widest text-white/30 md:text-[9px]">
            Performance
          </span>

          <div className="mt-5 flex justify-center">
            <div
              className="grid aspect-square w-16 place-items-center rounded-full md:w-24"
              style={{
                background: `
                  conic-gradient(
                    ${project.accent} 0deg 286deg,
                    rgba(255,255,255,0.08) 286deg
                  )
                `,
              }}
            >
              <div className="grid h-[76%] w-[76%] place-items-center rounded-full bg-[#0b0f14] font-mono text-xs text-white md:text-sm">
                79%
              </div>
            </div>
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}