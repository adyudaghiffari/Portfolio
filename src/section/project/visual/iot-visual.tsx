import { motion } from "motion/react";

import type { Project } from "../../../data/project";
import VisualFrame from "./visual-frame";

type IoTVisualProps = {
  project: Project;
};

/**
 * =========================================================
 * IOT PROJECT VISUAL
 * =========================================================
 * Visual khusus project IoT.
 * Node bisa ditambah atau diubah melalui array IOT_NODES.
 * =========================================================
 */

const IOT_NODES = [
  {
    label: "DEVICE",
    value: "SENSOR_01",
  },
  {
    label: "GATEWAY",
    value: "EDGE_GW",
  },
  {
    label: "SERVER",
    value: "CLOUD_DB",
  },
];

const CHANNEL_VALUES = [74, 91, 62];

export default function IoTVisual({ project }: IoTVisualProps) {
  return (
    <VisualFrame project={project}>
      <div className="flex h-full flex-col justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          Network topology / live
        </div>

        <div className="relative grid grid-cols-3 gap-2 md:gap-5">
          {/* Connection line */}
          <div
            className="absolute left-[16%] right-[16%] top-1/2 h-px"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  ${project.accent},
                  ${project.secondaryAccent}
                )
              `,
              boxShadow: `0 0 12px ${project.accent}`,
            }}
          />

          {IOT_NODES.map((node, index) => (
            <motion.div
              key={node.label}
              className="relative z-10 border border-white/15 bg-[#080b10]/95 p-3 md:p-4"
              animate={{
                borderColor: [
                  "rgba(255,255,255,0.15)",
                  `${project.accent}99`,
                  "rgba(255,255,255,0.15)",
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              <span
                className="mb-5 block h-2 w-2"
                style={{
                  backgroundColor: project.accent,
                  boxShadow: `0 0 12px ${project.accent}`,
                }}
              />

              <span className="block font-mono text-[7px] tracking-[0.2em] text-white/30 md:text-[9px]">
                {node.label}
              </span>

              <span className="mt-1 block truncate font-mono text-[8px] text-white/80 md:text-[11px]">
                {node.value}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {CHANNEL_VALUES.map((value, index) => (
            <div
              key={value}
              className="border-t border-white/10 pt-2 font-mono"
            >
              <span className="block text-[7px] uppercase tracking-widest text-white/30 md:text-[9px]">
                Channel {index + 1}
              </span>

              <span
                className="text-xs md:text-sm"
                style={{ color: project.accent }}
              >
                {value}.0%
              </span>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}