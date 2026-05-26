import { useRef, useEffect } from "react";
import "./ascii.css";

export const ASCIIVisualizer = ({
  lines,
  symbolPalette = ["$", ":", ".", "/", ">", "@"],
}) => {
  const containerRef = useRef(null);
  const spansRef = useRef([]);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    if (containerRef.current) {
      spansRef.current = Array.from(
        containerRef.current.querySelectorAll(".ascii-char")
      );
    }
  }, [lines]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const radius = window.innerWidth < 768 ? 60 : 120;

    function onMove(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function animate() {
      spansRef.current.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouseRef.current.x - cx;
        const dy = mouseRef.current.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius) {
          const force = (radius - dist) / radius;
          const angle = Math.atan2(cy - mouseRef.current.y, cx - mouseRef.current.x);
          const moveX = Math.cos(angle) * force * 12;
          const moveY = Math.sin(angle) * force * 12;

          span.style.transform = `translate(${moveX}px, ${moveY}px) scale(${
            1 + force * 0.18
          })`;
          span.style.color = `rgba(255,255,255,${0.4 + force * 0.6})`;

          if (Math.random() > 0.96) {
            span.classList.add("glitch");
            span.textContent =
              symbolPalette[Math.floor(Math.random() * symbolPalette.length)];
            setTimeout(() => {
              span.classList.remove("glitch");
              span.textContent = span.dataset.original;
            }, 150);
          }
        } else {
          span.style.transform = "";
          span.style.color = "";
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [symbolPalette]);

  return (
    <div ref={containerRef} className="ascii-art text-primary/40 text-[5px] sm:text-[8px] md:text-[14px]">
      {lines.map((row, ri) => (
        <div className="ascii-row" key={ri}>
          {row.split("").map((ch, i) => (
            <span key={i} data-original={ch} className="ascii-char">
              {ch}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
