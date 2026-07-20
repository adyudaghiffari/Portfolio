import {
  motion,
  type MotionValue,
} from "motion/react";

type HeroHUDProps = {
  /**
   * Mengatur kapan HUD muncul mengikuti progress scroll.
   */
  opacity: MotionValue<number>;
};

/**
 * =========================================================
 * HERO HUD
 * =========================================================
 *
 * Informasi tambahan pada bagian bawah Hero.
 *
 * Berfungsi sebagai elemen UI bergaya HUD (Heads-Up Display)
 * yang memperkuat tema cyberpunk sekaligus memberi petunjuk
 * kepada pengguna untuk melanjutkan scroll.
 *
 * =========================================================
 */
function HeroHUD({ opacity }: HeroHUDProps) {
  return (
    <motion.div
      style={{ opacity }}
      className="
        absolute inset-x-0 bottom-5 z-40
        flex items-end justify-between
        px-5
        sm:px-7
      "
    >
      {/* =================================================
          SYSTEM STATUS
      ================================================== */}

      <div
        className="
          font-mono
          text-[8px]
          uppercase
          tracking-[0.2em]
          text-cyan-300
        "
      >
        <p>Signal: Stable</p>
        <p>Protocol: Creativity</p>
      </div>

      {/* =================================================
          SCROLL INDICATOR
      ================================================== */}

      <p
        className="
          font-mono
          text-[9px]
          uppercase
          tracking-[0.35em]
          text-[#caff00]
        "
      >
        Scroll to continue
      </p>
    </motion.div>
  );
}

export default HeroHUD;