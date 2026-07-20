/**
 * =========================================================
 * PROJECT DATA
 * =========================================================
 * Semua isi Featured Project bisa diubah dari file ini.
 *
 * Catatan:
 * - Gunakan maksimal 3–5 featured project.
 * - Ganti href "#" setelah halaman/detail project tersedia.
 * - Warna accent menerima HEX, RGB, atau CSS color lainnya.
 * =========================================================
 */

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  accent: string;
  secondaryAccent: string;
  href: string;
  repository?: string;
  status: "completed" | "in-progress";
  metrics: ProjectMetric[];
  visual: "iot" | "map" | "dashboard";
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "iot-monitoring",
    number: "01",
    title: "IoT Monitoring System",
    shortTitle: "IoT System",
    category: "Internet of Things",
    year: "2026",
    description:
      "A real-time IoT architecture connecting devices, gateways, and servers through MQTT. Built with remote device management, local data storage, token synchronization, and automatic raw-data backup.",
    tags: ["Python", "MQTT", "EMQX", "SQLite"],
    accent: "#caff00",
    secondaryAccent: "#00e5ff",
    href: "#",
    repository: "#",
    status: "completed",
    metrics: [
      {
        value: "3",
        label: "System layers",
      },
      {
        value: "RT",
        label: "Live telemetry",
      },
      {
        value: "1H",
        label: "Backup cycle",
      },
    ],
    visual: "iot",
  },
  {
    id: "hotel-location",
    number: "02",
    title: "Hotel Location Intelligence",
    shortTitle: "Spatial Analysis",
    category: "Geospatial Analysis",
    year: "2026",
    description:
      "A location intelligence project for identifying potential hotel areas in Yogyakarta using spatial buffers, accessibility analysis, weighted indicators, and suitability classification.",
    tags: ["QGIS", "Spatial Analysis", "Geoprocessing"],
    accent: "#00e5ff",
    secondaryAccent: "#ff2bd6",
    href: "#",
    repository: "#",
    status: "completed",
    metrics: [
      {
        value: "500M",
        label: "Grid resolution",
      },
      {
        value: "4",
        label: "Suitability levels",
      },
      {
        value: "GIS",
        label: "Analysis system",
      },
    ],
    visual: "map",
  },
  {
    id: "food-delivery",
    number: "03",
    title: "Food Delivery Intelligence",
    shortTitle: "Delivery Analytics",
    category: "Business Intelligence",
    year: "2026",
    description:
      "An analytical dashboard exploring food-delivery performance through demand patterns, delivery distance, cancellations, revenue, rider waiting time, customer ratings, and promotional impact.",
    tags: ["Power BI", "Data Analysis", "Visualization"],
    accent: "#ff2bd6",
    secondaryAccent: "#caff00",
    href: "#",
    repository: "#",
    status: "completed",
    metrics: [
      {
        value: "10",
        label: "Core visuals",
      },
      {
        value: "KPI",
        label: "Performance view",
      },
      {
        value: "BI",
        label: "Decision system",
      },
    ],
    visual: "dashboard",
  },
];