import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-glass-fill backdrop-blur-3xl border-b border-border-subtle"
    >
      <div className="flex justify-between items-center px-4 md:px-grid-margin py-3 md:py-unit w-full max-w-[1920px] mx-auto">
        <div className="font-display-lg text-[22px] md:text-[32px] text-primary tracking-tighter leading-none">
          CBNCC
        </div>
        <nav className="hidden lg:flex gap-8">
          <a
            className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="#"
          >
            Manifesto
          </a>
          <a
            className="font-label-mono text-label-mono uppercase tracking-widest text-primary border-b border-primary pb-1"
            href="#"
          >
            Vision
          </a>
          <a
            className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="#"
          >
            Archive
          </a>
          <a
            className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="#"
          >
            Nexus
          </a>
        </nav>
        <button className="font-label-mono text-[10px] md:text-label-mono uppercase tracking-widest bg-primary text-background px-4 md:px-6 py-2 transition-all hover:opacity-90">
          JOIN CLUB
        </button>
      </div>
    </motion.header>
  );
};
