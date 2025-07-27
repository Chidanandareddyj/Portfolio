import Hero from "@/components/Hero";
import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import Skills from "@/components/Skills";

const BLUR_FADE_DELAY = 0.1; // Adjust the delay as needed
const page = () => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto space-y-10">
      <Hero />
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <Skills />
      </div>
    </div>
  );
};

export default page;
