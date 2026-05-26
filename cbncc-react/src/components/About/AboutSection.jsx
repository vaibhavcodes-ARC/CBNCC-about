import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../animations/variants";
import { SectionLabel, CinematicHeading } from "../UI";

export const AboutSection = ({ data }) => {
  return (
    <motion.section
      className="px-4 md:px-grid-margin py-20 md:py-section-gap relative overflow-hidden"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-element-gap items-start">
        <div className="md:col-span-8">
          <motion.div variants={staggerItem}>
            <SectionLabel>{data.label}</SectionLabel>
          </motion.div>
          <motion.div variants={staggerItem}>
            <CinematicHeading text={data.title} />
          </motion.div>
        </div>
        <div className="md:col-span-4 md:mt-24 space-y-6 md:space-y-8">
          <motion.p
            variants={staggerItem}
            className="font-body-lg text-[16px] md:text-body-lg text-on-surface-variant leading-relaxed"
          >
            {data.description}
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="pt-6 md:pt-8 border-t border-border-subtle group cursor-pointer hover:gap-4 transition-all"
          >
            <span className="font-label-mono text-[11px] md:text-label-mono uppercase tracking-widest flex items-center gap-2">
              {data.cta}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
