import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

import logoImg from "../asset/image/logo.png";

/**
 * =========================================================
 * NAVBAR CONFIG
 * =========================================================
 * Seluruh konfigurasi navbar yang sering diubah.
 * =========================================================
 */
const NAVBAR_CONFIG = {
  scroll: {
    start: 450,
    end: 750,
  },

  spring: {
    stiffness: 120,
    damping: 26,
    mass: 0.25,
  },

  logo: {
    moveY: -10,
    finalScale: 0.9,
  },

  name: {
    initialY: 12,
    blurStart: "blur(6px)",
    blurEnd: "blur(0px)",
  },
} as const;

/**
 * =========================================================
 * NAVBAR
 * =========================================================
 *
 * Navbar utama portfolio.
 *
 * Saat halaman discroll:
 * - Logo menghilang perlahan.
 * - Nama muncul mengikuti progress scroll.
 *
 * =========================================================
 */
function Navbar() {
  const { scrollY } = useScroll();

  const smoothScroll = useSpring(
    scrollY,
    NAVBAR_CONFIG.spring,
  );

  const transitionRange = [
    NAVBAR_CONFIG.scroll.start,
    NAVBAR_CONFIG.scroll.end,
  ];

  /* ---------------------------------------------------------
     Logo animation
  --------------------------------------------------------- */

  const logoOpacity = useTransform(
    smoothScroll,
    [0, ...transitionRange],
    [1, 1, 0],
  );

  const logoY = useTransform(
    smoothScroll,
    transitionRange,
    [0, NAVBAR_CONFIG.logo.moveY],
  );

  const logoScale = useTransform(
    smoothScroll,
    transitionRange,
    [1, NAVBAR_CONFIG.logo.finalScale],
  );

  /* ---------------------------------------------------------
     Name animation
  --------------------------------------------------------- */

  const nameOpacity = useTransform(
    smoothScroll,
    transitionRange,
    [0, 1],
  );

  const nameY = useTransform(
    smoothScroll,
    transitionRange,
    [NAVBAR_CONFIG.name.initialY, 0],
  );

  const nameBlur = useTransform(
    smoothScroll,
    transitionRange,
    [
      NAVBAR_CONFIG.name.blurStart,
      NAVBAR_CONFIG.name.blurEnd,
    ] as string[],
  );

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-[100]
        px-4 py-4
        sm:px-6 sm:py-5
      "
    >
      <nav
        aria-label="Primary navigation"
        className="flex items-start justify-between"
      >
        <NavbarBrand
          logoOpacity={logoOpacity}
          logoY={logoY}
          logoScale={logoScale}
          nameOpacity={nameOpacity}
          nameY={nameY}
          nameBlur={nameBlur}
        />

        <MenuButton />
      </nav>
    </header>
  );
}

export default Navbar;

/* =========================================================
   NAVBAR BRAND
========================================================= */

type NavbarBrandProps = {
  logoOpacity: MotionValue<number>;
  logoY: MotionValue<number>;
  logoScale: MotionValue<number>;
  nameOpacity: MotionValue<number>;
  nameY: MotionValue<number>;
  nameBlur: MotionValue<string>;
};

function NavbarBrand({
  logoOpacity,
  logoY,
  logoScale,
  nameOpacity,
  nameY,
  nameBlur,
}: NavbarBrandProps) {
  return (
    <a
      href="#home"
      aria-label="Back to homepage"
      className="
        relative block
        h-16 w-[180px]
        sm:h-20 sm:w-[230px]
      "
    >
      {/* -----------------------------------------------------
          Logo
      ----------------------------------------------------- */}

      <motion.img
        src={logoImg}
        alt="Adyuda logo"
        draggable={false}
        style={{
          opacity: logoOpacity,
          y: logoY,
          scale: logoScale,
        }}
        className="
          absolute left-0 top-0
          h-16 w-auto
          origin-left object-contain
          sm:h-20
        "
      />

      {/* -----------------------------------------------------
          Name
      ----------------------------------------------------- */}

      <motion.div
        style={{
          opacity: nameOpacity,
          y: nameY,
          filter: nameBlur,
        }}
        className="
          absolute left-0 top-0
          origin-left leading-none
          text-white
        "
      >
        <span className="nav-name-adyuda block text-[2.3rem] uppercase">
          Adyuda
        </span>

        <span className="nav-name-ghiffari block text-[1.75rem] uppercase">
          Ghiffari
        </span>
      </motion.div>
    </a>
  );
}

/* =========================================================
   MENU BUTTON
========================================================= */

function MenuButton() {
  return (
    <button
      type="button"
      aria-label="Open navigation menu"
      className="
        group relative
        flex h-14 w-14
        flex-col items-center justify-center
        gap-[7px]

        overflow-hidden
        rounded-xl
        border border-white/20

        bg-[linear-gradient(135deg,#f7f7f7_0%,#9a9a9a_22%,#ffffff_40%,#666_60%,#d7d7d7_82%,#7a7a7a_100%)]

        shadow-[5px_6px_12px_rgba(0,0,0,0.5)]

        transition-all duration-300

        hover:-translate-y-1
        hover:bg-[#ff2f9a]
        hover:shadow-[0_0_12px_rgba(255,47,154,0.8),0_0_28px_rgba(255,47,154,0.65),0_0_48px_rgba(255,47,154,0.35)]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#ff2f9a]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-black
      "
    >
      {/* Metallic highlight */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 -left-10
          w-8 rotate-12

          bg-white/45
          blur-sm

          transition-all duration-500

          group-hover:left-16
          group-hover:bg-white/20
        "
      />

      {/* Menu line 1 */}
      <span
        aria-hidden="true"
        className="
          relative z-10
          block h-[2px] w-5
          -translate-x-1

          bg-[#111]

          transition-transform duration-300

          group-hover:translate-x-1
        "
      />

      {/* Menu line 2 */}
      <span
        aria-hidden="true"
        className="
          relative z-10
          block h-[2px] w-5
          translate-x-1

          bg-[#111]

          transition-transform duration-300

          group-hover:-translate-x-1
        "
      />
    </button>
  );
}