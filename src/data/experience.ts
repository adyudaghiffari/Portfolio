/**
 * =========================================================
 * EXPERIENCE DATA TYPE
 * =========================================================
 * Struktur data yang digunakan oleh Experience section.
 * =========================================================
 */

export type ExperienceCategory =
  | "work"
  | "technology-program"
  | "organization";

export type ExperienceData = {
  id: string;
  period: string;
  organization: string;
  role: string;
  category: ExperienceCategory;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
  accent: string;
};

/**
 * =========================================================
 * EXPERIENCE DATA
 * =========================================================
 * Data pengalaman dikurasi dari CV.
 *
 * Bagian yang mudah diubah:
 * - period: periode pengalaman
 * - organization: nama organisasi/perusahaan
 * - role: jabatan
 * - summary: deskripsi singkat
 * - highlights: maksimal dua pencapaian
 * - skills: maksimal empat kemampuan
 * - accent: warna setiap pengalaman
 * =========================================================
 */

export const EXPERIENCES: ExperienceData[] = [
  {
    id: "koica-cloud-big-data",

    period: "APR - JUN 2026",

    organization:
      "KOICA-Silla-UMN 4th Industrial Revolution Technical Center",

    role: "Cloud & Big Data Cohort",

    category: "technology-program",

    location: "Indonesia",

    summary:
      "An intensive multidisciplinary program covering data analytics, machine learning, business intelligence, geospatial analysis, IoT, and cloud computing.",

    highlights: [
      "Built data and visualization projects using Python, Power BI, Tableau, and QGIS.",
      "Developed an IoT architecture integrating devices, gateways, MQTT, cloud platforms, and real-time data pipelines.",
    ],

    skills: [
      "Python",
      "Machine Learning",
      "Cloud",
      "IoT",
    ],

    accent: "#caff00",
  },

  {
    id: "rajin-tutor",

    period: "JAN - APR 2026",

    organization: "Rajin.id",

    role: "Freelance SNBT & Physics Tutor",

    category: "work",

    location: "Indonesia",

    summary:
      "Taught Physics and logical reasoning for university entrance preparation using visual and data-informed learning strategies.",

    highlights: [
      "Translated complex Physics concepts into simplified and personalized learning frameworks.",
      "Created visual learning materials that helped improve average mock-exam performance by approximately 15%.",
    ],

    skills: [
      "Physics",
      "Teaching",
      "Data Analysis",
      "Visual Learning",
    ],

    accent: "#00e5ff",
  },

  {
    id: "dehaga-general-affair",

    period: "JAN - JUN 2025",

    organization: "Dehaga.id",

    role: "General Affair Manager",

    category: "work",

    location: "Indonesia",

    summary:
      "Managed administrative operations, procurement, company assets, vendor relationships, and internal coordination within an F&B business.",

    highlights: [
      "Reduced operational supply discrepancies by approximately 5-10% through inventory and administrative improvements.",
      "Negotiated procurement and maintenance terms that reduced unnecessary costs by approximately 10%.",
    ],

    skills: [
      "Operations",
      "Vendor Management",
      "Procurement",
      "Administration",
    ],

    accent: "#ff9d00",
  },

  {
    id: "bangkit-machine-learning",

    period: "FEB - JUL 2024",

    organization: "Bangkit Academy by Google & GoTo",

    role: "Machine Learning Engineering Cohort",

    category: "technology-program",

    location: "Indonesia",

    summary:
      "Studied applied machine learning engineering, data preparation, predictive modeling, and cloud-based application development.",

    highlights: [
      "Trained and evaluated predictive models using Python, TensorFlow, and cloud infrastructure.",
      "Worked as an ML Engineer within a cross-functional capstone team to integrate predictive intelligence into an application prototype.",
    ],

    skills: [
      "Python",
      "TensorFlow",
      "Machine Learning",
      "Cloud",
    ],

    accent: "#ff2bd6",
  },

  {
    id: "bem-publication-media",

    period: "OCT 2022 - SEP 2023",

    organization: "IPB Student Executive Board",

    role: "Leader of Publication & Media",

    category: "organization",

    location: "Bogor, Indonesia",

    summary:
      "Led a multidisciplinary creative team responsible for visual communication, digital publications, and media production for academic programs.",

    highlights: [
      "Led and mentored a multimedia team of more than 30 members across major university events.",
      "Developed a standardized visual identity system that increased digital reach and event attendance by approximately 20%.",
    ],

    skills: [
      "Creative Direction",
      "Leadership",
      "Branding",
      "Project Management",
    ],

    accent: "#a855f7",
  },

  {
    id: "physics-laboratory-assistant",

    period: "JUL 2022 - JUN 2023",

    organization: "Department of Physics - IPB University",

    role: "Physics Laboratory Assistant",

    category: "work",

    location: "Bogor, Indonesia",

    summary:
      "Instructed undergraduate laboratory sessions, maintained scientific equipment, and evaluated experimental reports.",

    highlights: [
      "Supervised more than 150 students during weekly Basic Physics laboratory sessions with a zero-accident record.",
      "Calibrated experimental equipment and evaluated more than 50 laboratory reports each week.",
    ],

    skills: [
      "Experimental Physics",
      "Laboratory Safety",
      "Data Evaluation",
      "Teaching",
    ],

    accent: "#00e5ff",
  },

  {
    id: "bahasa-qna-designer",

    period: "AUG 2021 - JUL 2022",

    organization: "Bahasa QnA",

    role: "Graphic Designer & Illustrator",

    category: "work",

    location: "Indonesia",

    summary:
      "Created educational visual content that transformed abstract language topics into accessible illustrated stories.",

    highlights: [
      "Designed more than 150 educational carousel posts using illustration, typography, and visual storytelling.",
      "Built reusable design templates and visual guidelines while helping increase organic shares and saves by more than 20%.",
    ],

    skills: [
      "Illustration",
      "Graphic Design",
      "Typography",
      "Visual Identity",
    ],

    accent: "#ff2bd6",
  },
];