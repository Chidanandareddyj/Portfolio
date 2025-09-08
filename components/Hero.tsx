import React from "react";
import { TextAnimate } from "./magicui/text-animate";
import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
  return (
    <WavyBackground>

    
    <div className="relative overflow-hidden h-[360px] sm:h-[500px] w-full">
      <div className="relative z-10 mx-auto w-full max-w-2xl space-y-6 sm:space-y-8 h-full flex flex-col justify-center px-4">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <TextAnimate
              animation="blurIn"
              as="h1"
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            >
              Hello I&apos;m Chidananda Reddy 👋
            </TextAnimate>

            <TextAnimate
              animation="slideRight"
              as="p"
              className="max-w-[600px] md:text-xl"
            >
              Computer Science student | React & Next.js Developer | Building
              AI-integrated web apps one project at a time.
            </TextAnimate>
          </div>
        </div>
      </div>
    </div>
    </WavyBackground>
  );
};

export default Hero;