import React from "react";
import { BlurFade } from "./magicui/blur-fade";
import { CardSpotlight } from "./ui/card-spotlight";
import { BorderBeam } from "./magicui/border-beam";

const Projects = () => {
  return (
    <div className="my-10">
      <BlurFade delay={0.5 * 9}>
        <h2 className="text-xl font-bold mb-6">PROJECT EXPERIENCE</h2>
      </BlurFade>
      <div className="flex flex-col gap-6">
        <BlurFade delay={0.5 * 10}>
          <CardSpotlight className="p-6" radioGroup="projects" radius={300}>
            <p className="text-xl font-bold relative z-20 text-white">
              Byte-Learn (Hackathon)
            </p>
            <p className="text-md text-white/80 relative z-20">
              AI-Powered Educational Platform
            </p>
            <p className="text-neutral-300 text-sm relative z-20 mt-1">
              Jun 2025 - Present
            </p>

            <div className="text-neutral-200 mt-6 relative z-20">
              <p className="mb-4">
                Designed and implemented an AI-powered platform that generates
                byte-sized educational videos from a single user prompt. Built
                the frontend using Next.js and Tailwind CSS, ensuring a clean
                and responsive UI. Integrated advanced TTS and script-generation
                pipelines to automate narration and animation processes,
                resulting in a 75% reduction in manual editing efforts and
                supporting visual learning through Primary Indian Languages.
              </p>
              <p className="text-neutral-300 mt-6 relative z-20 text-sm font-medium">
                Tech Stack: Next.js, React.js, Tailwind CSS, Supabase , Google Gemini, Google TTS
              </p>
              <p className="text-neutral-400 mt-1 relative z-20 text-xs">
                <a
                  href="https://github.com/Chidanandareddyj/Byte_Learn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors"
                >
                  https://github.com/Chidanandareddyj/Byte_Learn
                </a>
              </p>
            </div>
            <BorderBeam duration={15} size={200} />
          </CardSpotlight>
        </BlurFade>
        <BlurFade delay={0.5 * 11}>
          <CardSpotlight className="p-6" radioGroup="projects" radius={300}>
            <p className="text-xl font-bold relative z-20 text-white">
              Kanva-Avatar (Sripto Tech)
            </p>
            <p className="text-md text-white/80 relative z-20">
              3D Avatar Chatbot Platform
            </p>
            <p className="text-neutral-300 text-sm relative z-20 mt-1">
              May 2025 - Present
            </p>

            <div className="text-neutral-200 mt-6 relative z-20">
              <p className="mb-4">
                Engineered a comprehensive full-stack web application with
                Next.js, enabling the creation, customization, and deployment of
                over 150 interactive 3D avatar chatbots, increasing deployment
                efficiency by 40% and supporting scalable user engagement across
                multiple client projects.
              </p>
              <p>
                Designed and integrated a modular API management system using
                Flask that connected chatbots to more than 20 external data
                sources and custom datasets; this enhanced conversational
                customization options by 60%, facilitating personalized user
                experiences across diverse industries.
              </p>
              <p className="text-neutral-300 mt-6 relative z-20 text-sm font-medium">
                Tech Stack: Next.js, React.js, Tailwind CSS, Flask
              </p>
              
            </div>
            <BorderBeam duration={15} size={200} />
          </CardSpotlight>
        </BlurFade>
      </div>
    </div>
  );
};

export default Projects;
