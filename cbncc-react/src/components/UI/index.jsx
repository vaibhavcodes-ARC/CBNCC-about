export const SectionLabel = ({ children, className = "" }) => (
  <span
    className={`inline-block font-label-mono text-[10px] md:text-label-mono bg-border-subtle text-on-surface-variant px-4 py-1 mb-6 md:mb-8 rounded-full ${className}`}
  >
    {children}
  </span>
);

export const CinematicHeading = ({ text, className = "" }) => (
  <h2
    className={`font-display-xl text-[44px] md:text-display-xl tracking-tighter leading-[0.95] md:leading-[0.9] mb-8 md:mb-12 ${className}`}
  >
    {text.split("\n").map((line, i) => (
      <div key={i}>{line}</div>
    ))}
  </h2>
);

export const RevealText = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export const GridBackground = () => (
  <div className="absolute inset-0 hairline-grid pointer-events-none z-0" />
);

export const NoiseOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]"
    style={{
      backgroundImage:
        "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23noise)%22/></svg>')",
    }}
  />
);
