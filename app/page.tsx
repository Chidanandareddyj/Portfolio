import Hero from "@/components/Hero";
import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import Skills from "@/components/Skills";
import Data from "@/Data/data";
import { Badge } from "@/components/ui/badge";
import Work from "@/components/Work";
import BrainSection from "@/components/BrainSection";

const BLUR_FADE_DELAY = 0.1; // Adjust the delay as needed
const page = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Hero />
      <BrainSection />
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold text-center">Skills</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {Data.skills.map((item, index) => (
              <Badge key={item} variant="secondary" className="px-3 py-1 text-sm font-medium transition-all duration-200 hover:scale-105">
                {item}
              </Badge>
            ))}
          </div>
        </BlurFade>
        <Skills />
      </div>
      <Work />
    </div>
  );
};

export default page;
