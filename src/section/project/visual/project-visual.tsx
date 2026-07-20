import type { Project } from "../../../data/project";

import DashboardVisual from "./dashboard-visual";
import IoTVisual from "./iot-visual";
import MapVisual from "./map-visual";

type ProjectVisualProps = {
  project: Project;
};

/**
 * =========================================================
 * PROJECT VISUAL SELECTOR
 * =========================================================
 * Menentukan visual berdasarkan nilai `visual`
 * yang terdapat di src/data/project.ts.
 * =========================================================
 */

export default function ProjectVisual({
  project,
}: ProjectVisualProps) {
  switch (project.visual) {
    case "iot":
      return <IoTVisual project={project} />;

    case "map":
      return <MapVisual project={project} />;

    case "dashboard":
      return <DashboardVisual project={project} />;

    default:
      return null;
  }
}