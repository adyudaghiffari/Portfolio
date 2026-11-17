import { motion } from "motion/react";

import type { Project } from "../../../data/project";
import VisualFrame from "./visual-frame";

type BikeSharingVisualProps = {
  project: Project;
};

// Decorative chart values for the portfolio interface preview only.
// They are not presented as measured results from the underlying dataset.
const HOURLY_BARS = [
  18, 13, 9, 7, 8, 14, 34, 61, 78, 63, 48, 51,
  57, 54, 49, 53, 69, 88, 96, 82, 61, 45, 32, 23,
];

const WEEKDAY_BARS = [42, 58, 76, 64, 82, 69, 51];

export default function BikeSharingVisual({
  project,
}: BikeSharingVisualProps) {
  return (
    <VisualFrame project={project}>
      <div className="flex h-full min-h-0 flex-col gap-3">
        {/* Dashboard heading */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="block font-mono text-[7px] uppercase tracking-[0.24em] text-white/35 md:text-[9px]">
              Mobility intelligence / 01
            </span>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/85 md:text-xs">
              Bike-share demand explorer
            </span>
          </div>

          <span className="shrink-0 border border-white/10 px-2 py-1 font-mono text-[6px] uppercase tracking-[0.16em] text-white/35 md:text-[8px]">
            Visual preview
          </span>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-12 grid-rows-6 gap-2">
          {/* Hourly demand chart */}
          <div className="col-span-8 row-span-4 flex min-h-0 flex-col border border-white/10 bg-white/[0.025] p-2.5 md:p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/45 md:text-[9px]">
                Hourly rental pattern
              </span>
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: project.accent,
                  boxShadow: `0 0 8px ${project.accent}`,
                }}
              />
            </div>

            <div className="relative mt-3 flex min-h-0 flex-1 items-end gap-[3px] border-b border-l border-white/10 px-1 pb-1 md:gap-1">
              {[25, 50, 75].map((line) => (
                <span
                  key={line}
                  className="pointer-events-none absolute inset-x-0 border-t border-dashed border-white/[0.07]"
                  style={{ bottom: `${line}%` }}
                />
              ))}

              {HOURLY_BARS.map((height, index) => (
                <motion.span
                  key={`hour-${index}`}
                  className="relative z-10 min-w-0 flex-1"
                  initial={{ height: 0, opacity: 0.4 }}
                  whileInView={{ height: `${height}%`, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.018,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    background:
                      index >= 7 && index <= 9 || index >= 17 && index <= 20
                        ? project.accent
                        : `${project.secondaryAccent}90`,
                    boxShadow:
                      index >= 7 && index <= 9 || index >= 17 && index <= 20
                        ? `0 0 8px ${project.accent}55`
                        : "none",
                  }}
                />
              ))}
            </div>

            <div className="mt-1 flex justify-between pl-1 font-mono text-[6px] text-white/30 md:text-[8px]">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>
          </div>

          {/* Rider segments */}
          <div className="col-span-4 row-span-4 flex min-h-0 flex-col border border-white/10 bg-white/[0.025] p-2.5 md:p-3">
            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/45 md:text-[9px]">
              Rider segments
            </span>

            <div className="flex flex-1 items-center justify-center">
              <div
                className="grid aspect-square w-[72%] place-items-center rounded-full"
                style={{
                  background: `conic-gradient(${project.accent} 0deg 225deg, ${project.secondaryAccent} 225deg 360deg)`,
                  boxShadow: `0 0 24px ${project.accent}12`,
                }}
              >
                <div className="grid h-[68%] w-[68%] place-items-center rounded-full bg-[#0b0f14]">
                  <span className="text-center font-mono text-[7px] uppercase tracking-[0.1em] text-white/65 md:text-[9px]">
                    User
                    <br />
                    types
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 font-mono text-[6px] uppercase tracking-[0.1em] text-white/50 md:text-[8px]">
              <span className="flex items-center gap-1.5">
                <i className="h-1.5 w-1.5" style={{ backgroundColor: project.accent }} />
                Registered
              </span>
              <span className="flex items-center gap-1.5">
                <i className="h-1.5 w-1.5" style={{ backgroundColor: project.secondaryAccent }} />
                Casual
              </span>
            </div>
          </div>

          {/* Weekday activity strip */}
          <div className="col-span-7 row-span-2 flex min-h-0 flex-col justify-between border border-white/10 bg-white/[0.025] p-2.5 md:p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/45 md:text-[9px]">
                Weekly activity
              </span>
              <span className="font-mono text-[6px] text-white/25 md:text-[8px]">
                MON — SUN
              </span>
            </div>

            <div className="flex h-7 items-end gap-1 md:h-9">
              {WEEKDAY_BARS.map((height, index) => (
                <motion.span
                  key={`day-${index}`}
                  className="flex-1"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.07 }}
                  style={{ backgroundColor: index === 4 ? project.accent : `${project.secondaryAccent}75` }}
                />
              ))}
            </div>
          </div>

          {/* Weather factors */}
          <div className="col-span-5 row-span-2 flex min-h-0 flex-col justify-between border border-white/10 bg-white/[0.025] p-2.5 md:p-3">
            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/45 md:text-[9px]">
              Weather factors
            </span>

            <div className="flex flex-wrap gap-1">
              {["TEMP", "HUMIDITY", "WIND", "SEASON"].map((factor, index) => (
                <span
                  key={factor}
                  className="border px-1.5 py-1 font-mono text-[6px] uppercase tracking-[0.08em] md:text-[7px]"
                  style={{
                    borderColor: `${index % 2 === 0 ? project.accent : project.secondaryAccent}40`,
                    color: index % 2 === 0 ? project.accent : project.secondaryAccent,
                  }}
                >
                  {factor}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}
