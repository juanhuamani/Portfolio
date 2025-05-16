import type React from "react"

import { useTranslation } from "react-i18next"
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons"
import { motion, useAnimationControls, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export const Hero = () => {
  const { t } = useTranslation()
  const [roleIndex, setRoleIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const nameControls = useAnimationControls()

  // Mouse position tracking for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Transform mouse position to rotation values
  const rotateX = useTransform(springY, [-300, 300], [10, -10])
  const rotateY = useTransform(springX, [-300, 300], [-10, 10])

  // Handle mouse move for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2)
      mouseY.set(e.clientY - rect.top - rect.height / 2)
    }
  }

  // Array of roles that will cycle
  const roles = [t("hero.role1"), t("hero.role2"), t("hero.role3"), t("hero.role4")]

  // Effect to cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [roles.length])

  // Glitch animation effect for the name
  useEffect(() => {
    const glitchSequence = async () => {
      while (true) {
        // Normal state
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000 + 3000))

        // Glitch sequence
        await nameControls.start({
          x: [0, -2, 3, -1, 0],
          y: [0, 1, -1, 2, 0],
          filter: [
            "none",
            "drop-shadow(2px 0 #ff00ea) drop-shadow(-2px 0 #00ffff)",
            "drop-shadow(-2px 0 #ff00ea) drop-shadow(2px 0 #00ffff)",
            "drop-shadow(0 0 #ff00ea) drop-shadow(0 0 #00ffff)",
            "none",
          ],
          transition: { duration: 0.5 },
        })
      }
    }

    glitchSequence()
  }, [nameControls])

  const socialLinks = [
    {
      icon: <SiGithub className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://github.com/juanhuamani",
      label: "GitHub",
    },
    {
      icon: <SiGmail className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "mailto:juan.huamani.dev@gmail.com",
      label: "Email",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const roleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  // Split name into individual characters for animation
  const nameText = t("hero.name")
  const nameChars = nameText.split("")

  return (
    <section
      className="w-full overflow-hidden relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >

      <motion.div
        className="text-center space-y-4 sm:space-y-6 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="space-y-2" variants={itemVariants}>
          <motion.div className="h-6 sm:h-7 overflow-hidden relative" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <motion.p
              key={roleIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={roleVariants}
              className="text-blue-400/80 text-xs sm:text-sm tracking-[0.5em] uppercase font-light absolute w-full"
            >
              {roles[roleIndex]}
            </motion.p>
          </motion.div>

          {/* Futuristic 3D name with interactive rotation and per-character animation */}
          <motion.div
            className="perspective-[1200px] py-6 sm:py-8 relative"
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
          >
            {/* Glow effect behind name */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[50px] rounded-full"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(0,0,0,0) 70%)",
                  "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(0,0,0,0) 70%)",
                  "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(0,0,0,0) 70%)",
                ],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div className="flex justify-center overflow-hidden" animate={nameControls}>
              {nameChars.map((char, index) => (
                <motion.span
                  key={index}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold inline-block"
                  style={{
                    textShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    color: char === " " ? "transparent" : undefined,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + index * 0.04,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: "#60a5fa",
                    transition: { duration: 0.2 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}

                  {/* Animated gradient background for each character */}
                  <motion.div
                    className="absolute inset-0 -z-10 opacity-80"
                    style={{
                      background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    animate={{
                      backgroundPosition: ["0% center", "200% center"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </motion.span>
              ))}
            </motion.div>

            {/* Animated line under the name */}
            <motion.div
              className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2 sm:mt-3 mx-auto"
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-6 sm:pt-8"
          variants={itemVariants}
        >
          <motion.button
            className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-blue-500/20 blur-md"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              animate={{ x: ["0%", "200%"] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            />

            <span className="relative z-10">{t("hero.cta.projects")}</span>
          </motion.button>

          <motion.button
            className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent text-gray-300 rounded-full border border-gray-500/20 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button hover effect */}
            <motion.div
              className="absolute inset-0 bg-white/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <span className="relative z-10">{t("hero.cta.contact")}</span>
          </motion.button>
        </motion.div>

        <motion.div className="flex justify-center gap-4 sm:gap-6 pt-6 sm:pt-8" variants={itemVariants}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 relative"
              aria-label={link.label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.8 + index * 0.1,
                  duration: 0.5,
                },
              }}
            >
              {/* Icon glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-blue-500/30 rounded-full blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />

              <motion.div className="relative z-10">{link.icon}</motion.div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-500/30 rounded-full flex justify-center relative overflow-hidden"
          animate={{ y: [0, 5, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          {/* Scroll indicator glow */}
          <motion.div
            className="absolute inset-0 bg-blue-500/10 blur-sm"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="w-1 h-2 sm:h-3 bg-blue-500/50 rounded-full mt-2"
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [0, 5, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
