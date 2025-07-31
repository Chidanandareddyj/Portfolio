import React from "react";
import { BlurFade } from "./magicui/blur-fade";
import { CardSpotlight } from "./ui/card-spotlight";
import { BorderBeam } from "./magicui/border-beam";

const Work = () => {
  return (
    <div className="my-10">
      <BlurFade delay={0.4 * 9}>
        <h2 className="text-xl font-bold mb-6">Work Experience</h2>
      </BlurFade>
      <BlurFade className="mb-6">
      <CardSpotlight className="p-6" radioGroup="work" radius={300}>
        <p className="text-xl font-bold relative z-20 text-white">
          Website Development Intern
        </p>
        <p className="text-md text-white/80 relative z-20">
          VIT-AP University — Official Website Team
        </p>
        <p className="text-neutral-300 text-sm relative z-20 mt-1">
          Amaravati, Andhra Pradesh 
        </p>
        
        <div className="text-neutral-200 mt-6 relative z-20">
          <p className="mb-4">
            Contributing to the development and maintenance of the university&apos;s primary web platform using Next.js, 
            Strapi CMS, and AWS services.
          </p>
          
        </div>
        
        <p className="text-neutral-300 mt-6 relative z-20 text-sm font-medium">
          Tech Stack: Next.js, React.js, Tailwind CSS, Strapi CMS, AWS
        </p>
        <p className="text-neutral-400 mt-1 relative z-20 text-xs">
          <a href="https://github.com/VIT-AP/VITAP-Website" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
            github.com/VIT-AP/VITAP-Website
          </a>
        </p>
        <BorderBeam duration={15} size={200}/>
      </CardSpotlight>
      </BlurFade>
    </div>
  );
};

export default Work;
