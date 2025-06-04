import AnimatedTitle from "@/components/common/AnimatedTitle";
import { useTranslation } from "react-i18next";


export const ProjectsRightContent = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimatedTitle solidText={t('projects.title')} outlineText={t('projects.title2')} />
    </div>
  );
}; 