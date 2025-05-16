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
    <Parallax translateY={[-20, 20]} className="max-md:translate-y-[-10,10] w-full flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className=" inline-block"
      >
          <span className="text-white text-4xl md:text-5xl lg:text-7xl italic font-extrabold tracking-tight">
            {solidText}
          </span>

          <span className="absolute text-transparent italic stroke-text 
            text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight
            left-1/2 -translate-x-1/2 top-4 md:top-4 lg:top-6">
            {outlineText}
          </span>
      </motion.div>
    </Parallax>
  );
}