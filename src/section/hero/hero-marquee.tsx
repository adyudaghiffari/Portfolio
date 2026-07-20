import {
  motion,
  type MotionValue,
} from "motion/react";

import { HERO_CONFIG } from "./hero-config";

/**
 * =========================================================
 * MARQUEE CONTENT
 * =========================================================
 * Ubah teks marquee di sini.
 *
 * Teks otomatis diduplikasi agar animasi tetap menyambung
 * tanpa jeda saat mengulang.
 * =========================================================
 */
const MARQUEE_CONTENT = {
  top: "Chaos becomes structure //",
  bottom: "Design data development //",
} as const;

type HeroMarqueeProps = {
  /**
   * Mengatur kemunculan marquee berdasarkan progress scroll.
   */
  opacity: MotionValue<number>;
};

/**
 * =========================================================
 * HERO MARQUEE
 * =========================================================
 *
 * Dua baris teks bergerak terus-menerus di belakang frame:
 *
 * - Baris atas bergerak dari kiri ke kanan.
 * - Baris bawah bergerak dari kanan ke kiri.
 *
 * Kecepatan marquee dapat diubah melalui hero-config.ts.
 *
 * =========================================================
 */
function HeroMarquee({ opacity }: HeroMarqueeProps) {
  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity }}
      className="
        pointer-events-none absolute inset-0 z-10
        flex flex-col justify-center
        overflow-hidden
      "
    >
      <MarqueeRow
        text={MARQUEE_CONTENT.top}
        direction="right"
        duration={HERO_CONFIG.marquee.topDuration}
        className="
          cyber-serif
          pr-12
          text-[clamp(4rem,9vw,9rem)]
          leading-[0.78]
          uppercase
          text-[#caff00]
        "
      />

      <MarqueeRow
        text={MARQUEE_CONTENT.bottom}
        direction="left"
        duration={HERO_CONFIG.marquee.bottomDuration}
        className="
          cyber-heavy
          pr-12
          text-[clamp(3.8rem,8vw,8rem)]
          leading-[0.78]
          uppercase
          text-[#e9eeeb]
        "
      />
    </motion.div>
  );
}

export default HeroMarquee;

/* =========================================================
   MARQUEE ROW
========================================================= */

type MarqueeRowProps = {
  text: string;
  direction: "left" | "right";
  duration: number;
  className: string;
};

/**
 * Satu baris marquee.
 *
 * Konten dibuat menjadi dua salinan identik agar animasi
 * dapat mengulang tanpa terlihat terputus.
 */
function MarqueeRow({
  text,
  direction,
  duration,
  className,
}: MarqueeRowProps) {
  const xAnimation =
    direction === "right"
      ? ["-50%", "0%"]
      : ["0%", "-50%"];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex w-max"
        animate={{ x: xAnimation }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MarqueeText
          text={text}
          className={className}
        />

        <MarqueeText
          text={text}
          className={className}
        />
      </motion.div>
    </div>
  );
}

/* =========================================================
   MARQUEE TEXT
========================================================= */

type MarqueeTextProps = {
  text: string;
  className: string;
};

/**
 * Satu salinan teks marquee.
 *
 * Isi diulang dua kali dalam satu span agar lebar teks cukup
 * untuk menjaga loop tetap mulus pada layar besar.
 */
function MarqueeText({
  text,
  className,
}: MarqueeTextProps) {
  return (
    <span className={className}>
      {text} {text}
    </span>
  );
}