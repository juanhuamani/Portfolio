import { ProjectsLeftContent } from "./projects/ProjectsLeftContent";
import { ProjectsRightContent } from "./projects/ProjectsRightContent";
import { StickyTwoColumnLayout } from "@/components/common/StickyTwoColumnLayout";

export const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 scroll-mt-20">
      <StickyTwoColumnLayout
        leftContent={<ProjectsLeftContent />}
        rightContent={<ProjectsRightContent />}
      />
    </section>
  );
}; 