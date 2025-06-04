import { ProjectsLeftContent } from "./projects/ProjectsLeftContent";
import { ProjectsRightContent } from "./projects/ProjectsRightContent";
import { StickyTwoColumnLayout } from "@/components/common/StickyTwoColumnLayout";

export const Projects = () => {
  return (
    <section className="container mx-auto px-4" id="projects">
      <StickyTwoColumnLayout
        leftContent={<ProjectsLeftContent />}
        rightContent={<ProjectsRightContent />}
      />
    </section>
  );
}; 