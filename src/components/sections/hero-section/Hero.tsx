import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import HeroContext from "./HeroContext";

const Hero = () => {
  return (
    <>
      <div className="h-[30rem] md:h-[35rem] relative -top-16 -z-10 w-full rounded-md bg-neutral-950 flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4" />
        <BackgroundBeams />
        {/* Context */}
        <div className="mt-[400px] lg:mt-0 flex items-center justify-center h-screen w-full relative z-10">
          <HeroContext />
        </div>
      </div>
    </>
  );
};

export default Hero;
