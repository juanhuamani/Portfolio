import { Hero } from "@/components/app/home/Hero"
import { About } from "@/components/app/home/About";
import { BackgroundGrid } from "@/components/common/background-grid";
import { Tech } from "@/components/app/home/Tech";
import LanguageSwitch from "@/components/common/LanguageSwitch";
import { Parallax } from 'react-scroll-parallax';

export const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0f1d] to-black relative">
      <div className="fixed top-4 right-4 z-50 px-4">
        <LanguageSwitch />
      </div>
      <BackgroundGrid />
      <div className="flex flex-col gap-10">
        <Parallax speed={50}>
          <Hero />
        </Parallax>
        <Parallax speed={50}>
          <About />
        </Parallax>
        <Parallax speed={50}>
          <Tech />
        </Parallax>
      </div>
    </div>
  );
};