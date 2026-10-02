 "use client";
import { motion, useReducedMotion } from "framer-motion";

export function RevealText({ children, className = "" }: { children: string; className?: string }) {
  const reduced = useReducedMotion();
  const words = children.split(" ");
  return (
    <span className={className} aria-label={children}>
      {words.map((word, i) => reduced ? <span key={i}>{word} </span> :
        <motion.span key={i} aria-hidden="true" className="inline-block mr-[0.28em]"
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: .7 }} transition={{ duration: .45, delay: i * .035, ease: "easeOut" }}>
          {word}
        </motion.span>
      )}
    </span>
  );
}
