import React from "react";
import { TextAnimate } from "./magicui/text-animate";

const Hero = () => {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-8">
      <div className="gap-2 flex justify-between">
        <div className="flex-col flex flex-1 space-y-1.5">
          <TextAnimate animation="blurIn" as="h1" className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hello I&apos;m Chidnanda Reddy 👋
          </TextAnimate>

        <TextAnimate
          animation="slideRight"
          as="p"
          className="max-w-[600px] md:text-xl"
          >Computer Science student | React & Next.js Developer | Building AI-integrated web apps one project at a time.
        </TextAnimate>
          </div>
      </div>
      </div>
  );
};

export default Hero;
