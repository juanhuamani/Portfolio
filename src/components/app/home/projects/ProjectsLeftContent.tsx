import { Card, CardContent } from "@/components/ui/Card"
import { motion } from "motion/react"
import { useInView } from "framer-motion"
import { useRef } from "react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Globe } from 'lucide-react'
import { useTranslation } from "react-i18next";

import ModaShop from "@/assets/images/moda_shop-preview.png";
import Portfolio from "@/assets/images/portfolio-preview.png";
import Socimep from "@/assets/images/socimep-preview.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  deployUrl?: string;
}

const projectImages = {
  moda_shop: ModaShop,
  socimep: Socimep,
  portfolio: Portfolio
};

const projectLinks = {
  moda_shop: {
    githubUrl: "https://github.com/juanhuamani/Moda_Shop-Django_React"
  },
  socimep: {
    deployUrl: "https://www.socimep.org"
  },
  portfolio: {
    githubUrl: "https://github.com/juanhuamani/portfolio"
  }
};

export const ProjectsLeftContent = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = Object.entries(t('projects.items', { returnObjects: true })).map(([key, project]: [string, Project]) => ({
    ...project,
    image: projectImages[key as keyof typeof projectImages],
    ...projectLinks[key as keyof typeof projectLinks]
  }));

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Card className="p-6">
        <CardContent>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 }}
                className="relative group h-[400px] overflow-hidden rounded-lg"
              >
                {/* Imagen de fondo con efectos */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradiente más oscuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Contenido sobre la imagen */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                      <motion.a
                        href={project.githubUrl || project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 text-white hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {project.githubUrl ? <SiGithub size={28} /> : <Globe size={28} />}
                      </motion.a>
                    </div>
                    
                    <p className="text-gray-200 text-lg leading-relaxed max-w-2xl drop-shadow-md">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Efecto de borde */}
                <div className="absolute inset-0 border border-blue-500/20 rounded-lg group-hover:border-blue-500/40 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}; 