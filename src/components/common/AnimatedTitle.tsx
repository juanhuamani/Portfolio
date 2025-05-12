import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function AnimatedTitle({
  solidText,
  outlineText,
}: {
  solidText: string;
  outlineText: string;
}) {
  return (
    <Parallax translateY={[-20, 20]}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative inline-block"
      >
        <span className="text-white text-7xl italic font-extrabold tracking-tight">
          {solidText}
        </span>

        <span className="absolute text-transparent italic stroke-text text-8xl font-extrabold tracking-tight left-20 top-6">
          {outlineText}
        </span>
      </motion.div>
    </Parallax>
  );
}
