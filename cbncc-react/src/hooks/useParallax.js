import { useEffect, useRef } from "react";

export const useParallax = (depth = 0.5) => {
  const ref = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (ref.current) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (e.clientX - centerX) / (50 / depth);
        const moveY = (e.clientY - centerY) / (50 / depth);

        ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (ref.current) {
        ref.current.style.transform = "translate(0, 0)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [depth]);

  return ref;
};

export const useGlowCursor = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const glowEl = document.getElementById("glow-cursor");
    if (!glowEl) return;

    const handleMouseMove = (e) => {
      glowEl.style.left = e.clientX + "px";
      glowEl.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};
