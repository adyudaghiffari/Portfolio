import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app";
import "./style/global.css";

/**
 * =========================================================
 * APPLICATION ENTRY POINT
 * =========================================================
 *
 * File pertama yang dijalankan oleh React.
 *
 * Tugasnya:
 * - memuat global CSS;
 * - mencari elemen #root dari index.html;
 * - merender component App.
 *
 * =========================================================
 */

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element dengan id "root" tidak ditemukan.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);