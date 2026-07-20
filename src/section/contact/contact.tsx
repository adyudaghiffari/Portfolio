import { motion } from "motion/react";

/**
 * =========================================================
 * CONTACT CONFIG
 * =========================================================
 * Informasi kontak yang gampang diubah.
 * =========================================================
 */

const CONTACT_CONFIG = {
  email: "adyudaghiffari@gmail.com",

  linkedin:
    "https://linkedin.com/in/adyudaghiffari/",

  cvUrl: "/cv-adyuda.pdf",

  location: "Tangerang, Indonesia",

  availability: "Open to opportunities",
} as const;

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
      className="h-5 w-5"
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
 * CONTACT SECTION
 * =========================================================
 */

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080b10] px-5 pb-20 pt-28 text-[#e9eeeb] sm:px-8 md:pb-28 md:pt-40 lg:px-12"
    >
      {/* Garis vertikal background */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1500px] border-x border-white/[0.04]" />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-[150px]"
        style={{
          background:
            "linear-gradient(135deg, #ff2bd6, #00e5ff)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section label */}
        <motion.div
          className="flex items-center justify-between border-b border-white/10 pb-6"
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
            <span className="h-2 w-2 bg-[#ff2bd6] shadow-[0_0_12px_#ff2bd6]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/35">
              Open channel / establish connection
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.3em] text-white/20 sm:block">
            Final transmission
          </span>
        </motion.div>

        {/* Main contact layout */}
        <div className="grid min-h-[75vh] items-center gap-16 py-20 lg:grid-cols-12 lg:py-28">
          {/* Main headline */}
          <motion.div
            className="lg:col-span-8"
            initial={{
              opacity: 0,
              x: -70,
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
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#caff00]">
              Have something interesting in mind?
            </span>

            <h2 className="cyber-heavy mt-8 uppercase leading-[0.8] tracking-[-0.065em]">
              <span className="block text-[clamp(4rem,9vw,9.5rem)]">
                Let&apos;s
              </span>

              <span className="block text-[clamp(4rem,9vw,9.5rem)] text-transparent [-webkit-text-stroke:1px_rgba(233,238,235,0.5)]">
                Connect
              </span>
            </h2>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/45 md:text-base md:leading-8">
              Whether it&apos;s a technology project, a creative
              experiment, a data problem, or an opportunity to build
              something useful, I&apos;m always open to a good
              conversation.
            </p>
          </motion.div>

          {/* Contact information panel */}
          <motion.div
            className="lg:col-span-4"
            initial={{
              opacity: 0,
              y: 60,
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
            <div className="border border-white/10 bg-[#0b0f14]/85 p-6 backdrop-blur-sm md:p-8">
              {/* Availability */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                  Current status
                </span>

                <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[#caff00]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#caff00] shadow-[0_0_8px_#caff00]" />

                  Available
                </span>
              </div>

              {/* Location */}
              <div className="border-b border-white/10 py-6">
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                  Based in
                </span>

                <span className="mt-3 block text-sm text-white/65">
                  {CONTACT_CONFIG.location}
                </span>
              </div>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="group flex items-center justify-between gap-5 border-b border-white/10 py-6"
              >
                <div className="min-w-0">
                  <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                    Primary channel
                  </span>

                  <span className="mt-2 block truncate text-sm text-white/65 transition-colors duration-300 group-hover:text-[#caff00]">
                    {CONTACT_CONFIG.email}
                  </span>
                </div>

                <span className="shrink-0 text-white/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#caff00]">
                  <ArrowIcon />
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_CONFIG.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-6"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50 transition-colors duration-300 group-hover:text-[#00e5ff]">
                  LinkedIn
                </span>

                <span className="text-white/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#00e5ff]">
                  <ArrowIcon />
                </span>
              </a>

              {/* CV */}
              <a
                href={CONTACT_CONFIG.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-6"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50 transition-colors duration-300 group-hover:text-[#ff2bd6]">
                  View résumé
                </span>

                <span className="text-white/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ff2bd6]">
                  <ArrowIcon />
                </span>
              </a>

              {/* Status note */}
              <div className="mt-4 flex items-center justify-between bg-white/[0.025] px-4 py-3 font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
                <span>{CONTACT_CONFIG.availability}</span>
                <span>1–3 days</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Large email link */}
        <motion.a
          href={`mailto:${CONTACT_CONFIG.email}`}
          className="group flex items-center justify-between gap-6 border-y border-white/10 py-8"
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.7,
          }}
        >
          <span className="truncate text-lg text-white/40 transition-colors duration-300 group-hover:text-white sm:text-2xl md:text-4xl">
            {CONTACT_CONFIG.email}
          </span>

          <motion.span
            className="grid h-12 w-12 shrink-0 place-items-center border border-white/15 text-white/50 group-hover:border-[#caff00]/60 group-hover:text-[#caff00] md:h-16 md:w-16"
            whileHover={{
              rotate: 45,
              scale: 1.05,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <ArrowIcon />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}