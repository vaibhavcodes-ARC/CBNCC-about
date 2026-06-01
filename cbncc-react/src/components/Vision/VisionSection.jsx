import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../animations/variants";
import { useParallax } from "../../hooks/useParallax";

export const VisionSection = ({ data }) => {
  const panelRef = useParallax(0.2);

  return (
    <motion.section
      className="relative py-20 md:py-section-gap overflow-hidden bg-surface-bright"
      id="vision"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-grid-margin">
        <motion.div
          ref={panelRef}
          variants={fadeUp}
          className="border-t border-border-subtle pt-12 md:pt-16 pb-16 md:pb-24"
        >
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
              <motion.h2
                variants={staggerItem}
                className="font-display-lg text-[40px] md:text-[72px] text-primary leading-tight mb-8"
              >
                Code. Create. <br /> Collaborate.
              </motion.h2>
              
              <motion.p
                variants={staggerItem}
                className="font-body-lg text-[18px] md:text-[24px] text-on-surface-variant leading-relaxed font-light italic border-l border-primary pl-6 py-2"
              >
                "{data.quote}"
              </motion.p>
              
              <motion.div
                variants={staggerContainer}
                className="mt-12 md:mt-16 flex gap-3 md:gap-4 flex-wrap pt-8 border-t border-border-subtle/50"
              >
                {data.tags && data.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={staggerItem}
                    className="font-label-mono text-[10px] md:text-[11px] tracking-wider text-on-surface-variant px-4 py-2 border border-border-subtle hover:bg-primary hover:text-white transition-colors cursor-crosshair uppercase"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
