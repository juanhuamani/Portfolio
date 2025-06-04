import { TimelineSection } from "@/components/ui/TimelineSection";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Card, CardContent } from "@/components/ui/Card";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function AboutLeftContent() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Card className="p-6">
        <CardContent>
          <motion.div 
            className="text-center gap-2 mb-10"
            variants={itemVariants}
          >
            <p>{t('about.greeting')}</p>
            <p>{t('about.description')}</p>
          </motion.div>

          <div className="flex flex-col gap-2">
            <TimelineSection title={t('about.experience.title')}>
              <motion.div variants={itemVariants}>
                <TimelineItem
                  title={t('about.experience.1.title')}
                  subtitle={t('about.experience.1.subtitle')}
                >
                  <ul className="list-disc pl-5 space-y-2.5 text-sm">
                    <li className="text-gray-300">
                      {t('about.experience.1.description.1')}
                    </li>
                    <li className="text-gray-300">
                      {t('about.experience.1.description.2')}
                    </li>
                    <li className="text-gray-300">
                      {t('about.experience.1.description.3')}
                    </li>
                  </ul>
                </TimelineItem>
              </motion.div>

              <motion.div variants={itemVariants}>
                <TimelineItem
                  title={t('about.experience.2.title')}
                  subtitle={t('about.experience.2.subtitle')}
                >
                  <ul className="list-disc pl-5 space-y-2.5 text-sm">
                    <li className="text-gray-300">
                      {t('about.experience.2.description.1')}
                    </li>
                    <li className="text-gray-300">
                      {t('about.experience.2.description.2')}
                    </li>
                  </ul>
                </TimelineItem>
              </motion.div>
            </TimelineSection>

            <TimelineSection title={t('about.education.title')}>
              <motion.div variants={itemVariants}>
                <TimelineItem
                  title={t('about.education.1.title')}
                  subtitle={t('about.education.1.subtitle')}
                ></TimelineItem>
              </motion.div>
            </TimelineSection>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
