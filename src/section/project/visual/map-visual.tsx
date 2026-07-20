import { motion } from "motion/react";

import type { Project } from "../../../data/project";
import VisualFrame from "./visual-frame";

type MapVisualProps = {
  project: Project;
};

/**
 * =========================================================
 * MAP PROJECT VISUAL
 * =========================================================
 * Visual khusus project QGIS.
 * Posisi titik dapat diubah melalui MAP_POINTS.
 * =========================================================
 */

const MAP_POINTS = [
  { left: "18%", top: "25%" },
  { left: "60%", top: "18%" },
  { left: "72%", top: "60%" },
  { left: "35%", top: "67%" },
  { left: "50%", top: "44%" },
];

export default function MapVisual({ project }: MapVisualProps) {
  return (
    <VisualFrame project={project}>
      <div className="relative h-full overflow-hidden border border-white/10 bg-[#071014]">
        {/* Fake map roads */}
        <div className="absolute left-[8%] top-[-20%] h-[150%] w-px rotate-[28deg] bg-white/15" />
        <div className="absolute left-[48%] top-[-20%] h-[150%] w-px -rotate-[18deg] bg-white/15" />
        <div className="absolute left-[-10%] top-[52%] h-px w-[120%] rotate-[8deg] bg-white/15" />
        <div className="absolute left-[-10%] top-[25%] h-px w-[120%] -rotate-[12deg] bg-white/10" />

        {/* Potential hotel area */}
        <div
          className="absolute left-[25%] top-[22%] h-[48%] w-[48%] rotate-6 border opacity-40"
          style={{
            borderColor: project.accent,
            backgroundColor: `${project.accent}20`,
            boxShadow: `inset 0 0 40px ${project.accent}20`,
          }}
        />

        {/* Location points */}
        {MAP_POINTS.map((point, index) => {
          const pointColor =
            index === MAP_POINTS.length - 1
              ? project.secondaryAccent
              : project.accent;

          return (
            <motion.span
              key={`${point.left}-${point.top}`}
              className="absolute h-2.5 w-2.5 rounded-full"
              style={{
                left: point.left,
                top: point.top,
                backgroundColor: pointColor,
                boxShadow: `0 0 14px ${pointColor}`,
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.25,
              }}
            />
          );
        })}

        <div className="absolute bottom-3 left-3 border border-white/10 bg-[#080b10]/90 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/50">
          Yogyakarta / suitability map
        </div>

        {/* Map legend */}
        <div className="absolute right-3 top-3 flex flex-col gap-1">
          {[1, 0.7, 0.4, 0.18].map((opacity) => (
            <span
              key={opacity}
              className="h-2 w-8"
              style={{
                opacity,
                backgroundColor: project.accent,
              }}
            />
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}