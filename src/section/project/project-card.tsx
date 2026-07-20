import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionStyle,
} from "motion/react";

import type { Project } from "../../data/project";
import { ArrowIcon, GithubIcon } from "./project-icon";
import ProjectVisual from "./visual/project-visual";

type ProjectCardProps = {
  project: Project;
  index: number;
};

/**
 * =========================================================
 * PROJECT CARD CONFIG
 * =========================================================
 * Konfigurasi animasi setiap project.
 * =========================================================
 */

const PROJECT_CARD_CONFIG = {
  reveal: {
    initialY: 80,
    duration: 0.8,
  },

  parallax: {
    start: 45,
    end: -45,
  },
} as const;

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });

  const visualY = useTransform(
    smoothProgress,
    [0, 1],
    [
      PROJECT_CARD_CONFIG.parallax.start,
      PROJECT_CARD_CONFIG.parallax.end,
    ],
  );

  const visualStyle: MotionStyle = {
    y: visualY,
  };

  // Project genap dan ganjil memiliki posisi yang berbeda.
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      ref={cardRef}
      id={project.id}
      className="relative grid min-h-[80vh] items-center gap-12 py-24 lg:grid-cols-12 lg:gap-10 lg:py-36"
      initial={{
        opacity: 0,
        y: PROJECT_CARD_CONFIG.reveal.initialY,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        amount: 0.2,
        once: true,
      }}
      transition={{
        duration: PROJECT_CARD_CONFIG.reveal.duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Large decorative project number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-0 select-none font-mono text-[7rem] font-black leading-none opacity-[0.035] md:text-[12rem] lg:text-[17rem]"
        style={{ color: project.accent }}
      >
        {project.number}
      </span>

      {/* Project information */}
      <div
        className={[
          "relative z-10 lg:col-span-5",
          isReversed
            ? "lg:order-2 lg:col-start-8"
            : "lg:order-1",
        ].join(" ")}
      >
        <div className="mb-8 flex items-center gap-4">
          <span
            className="font-mono text-xs font-semibold tracking-[0.25em]"
            style={{ color: project.accent }}
          >
            /{project.number}
          </span>

          <span className="h-px w-12 bg-white/20" />

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            {project.category}
          </span>
        </div>

        <h3 className="cyber-heavy max-w-xl text-4xl uppercase leading-[0.92] tracking-[-0.05em] text-[#e9eeeb] sm:text-5xl lg:text-6xl xl:text-7xl">
          {project.title}
        </h3>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em]">
          <span className="text-white/35">{project.year}</span>

          <span
            className="flex items-center gap-2"
            style={{ color: project.accent }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: project.accent,
                boxShadow: `0 0 8px ${project.accent}`,
              }}
            />

            {project.status === "completed"
              ? "System completed"
              : "In development"}
          </span>
        </div>

        <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
          {project.description}
        </p>

        {/* Technology tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-white/10">
          {project.metrics.map((metric, metricIndex) => (
            <div
              key={metric.label}
              className={[
                "py-5",
                metricIndex !== 0
                  ? "border-l border-white/10 pl-4 md:pl-6"
                  : "",
              ].join(" ")}
            >
              <span
                className="block font-mono text-lg font-semibold md:text-xl"
                style={{ color: project.accent }}
              >
                {metric.value}
              </span>

              <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.16em] text-white/30 md:text-[8px]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={project.href}
            className="group inline-flex items-center gap-4 px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#080b10] transition-transform duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: project.accent,
              boxShadow: `0 0 24px ${project.accent}25`,
            }}
          >
            View case study

            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowIcon />
            </span>
          </a>

          {project.repository && (
            <a
              href={project.repository}
              aria-label={`Open ${project.title} repository`}
              className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:border-white/40 hover:text-white"
            >
              <GithubIcon />
              Repository
            </a>
          )}
        </div>
      </div>

      {/* Project visual */}
      <motion.div
        className={[
          "relative lg:col-span-7",
          isReversed
            ? "lg:order-1"
            : "lg:order-2 lg:col-start-6",
        ].join(" ")}
        style={visualStyle}
      >
        <div
          className="pointer-events-none absolute -inset-10 -z-10 opacity-20 blur-[80px]"
          style={{
            background: `
              radial-gradient(
                circle,
                ${project.accent},
                transparent 68%
              )
            `,
          }}
        />

        <ProjectVisual project={project} />

        <div
          className="absolute -bottom-4 -right-3 border bg-[#080b10] px-4 py-3 font-mono text-[8px] uppercase tracking-[0.25em] md:-right-5 md:px-5"
          style={{
            borderColor: `${project.accent}66`,
            color: project.accent,
          }}
        >
          {project.shortTitle}
        </div>
      </motion.div>
    </motion.article>
  );
}