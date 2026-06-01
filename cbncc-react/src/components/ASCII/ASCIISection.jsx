import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";
import { ASCIIVisualizer } from "./ASCIIVisualizer";

const asciiLines = [
  ":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",
  "::::  CCCCC ::: BBBBB  ::: NN   NN :::  CCCCC :::  CCCCC  :::::::::::::",
  ":::  CC    C :: BB   B  :: NNN  NN ::: CC    C :: CC    C  ::::::::::::",
  ":::  CC      :: BBBBB   :: NN N NN ::: CC      :: CC       ::::::::::::",
  ":::  CC    C :: BB   B  :: NN  NNN ::: CC    C :: CC    C  ::::::::::::",
  "::::  CCCCC ::: BBBBB  ::: NN   NN :::  CCCCC :::  CCCCC  :::::::::::::",
  ":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
];

export const ASCIISection = () => {
  return (
    <motion.section
      className="relative py-12 md:py-section-gap overflow-hidden flex flex-col items-center justify-center min-h-[300px] md:min-h-auto"
      id="ascii-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <ASCIIVisualizer
        lines={asciiLines}
        symbolPalette={["C", "B", "N", "1", "0", "/", ">", ":"]}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
    </motion.section>
  );
};
