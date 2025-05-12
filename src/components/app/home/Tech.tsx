import { StickyTwoColumnLayout } from "@/components/common/StickyTwoColumnLayout";
import { TechLeftContent } from "./tech/TechLeftContent";
import { TechRightContent } from "./tech/TechRightContent";

export function Tech() {
  return (
    <section className="container mx-auto px-4" id="tech">
      <StickyTwoColumnLayout
        leftContent={<TechLeftContent />}
        rightContent={<TechRightContent />}
        stickySide="left"
      />
    </section>
  );
}
