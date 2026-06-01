import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scaleIn, staggerContainer, staggerItem } from "../../animations/variants";

export const QuoteSection = ({ quotes, interval = 6000 }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % quotes.length);
    }, interval);

    return () => clearInterval(timer);
  }, [quotes.length, interval]);

  const currentQuote = quotes[idx];

  return (
    <motion.section
      className="py-24 md:py-[180px] px-4 md:px-grid-margin relative overflow-hidden bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-[1200px] mx-auto text-center relative">
        <span className="font-display-xl text-primary/5 text-[150px] md:text-[300px] absolute -top-20 md:-top-32 left-0 select-none pointer-events-none leading-none">
          "
        </span>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={currentQuote.id}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={scaleIn}
            className="font-display-xl text-[48px] md:text-[110px] lg:text-[130px] text-primary tracking-tight leading-[1.1] relative z-10 px-4 py-12"
          >
            {currentQuote.quote.split("\n").map((line, i) => (
              <div key={i} className="my-2 md:my-4">
                {i === currentQuote.quote.split("\n").length - 1 ? (
                  <>
                    <span className="text-on-surface-variant font-display-xl italic inline-block transition-transform duration-700 hover:scale-[1.02]">
                      {line}
                    </span>
                  </>
                ) : (
                  line
                )}
              </div>
            ))}
          </motion.blockquote>
        </AnimatePresence>

        <span className="font-display-xl text-primary/5 text-[150px] md:text-[300px] absolute -bottom-24 md:-bottom-40 right-0 select-none pointer-events-none rotate-180 leading-none">
          "
        </span>

        <motion.div
          variants={staggerContainer}
          className="mt-20 md:mt-32 flex justify-center items-center gap-6"
        >
          <motion.div
            variants={staggerItem}
            className="w-12 md:w-24 h-[1px] bg-primary/20"
          />
          <motion.p
            variants={staggerItem}
            className="font-label-mono text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-on-surface-variant font-medium"
          >
            {currentQuote.meta}
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="w-12 md:w-24 h-[1px] bg-primary/20"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
