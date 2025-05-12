import { TimelineSection } from "@/components/ui/TimelineSection";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Card, CardContent } from "@/components/ui/Card";
import { useTranslation } from "react-i18next";

export function AboutLeftContent() {
  const { t } = useTranslation();
  return (
    <Card className="p-6">
      <CardContent>
        <div className="text-center gap-2 mb-10">
          <p>{t('about.greeting')}</p>
          <p>{t('about.description')}</p>
        </div>

        <div className="flex flex-col gap-2">
          <TimelineSection title={t('about.experience.title')}>
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
          </TimelineSection>
          <TimelineSection title={t('about.education.title')}>
            <TimelineItem
              title={t('about.education.1.title')}
              subtitle={t('about.education.1.subtitle')}
            ></TimelineItem>
          </TimelineSection>
        </div>
      </CardContent>
    </Card>
  );
}
