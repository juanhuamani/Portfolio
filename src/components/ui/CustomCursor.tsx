import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Cursor principal
  const springConfig = { damping: 20, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Rastros del cursor
  const trail1X = useSpring(cursorX, { ...springConfig, damping: 25 });
  const trail1Y = useSpring(cursorY, { ...springConfig, damping: 25 });
  const trail2X = useSpring(cursorX, { ...springConfig, damping: 30 });
  const trail2Y = useSpring(cursorY, { ...springConfig, damping: 30 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Rastros del cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: trail2X,
          y: trail2Y,
        }}
      >
        <div className="w-12 h-12 rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: trail1X,
          y: trail1Y,
        }}
      >
        <div className="w-8 h-8 rounded-full border border-white/20 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Cursor principal */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
        <motion.div
          className="absolute inset-0 rounded-full border border-white/30 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
} 