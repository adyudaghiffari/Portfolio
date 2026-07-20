import type { RefObject } from "react";

import {
  motion,
  type MotionValue,
} from "motion/react";

import heroImg from "../../asset/image/hero.png";
import backgroundVideo from "../../asset/video/background.mp4";

type HeroFrameProps = {
  /**
   * Referensi video agar bisa dikontrol dari hero.tsx.
   */
  videoRef: RefObject<HTMLVideoElement | null>;

  /**
   * Ukuran dan bentuk frame.
   */
  frameWidth: MotionValue;
  frameHeight: MotionValue;
  frameRadius: MotionValue;
  frameRotate: MotionValue;

  /**
   * Tampilan frame dan video.
   */
  frameBorderOpacity: MotionValue;
  videoFilter: MotionValue;

  /**
   * Tampilan portrait.
   */
  imageScale: MotionValue;
  imageFilter: MotionValue;
  portraitOverlayOpacity: MotionValue;
};

/**
 * =========================================================
 * HERO FRAME
 * =========================================================
 *
 * Frame visual utama pada Hero.
 *
 * Urutan layer:
 *
 * z-0  : background video
 * z-5  : video color grading
 * z-10 : portrait utama
 * z-20 : scanline dan color tint
 * z-30 : border neon dan HUD corners
 *
 * Ukuran, rotasi, dan efek visual frame dikontrol dari
 * hero.tsx menggunakan MotionValue.
 *
 * =========================================================
 */
function HeroFrame({
  videoRef,
  frameWidth,
  frameHeight,
  frameRadius,
  frameRotate,
  frameBorderOpacity,
  videoFilter,
  imageScale,
  imageFilter,
  portraitOverlayOpacity,
}: HeroFrameProps) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <motion.div
        style={{
          width: frameWidth,
          height: frameHeight,
          borderRadius: frameRadius,
          rotate: frameRotate,
        }}
        className="relative overflow-hidden bg-[#23252b]"
      >
        {/* =================================================
            BACKGROUND VIDEO
        ================================================== */}

        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          style={{
            filter: videoFilter,
          }}
          className="
            absolute inset-0 z-0
            h-full w-full
            object-cover
          "
        >
          <source
            src={backgroundVideo}
            type="video/mp4"
          />
        </motion.video>

        {/* =================================================
            VIDEO COLOR GRADING
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-[5]
            bg-gradient-to-br
            from-[#23072f]/50
            via-transparent
            to-[#001e29]/50
          "
        />

        {/* =================================================
            MAIN PORTRAIT
        ================================================== */}

        <motion.img
          src={heroImg}
          alt="Portrait of Adyuda"
          draggable={false}
          style={{
            scale: imageScale,
            filter: imageFilter,
          }}
          className="
            absolute inset-0 z-10
            h-full w-full
            select-none object-cover object-center
          "
        />

        {/* =================================================
            PORTRAIT EFFECTS
        ================================================== */}

        {/* Scanline texture */}
        <motion.div
          aria-hidden="true"
          style={{
            opacity: portraitOverlayOpacity,
          }}
          className="
            frame-scanlines pointer-events-none
            absolute inset-0 z-20
          "
        />

        {/* Cyan dan magenta tint */}
        <motion.div
          aria-hidden="true"
          style={{
            opacity: portraitOverlayOpacity,
          }}
          className="
            pointer-events-none absolute inset-0 z-20
            bg-gradient-to-br
            from-cyan-400/10
            via-transparent
            to-fuchsia-500/15
          "
        />

        {/* =================================================
            NEON BORDER
        ================================================== */}

        <motion.div
          aria-hidden="true"
          style={{
            opacity: frameBorderOpacity,
          }}
          className="
            pointer-events-none absolute inset-0 z-30
            border border-[#caff00]/50
            shadow-[0_0_40px_rgba(202,255,0,0.12)]
          "
        />

        {/* =================================================
            FRAME HUD CORNERS
        ================================================== */}

        <motion.div
          aria-hidden="true"
          style={{
            opacity: frameBorderOpacity,
          }}
          className="
            pointer-events-none absolute inset-3 z-30
          "
        >
          <span className="hud-corner hud-corner-tl" />
          <span className="hud-corner hud-corner-tr" />
          <span className="hud-corner hud-corner-bl" />
          <span className="hud-corner hud-corner-br" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroFrame;