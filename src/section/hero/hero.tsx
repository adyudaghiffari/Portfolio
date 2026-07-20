import { useRef } from "react";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { HERO_CONFIG } from "./hero-config";
import HeroFrame from "./hero-frame";
import HeroHUD from "./hero-hud";
import HeroMarquee from "./hero-marquee";

/**
 * =========================================================
 * HERO
 * =========================================================
 *
 * Parent utama untuk seluruh tampilan dan animasi Hero.
 *
 * File ini bertanggung jawab atas:
 *
 * - membaca progress scroll Hero;
 * - membuat seluruh MotionValue;
 * - mengatur play dan pause background video;
 * - menyusun background, marquee, frame, HUD, dan indikator;
 *
 * Seluruh angka konfigurasi utama berada di:
 * hero-config.ts
 *
 * =========================================================
 */
function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  /*
   * =====================================================
   * SCROLL PROGRESS
   * =====================================================
   *
   * scrollYProgress menghasilkan nilai:
   *
   * 0 = awal Hero
   * 1 = akhir Hero
   */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /**
   * Versi scroll progress yang telah diperhalus.
   *
   * Semua animasi Hero menggunakan nilai ini agar gerakannya
   * tidak terasa kaku ketika pengguna melakukan scroll.
   */
  const progress = useSpring(
    scrollYProgress,
    HERO_CONFIG.spring,
  );

  /*
   * =====================================================
   * BACKGROUND ANIMATION
   * =====================================================
   */

  /**
   * Mengubah warna background dari warna awal menjadi
   * warna cyberpunk gelap.
   */
  const backgroundColor = useTransform(
    progress,
    [
      0,
      HERO_CONFIG.background.colorTransition.start,
      HERO_CONFIG.background.colorTransition.end,
      1,
    ],
    [
      HERO_CONFIG.background.initialColor,
      HERO_CONFIG.background.initialColor,
      HERO_CONFIG.background.finalColor,
      HERO_CONFIG.background.finalColor,
    ],
  );

  /**
   * Mengatur kemunculan grid cyberpunk di belakang frame.
   */
  const cyberBackgroundOpacity = useTransform(
    progress,
    [
      HERO_CONFIG.background.cyberGrid.start,
      HERO_CONFIG.background.cyberGrid.end,
    ],
    [0, 1],
  );

  /**
   * Mengatur kemunculan glow cyan dan magenta.
   */
  const backgroundGlowOpacity = useTransform(
    progress,
    [
      HERO_CONFIG.background.glow.start,
      HERO_CONFIG.background.glow.end,
    ],
    [0, 1],
  );

  /*
   * =====================================================
   * FRAME ANIMATION
   * =====================================================
   */

  /**
   * Frame dimulai dengan ukuran satu layar penuh,
   * kemudian mengecil mengikuti progress scroll.
   */
  const frameWidth = useTransform(
    progress,
    [...HERO_CONFIG.frame.progressPoints],
    [...HERO_CONFIG.frame.widths],
  );

  const frameHeight = useTransform(
    progress,
    [...HERO_CONFIG.frame.progressPoints],
    [...HERO_CONFIG.frame.heights],
  );

  /**
   * Membuat sudut frame sedikit membulat setelah mengecil.
   */
  const frameRadius = useTransform(
    progress,
    [
      HERO_CONFIG.frame.radius.start,
      HERO_CONFIG.frame.radius.end,
    ],
    [
      HERO_CONFIG.frame.radius.initial,
      HERO_CONFIG.frame.radius.final,
    ],
  );

  /**
   * Mengatur kemiringan frame pada state akhir Hero.
   */
  const frameRotate = useTransform(
    progress,
    [...HERO_CONFIG.frame.rotation.progressPoints],
    [...HERO_CONFIG.frame.rotation.values],
  );

  /**
   * Mengatur kemunculan border neon dan HUD corners.
   */
  const frameBorderOpacity = useTransform(
    progress,
    [
      HERO_CONFIG.frame.border.start,
      HERO_CONFIG.frame.border.end,
    ],
    [0, 1],
  );

  /*
   * =====================================================
   * BACKGROUND VIDEO ANIMATION
   * =====================================================
   */

  /**
   * Mengubah video menjadi grayscale dan lebih gelap
   * saat Hero mendekati final poster state.
   */
  const videoFilter = useTransform(
    progress,
    [
      HERO_CONFIG.video.filterStart,
      HERO_CONFIG.video.filterEnd,
    ],
    [
      HERO_CONFIG.video.filterInitial,
      HERO_CONFIG.video.filterFinal,
    ],
  );

  /*
   * =====================================================
   * PORTRAIT ANIMATION
   * =====================================================
   */

  /**
   * Membuat portrait sedikit membesar di dalam frame.
   */
  const imageScale = useTransform(
    progress,
    [...HERO_CONFIG.portrait.scale.progressPoints],
    [...HERO_CONFIG.portrait.scale.values],
  );

  /**
   * Mengubah warna, brightness, dan contrast portrait.
   */
  const imageFilter = useTransform(
    progress,
    [...HERO_CONFIG.portrait.filter.progressPoints],
    [...HERO_CONFIG.portrait.filter.values],
  );

  /**
   * Mengatur kemunculan scanline dan color tint
   * di atas portrait.
   */
  const portraitOverlayOpacity = useTransform(
    progress,
    [
      HERO_CONFIG.portrait.overlay.start,
      HERO_CONFIG.portrait.overlay.end,
    ],
    [0, 1],
  );

  /*
   * =====================================================
   * MARQUEE AND HUD ANIMATION
   * =====================================================
   */

  /**
   * Marquee muncul di belakang frame setelah frame
   * mulai mengecil.
   */
  const marqueeOpacity = useTransform(
    progress,
    [
      HERO_CONFIG.marquee.opacityStart,
      HERO_CONFIG.marquee.opacityEnd,
    ],
    [0, 1],
  );

  /**
   * HUD bawah muncul saat Hero mendekati state akhir.
   */
  const hudOpacity = useTransform(
    progress,
    [
      HERO_CONFIG.hud.start,
      HERO_CONFIG.hud.end,
    ],
    [0, 1],
  );

  /*
   * =====================================================
   * VIDEO PLAYBACK CONTROL
   * =====================================================
   *
   * Video berhenti ketika Hero mencapai poster state.
   *
   * Ketika pengguna scroll kembali ke atas, video akan
   * diputar kembali.
   */

  useMotionValueEvent(progress, "change", (latest) => {
    const video = videoRef.current;

    if (!video) return;

    if (latest >= HERO_CONFIG.video.pauseAt) {
      video.pause();
      return;
    }

    if (!video.paused) return;

    void video.play().catch(() => {
      /**
       * Browser dapat menolak autoplay.
       *
       * Error sengaja tidak dilempar karena background video
       * bukan fitur utama yang harus memblokir halaman.
       */
    });
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        height: HERO_CONFIG.sectionHeight,
      }}
      className="relative"
    >
      <motion.div
        style={{ backgroundColor }}
        className="
          cyber-stage sticky top-0
          h-screen overflow-hidden
        "
      >
        {/* =================================================
            CYBERPUNK BACKGROUND
        ================================================== */}

        <motion.div
          aria-hidden="true"
          style={{
            opacity: cyberBackgroundOpacity,
          }}
          className="
            cyber-grid pointer-events-none
            absolute inset-0 z-0
          "
        />

        {/* Cyan glow pada sisi kanan atas */}
        <motion.div
          aria-hidden="true"
          style={{
            opacity: backgroundGlowOpacity,
          }}
          className="
            pointer-events-none absolute
            -top-40 right-[-10rem] z-0
            h-[38rem] w-[38rem]
            rounded-full
            bg-cyan-400/15
            blur-[140px]
          "
        />

        {/* Magenta glow pada sisi kiri bawah */}
        <motion.div
          aria-hidden="true"
          style={{
            opacity: backgroundGlowOpacity,
          }}
          className="
            pointer-events-none absolute
            -bottom-52 left-[-10rem] z-0
            h-[38rem] w-[38rem]
            rounded-full
            bg-fuchsia-500/15
            blur-[150px]
          "
        />

        {/* =================================================
            MOVING MARQUEE
        ================================================== */}

        <HeroMarquee opacity={marqueeOpacity} />

        {/* =================================================
            SHRINKING HERO FRAME
        ================================================== */}

        <HeroFrame
          videoRef={videoRef}
          frameWidth={frameWidth}
          frameHeight={frameHeight}
          frameRadius={frameRadius}
          frameRotate={frameRotate}
          frameBorderOpacity={frameBorderOpacity}
          videoFilter={videoFilter}
          imageScale={imageScale}
          imageFilter={imageFilter}
          portraitOverlayOpacity={portraitOverlayOpacity}
        />

        {/* =================================================
            BOTTOM HUD
        ================================================== */}

        <HeroHUD opacity={hudOpacity} />

        {/* =================================================
            SCROLL PROGRESS INDICATOR
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute inset-x-0 bottom-0 z-50
            h-[2px] bg-white/10
          "
        >
          <motion.div
            style={{
              scaleX: progress,
              transformOrigin: "0% 50%",
            }}
            className="h-full w-full bg-[#caff00]"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;