/**
 * =========================================================
 * OTHER PROJECT DATA TYPE
 * =========================================================
 * Struktur data khusus kartu pada Other Project.
 * Tidak berhubungan dengan Featured Project.
 * =========================================================
 */

export type OtherProjectData = {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  accent: string;
  secondaryAccent: string;
  href: string;
  repository?: string;
  status: "completed" | "in-progress";
};

/**
 * =========================================================
 * OTHER PROJECT DATA
 * =========================================================
 * Tambahkan semua project tambahan ke dalam array ini.
 * Project otomatis ditampilkan dalam infinite carousel.
 * =========================================================
 */

export const OTHER_PROJECTS: OtherProjectData[] = [
  {
    id: "education-ews",
    number: "01",
    title: "Education Early Warning System",
    category: "Machine Learning",
    year: "2026",
    description:
      "A machine-learning prototype for identifying students who may require early academic intervention.",
    tags: ["Python", "Machine Learning", "Data"],
    accent: "#caff00",
    secondaryAccent: "#00e5ff",
    href: "#",
    repository: "#",
    status: "completed",
  },
  {
    id: "nuclear-model",
    number: "02",
    title: "Nuclear Mass Model Analysis",
    category: "Computational Physics",
    year: "2026",
    description:
      "A computational analysis of nuclear binding and nucleon separation energy using the liquid drop model.",
    tags: ["Python", "NumPy", "Nuclear Physics"],
    accent: "#00e5ff",
    secondaryAccent: "#ff2bd6",
    href: "#",
    repository: "#",
    status: "in-progress",
  },
  {
    id: "personal-portfolio",
    number: "03",
    title: "Cyberpunk Personal Portfolio",
    category: "Frontend Development",
    year: "2026",
    description:
      "An experimental personal website combining interactive motion, visual storytelling, and cyberpunk interfaces.",
    tags: ["React", "TypeScript", "Motion"],
    accent: "#ff2bd6",
    secondaryAccent: "#00e5ff",
    href: "#",
    repository: "#",
    status: "in-progress",
  },
  {
    id: "time-series",
    number: "04",
    title: "Production Time-Series Forecast",
    category: "Data Science",
    year: "2026",
    description:
      "A comparative forecasting project using statistical models to identify patterns in production data.",
    tags: ["Python", "SARIMAX", "Forecasting"],
    accent: "#ff9d00",
    secondaryAccent: "#caff00",
    href: "#",
    repository: "#",
    status: "completed",
  },
  {
    id: "customer-segmentation",
    number: "05",
    title: "Customer Segmentation Analysis",
    category: "Data Analytics",
    year: "2026",
    description:
      "Customer behavior exploration and segmentation for understanding different marketing audiences.",
    tags: ["Python", "EDA", "Clustering"],
    accent: "#a855f7",
    secondaryAccent: "#ff2bd6",
    href: "#",
    repository: "#",
    status: "completed",
  },
];