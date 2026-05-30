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
      className="py-20 md:py-section-gap px-4 md:px-grid-margin relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-5xl mx-auto text-center relative">
        <span className="font-display-xl text-primary/10 text-[100px] md:text-[180px] absolute -top-12 md:-top-24 left-0 md:left-0 select-none pointer-events-none">
          "
        </span>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={currentQuote.id}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={scaleIn}
            className="font-display-lg text-[32px] md:text-[72px] text-primary tracking-tight leading-tight relative z-10 px-4"
          >
            {currentQuote.quote.split("\n").map((line, i) => (
              <div key={i}>
                {i === currentQuote.quote.split("\n").length - 1 ? (
                  <>
                    <span className="text-on-surface-variant font-display-xl italic inline-block transition-transform duration-500 hover:scale-105">
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

        <span className="font-display-xl text-primary/10 text-[100px] md:text-[180px] absolute -bottom-24 md:-bottom-48 right-0 md:right-0 select-none pointer-events-none rotate-180">
          "
        </span>

        <motion.div
          variants={staggerContainer}
          className="mt-12 md:mt-16 flex justify-center items-center gap-4"
        >
          <motion.div
            variants={staggerItem}
            className="w-8 md:w-12 h-[1px] bg-border-subtle"
          />
          <motion.p
            variants={staggerItem}
            className="font-label-mono text-[10px] md:text-label-mono uppercase tracking-[0.15em] md:tracking-[0.2em] text-on-surface-variant"
          >
            {currentQuote.meta}
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="w-8 md:w-12 h-[1px] bg-border-subtle"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
