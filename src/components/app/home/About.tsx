import { StickyTwoColumnLayout } from "@/components/common/StickyTwoColumnLayout";
import { AboutLeftContent } from "./about/AboutLeftContent";
import { AboutRightContent } from "./about/AboutRightContent";

export function About() {
  return (
    <section className="container mx-auto px-4" id="about">
      <StickyTwoColumnLayout
        leftContent={<AboutLeftContent />}
        rightContent={<AboutRightContent />}
      />
    </section>
  );
}
