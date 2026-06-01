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
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-element-gap items-center relative z-10">
        <div className="md:col-span-7 lg:col-span-8 relative">
          <motion.div variants={staggerItem}>
            <SectionLabel>{data.label}</SectionLabel>
          </motion.div>
          <motion.div variants={staggerItem} className="mt-4">
            <CinematicHeading 
              text={data.title} 
              className="!text-[80px] md:!text-[140px] lg:!text-[180px]"
            />
          </motion.div>
          {/* Metadata Block */}
          <motion.div 
            variants={staggerItem}
            className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block font-label-mono text-[10px] text-on-surface-variant/50 tracking-[0.3em] uppercase"
          >
            SYS.OP.01 / ORG
          </motion.div>
        </div>
        
        <div className="md:col-span-5 lg:col-span-4 space-y-8 md:space-y-12">
          <motion.div variants={staggerItem} className="space-y-6">
            <div className="w-12 h-[1px] bg-primary/20" />
            <p className="font-body-lg text-[18px] md:text-[20px] text-on-surface-variant leading-relaxed font-light">
              {data.description}
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerItem}
            className="pt-6 md:pt-8 border-t border-border-subtle group cursor-pointer hover:gap-4 transition-all"
          >
            <span className="font-label-mono text-[11px] md:text-label-mono uppercase tracking-widest flex items-center gap-2">
              {data.cta}
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
