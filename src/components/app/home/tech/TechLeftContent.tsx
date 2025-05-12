import AnimatedTitle from "@/components/common/AnimatedTitle";
import { useTranslation } from "react-i18next";

export function TechLeftContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimatedTitle solidText={t('tech.title')} outlineText={t('tech.title2')} />
    </div>
  );
}
