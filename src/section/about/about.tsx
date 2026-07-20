import { motion } from "motion/react";

import CapabilityCard, {
  type Capability,
} from "./capability-card";

/**
 * =========================================================
 * ABOUT CONFIG
 * =========================================================
 * Semua teks About yang sering diubah disimpan di sini.
 * =========================================================
 */

const ABOUT_CONFIG = {
  label: "Identity archive / system profile",

  headline: {
    first: "Physics",
    second: "Meets Creativity",
  },

  name: "Adyuda Ghiffari",

  role: "Creative Technologist",

  description:
    "Physics-trained and creatively driven, I work across data, design, and development—turning complex ideas into systems that people can understand, explore, and use.",

  secondaryDescription:
    "My work moves between analytical thinking and visual experimentation. Sometimes it becomes a data system, sometimes an interface, and sometimes an entirely unnecessary but interesting experiment.",

  location: "Indonesia",

  availability: "Open to opportunities",
} as const;

/**
 * =========================================================
 * CAPABILITIES
 * =========================================================
 * Tambah atau ubah bidang kemampuan dari array ini.
 * =========================================================
 */

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "Data Systems",
    description:
      "Exploring data, building analytical models, and translating patterns into useful information.",
    tools: ["Python", "SQL", "Power BI", "Machine Learning"],
    accent: "#caff00",
  },
  {
    number: "02",
    title: "Visual Design",
    description:
      "Creating visual identities and interfaces where information, personality, and experimentation meet.",
    tools: ["Branding", "Graphic Design", "UI Design"],
    accent: "#ff2bd6",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building interactive digital experiences and technical prototypes across web and connected systems.",
    tools: ["React", "TypeScript", "IoT", "Cloud"],
    accent: "#00e5ff",
  },
];

/**
 * =========================================================
 * ABOUT SECTION
 * =========================================================
 */

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080b10] px-5 py-28 text-[#e9eeeb] sm:px-8 md:py-40 lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1500px] border-x border-white/[0.04]" />

      <div
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[130px]"
        style={{
          backgroundColor: "#ff2bd6",
        }}
      />

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
            <span className="h-2 w-2 bg-[#00e5ff] shadow-[0_0_12px_#00e5ff]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/35">
              {ABOUT_CONFIG.label}
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.3em] text-white/20 sm:block">
            Transmission 04
          </span>
        </motion.div>

        {/* Main about layout */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Large headline */}
          <motion.div
            className="lg:col-span-7"
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
            <h2 className="cyber-heavy uppercase leading-[0.82] tracking-[-0.06em]">
              <span className="block text-[clamp(3.7rem,8vw,8.5rem)]">
                {ABOUT_CONFIG.headline.first}
              </span>

              <span className="block text-[clamp(3.7rem,8vw,8.5rem)] text-transparent [-webkit-text-stroke:1px_rgba(233,238,235,0.45)]">
                {ABOUT_CONFIG.headline.second}
              </span>
            </h2>
          </motion.div>

          {/* Identity information */}
          <motion.div
            className="flex flex-col justify-end lg:col-span-5 lg:pl-8"
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#caff00]">
                YS / Identity
              </span>

              <span className="h-px flex-1 bg-white/10" />
            </div>

            <h3 className="cyber-heavy text-3xl uppercase tracking-[-0.035em] text-white sm:text-4xl">
              {ABOUT_CONFIG.name}
            </h3>

            <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#00e5ff]">
              {ABOUT_CONFIG.role}
            </span>

            <p className="mt-8 text-sm leading-7 text-white/55 md:text-base md:leading-8">
              {ABOUT_CONFIG.description}
            </p>

            <p className="mt-5 text-sm leading-7 text-white/35">
              {ABOUT_CONFIG.secondaryDescription}
            </p>
          </motion.div>
        </div>

        {/* Identity panel */}
        <motion.div
          className="relative mt-20 overflow-hidden border border-white/10 bg-white/[0.02] md:mt-28"
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(#00e5ff 1px, transparent 1px),
                linear-gradient(90deg, #00e5ff 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative grid lg:grid-cols-12">
            {/* Identity symbol */}
            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-b border-white/10 lg:col-span-5 lg:border-b-0 lg:border-r">
              <span
                aria-hidden="true"
                className="cyber-heavy text-[10rem] leading-none text-transparent sm:text-[13rem]"
                style={{
                  WebkitTextStroke: "1px rgba(202,255,0,0.35)",
                }}
              >
                AG
              </span>

              <motion.div
                className="absolute h-44 w-44 rounded-full border border-[#ff2bd6]/30 sm:h-56 sm:w-56"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 bg-[#ff2bd6] shadow-[0_0_12px_#ff2bd6]" />
              </motion.div>

              <span className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
                Analytical / Visual / Technical
              </span>
            </div>

            {/* System status */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                  Current system configuration
                </span>

                <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/70 sm:text-2xl">
                  I don’t really fit into one box. That’s probably
                  the point.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
                <div className="bg-[#0b0f14] p-4">
                  <span className="block font-mono text-[7px] uppercase tracking-widest text-white/25">
                    Location
                  </span>

                  <span className="mt-2 block font-mono text-[10px] uppercase tracking-wider text-white/65">
                    {ABOUT_CONFIG.location}
                  </span>
                </div>

                <div className="bg-[#0b0f14] p-4">
                  <span className="block font-mono text-[7px] uppercase tracking-widest text-white/25">
                    Status
                  </span>

                  <span className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#caff00]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#caff00] shadow-[0_0_8px_#caff00]" />

                    Online
                  </span>
                </div>

                <div className="col-span-2 bg-[#0b0f14] p-4 sm:col-span-1">
                  <span className="block font-mono text-[7px] uppercase tracking-widest text-white/25">
                    Availability
                  </span>

                  <span className="mt-2 block font-mono text-[10px] uppercase tracking-wider text-white/65">
                    {ABOUT_CONFIG.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capability cards */}
        <div className="mt-20 md:mt-28">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
              Core capabilities
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              03 systems detected
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {CAPABILITIES.map((capability, index) => (
              <CapabilityCard
                key={capability.title}
                capability={capability}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}