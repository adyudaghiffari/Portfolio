/**
 * =========================================================
 * HERO CONFIGURATION
 * =========================================================
 *
 * Seluruh nilai yang mengatur tampilan dan animasi Hero
 * dikumpulkan di file ini supaya mudah diubah tanpa perlu
 * membongkar JSX di hero.tsx.
 *
 * Progress scroll menggunakan rentang:
 *
 * 0   = awal Hero
 * 0.5 = pertengahan Hero
 * 1   = akhir Hero
 *
 * =========================================================
 */

export const HERO_CONFIG = {
  /* =======================================================
     GENERAL
  ======================================================= */

  /**
   * Panjang area scroll Hero.
   *
   * Nilai lebih besar membuat animasi berlangsung lebih lama.
   *
   * Contoh:
   * 280vh = cepat
   * 340vh = normal
   * 400vh = lambat
   */
  sectionHeight: "340vh",

  /**
   * Pengaturan pegas untuk menghaluskan animasi scroll.
   *
   * stiffness:
   * Semakin tinggi, animasi semakin responsif.
   *
   * damping:
   * Semakin tinggi, gerakan semakin stabil.
   *
   * mass:
   * Semakin tinggi, animasi terasa lebih berat.
   */
  spring: {
    stiffness: 90,
    damping: 24,
    mass: 0.28,
  },

  /* =======================================================
     BACKGROUND
  ======================================================= */

  background: {
    /**
     * Warna Hero saat awal dan akhir animasi.
     */
    initialColor: "#2b2d31",
    finalColor: "#080b10",

    /**
     * Waktu perubahan background dari abu gelap
     * menjadi hitam cyberpunk.
     */
    colorTransition: {
      start: 0.2,
      end: 0.42,
    },

    /**
     * Waktu grid cyberpunk mulai muncul.
     */
    cyberGrid: {
      start: 0.22,
      end: 0.48,
    },

    /**
     * Waktu cahaya cyan dan magenta mulai muncul.
     */
    glow: {
      start: 0.35,
      end: 0.58,
    },
  },

  /* =======================================================
     FRAME
  ======================================================= */

  frame: {
    /**
     * Titik progress yang digunakan untuk mengubah
     * ukuran frame.
     *
     * Jumlah progressPoints harus sama dengan jumlah
     * widths dan heights.
     */
    progressPoints: [0, 0.18, 0.48, 0.75, 1],

    /**
     * Lebar frame pada setiap progressPoints.
     *
     * 100vw = memenuhi lebar layar.
     * 48vw  = 48% dari lebar layar.
     */
    widths: [
      "100vw",
      "100vw",
      "84vw",
      "58vw",
      "48vw",
    ],

    /**
     * Tinggi frame pada setiap progressPoints.
     *
     * 100vh = memenuhi tinggi layar.
     * 48vh  = 48% dari tinggi layar.
     */
    heights: [
      "100vh",
      "100vh",
      "76vh",
      "54vh",
      "48vh",
    ],

    /**
     * Sudut frame berubah dari kotak penuh menjadi
     * sedikit membulat saat frame mengecil.
     */
    radius: {
      start: 0.22,
      end: 0.48,
      initial: "0px",
      final: "8px",
    },

    /**
     * Rotasi frame.
     *
     * Gunakan angka negatif untuk miring ke kiri.
     * Gunakan angka positif untuk miring ke kanan.
     */
    rotation: {
      progressPoints: [0, 0.48, 0.75],
      values: [0, 0, -6],
    },

    /**
     * Waktu border neon dan corner HUD muncul.
     */
    border: {
      start: 0.32,
      end: 0.55,
    },
  },

  /* =======================================================
     PORTRAIT
  ======================================================= */

  portrait: {
    /**
     * Zoom portrait di dalam frame.
     */
    scale: {
      progressPoints: [0, 0.5, 1],
      values: [1, 1.04, 1.1],
    },

    /**
     * Perubahan warna portrait.
     *
     * Awalnya berwarna normal, lalu berubah menjadi
     * grayscale, lebih gelap, dan lebih kontras.
     */
    filter: {
      progressPoints: [0, 0.35, 0.68, 1],

      values: [
        "grayscale(0%) brightness(100%) contrast(100%)",
        "grayscale(0%) brightness(96%) contrast(105%)",
        "grayscale(100%) brightness(66%) contrast(118%)",
        "grayscale(100%) brightness(55%) contrast(125%)",
      ],
    },

    /**
     * Waktu efek scanline dan color tint muncul
     * di atas portrait.
     */
    overlay: {
      start: 0.35,
      end: 0.65,
    },
  },

  /* =======================================================
     BACKGROUND VIDEO
  ======================================================= */

  video: {
    /**
     * Rentang perubahan video menjadi grayscale.
     */
    filterStart: 0.45,
    filterEnd: 0.72,

    /**
     * Video berhenti ketika progress mencapai nilai ini.
     *
     * Sebaiknya disamakan dengan filterEnd agar video
     * berhenti setelah efek grayscale selesai.
     */
    pauseAt: 0.72,

    filterInitial:
      "grayscale(0%) brightness(100%) contrast(100%)",

    filterFinal:
      "grayscale(100%) brightness(65%) contrast(120%)",
  },

  /* =======================================================
     MARQUEE
  ======================================================= */

  marquee: {
    /**
     * Waktu marquee mulai terlihat.
     */
    opacityStart: 0.34,
    opacityEnd: 0.5,

    /**
     * Lama satu putaran marquee dalam detik.
     *
     * Angka lebih besar = gerakan lebih lambat.
     * Angka lebih kecil = gerakan lebih cepat.
     */
    topDuration: 18,
    bottomDuration: 16,
  },

  /* =======================================================
     HUD
  ======================================================= */

  hud: {
    /**
     * Waktu informasi HUD bagian bawah mulai muncul.
     */
    start: 0.4,
    end: 0.58,
  },
} as const;