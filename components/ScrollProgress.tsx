 "use client";
import { motion, useScroll } from "framer-motion";
export function ScrollProgress() {
 const { scrollYProgress } = useScroll();
 return <motion.div className="scroll-progress fixed left-0 top-0 z-[100] h-[3px] origin-left bg-[#c9a24a]" style={{scaleX:scrollYProgress, width:"100%"}} />;
}
