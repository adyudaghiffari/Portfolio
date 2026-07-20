/**
 * =========================================================
 * FOOTER LINKS
 * =========================================================
 * Pastikan id setiap section sesuai dengan href ini.
 * =========================================================
 */

const FOOTER_LINKS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Other Projects",
    href: "#other-projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

/**
 * =========================================================
 * FOOTER
 * =========================================================
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080b10] px-5 text-[#e9eeeb] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Main footer */}
        <div className="grid gap-12 py-14 md:grid-cols-12 md:py-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#home"
              className="cyber-heavy text-3xl uppercase tracking-[-0.04em] text-white"
            >
              Adyuda Ghiffari
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/35">
              Physics-trained creative technologist working across
              data, design, and development.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
              Navigate
            </span>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-[#caff00]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* External links */}
          <div className="md:col-span-3">
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
              External channels
            </span>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="https://linkedin.com/in/adyudaghiffari/"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-[#00e5ff]"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:adyudaghiffari@gmail.com"
                className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-[#ff2bd6]"
              >
                Email ↗
              </a>

              <a
                href="/cv-adyuda.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-[#caff00]"
              >
                Résumé ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 font-mono text-[7px] uppercase tracking-[0.2em] text-white/20 sm:flex-row sm:items-center">
          <span>
            © {currentYear} Adyuda Ghiffari Ramadhan
          </span>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#caff00] shadow-[0_0_8px_#caff00]" />

            <span>System online / Indonesia</span>
          </div>

          <span>Designed & built with curiosity</span>
        </div>
      </div>
    </footer>
  );
}