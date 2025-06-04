import { Card, CardContent } from "@/components/ui/Card";
import { Tooltip } from "@/components/ui/Tooltip";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiLaravel,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiDjango,
} from "@icons-pack/react-simple-icons";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function TechRightContent() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stacks = [
    {
      title: t('tech.stacks.core'),
      items: [
        { icon: SiReact, name: "React", color: "#61DAFB" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
        { icon: SiNodedotjs, name: "Node.js", color: "#3C873A" },
        { icon: SiDjango, name: "Django", color: "#092E20" },
      ],
    },
    {
      title: t('tech.stacks.ui'),
      items: [
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
        { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      ],
    },
    {
      title: t('tech.stacks.databases'),
      items: [
        { icon: SiMysql, name: "MySQL", color: "#00758F" },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      ],
    },
  ];
  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center justify-center h-full"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Card>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-full gap-10 py-2">
            {stacks.map((section) => (
              <motion.div
                key={section.title}
                className="flex flex-col items-center w-full"
                variants={itemVariants}
              >
                <h2 className="text-sm md:text-lg italic mb-4">
                  {section.title}
                </h2>
                <div className="flex flex-row flex-wrap gap-6 justify-center">
                  {section.items.map(({ icon: Icon, name, color }) => (
                    <Tooltip key={name} content={name} position="top">
                      <motion.span
                        className="p-3 rounded-xl shadow-lg transition-all duration-300 bg-black/40 border border-white/10 hover:scale-110"
                        style={{
                          boxShadow: `0 0 16px 2px ${color}99, 0 0 32px 4px ${color}33`,
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={38} color={color} />
                      </motion.span>
                    </Tooltip>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
