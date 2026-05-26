import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../animations/variants";
import { useParallax } from "../../hooks/useParallax";

export const VisionSection = ({ data }) => {
  const panelRef = useParallax(0.5);
  const bgTextRef = useParallax(1.5);

  return (
    <motion.section
      className="relative py-20 md:py-section-gap overflow-hidden"
      id="vision"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2
          ref={bgTextRef}
          className="text-outline font-display-xl text-[120px] md:text-[400px] leading-none select-none"
        >
          {data.bgText}
        </h2>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-grid-margin">
        <motion.div
          ref={panelRef}
          variants={fadeUp}
          className="glass-panel p-8 md:p-24 rounded-none"
        >
          <motion.h3
            variants={staggerItem}
            className="font-headline-xl text-[24px] md:text-headline-xl text-primary mb-6 md:mb-8 border-l-2 md:border-l-4 border-primary pl-4 md:pl-8"
          >
            {data.heading}
          </motion.h3>
          <motion.p
            variants={staggerItem}
            className="font-display-lg text-[22px] md:text-[42px] text-on-surface leading-tight italic"
          >
            "{data.quote}"
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className="mt-10 md:mt-12 flex gap-3 md:gap-4 flex-wrap"
          >
            {data.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={staggerItem}
                className="font-label-mono text-[10px] md:text-label-mono border border-border-subtle px-3 py-1.5 md:px-4 md:py-2 hover:bg-white hover:text-black transition-colors cursor-crosshair"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
