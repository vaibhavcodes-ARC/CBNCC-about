import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../animations/variants";

export const Footer = () => {
  return (
    <motion.footer
      className="bg-surface-lowest border-t border-border-subtle w-full py-16 md:py-section-gap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-grid-margin flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-element-gap">
        <motion.div variants={staggerItem} className="flex flex-col gap-4 md:gap-6">
          <div className="font-display-lg text-[40px] md:text-display-lg text-on-surface leading-none tracking-tighter">
            CBNCC
          </div>
          <p className="font-label-mono text-[10px] md:text-label-mono text-on-surface-variant max-w-xs md:max-w-sm">
            © 2024 CODE BUSTERS & CODING CLUB. ALL RIGHTS RESERVED.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 sm:flex gap-6 md:gap-8 w-full md:w-auto"
        >
          {[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Terminal", href: "#" },
            { label: "Connect", href: "#" },
          ].map((link) => (
            <motion.a
              key={link.label}
              variants={staggerItem}
              className="font-label-mono text-[11px] md:text-label-mono text-on-surface-variant hover:text-primary transition-all duration-300 underline-offset-4 hover:underline"
              href={link.href}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};
