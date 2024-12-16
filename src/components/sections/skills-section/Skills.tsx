"use client";
import SectionHead from "../SectionHead";
import MarqueeSlider from "@/components/sliders/MarqueeSlider";

const Skills = () => {
  return (
    <section id="#about" className="w-full px-0 mt-28">
      <SectionHead sectTitle="My Skills" sectSub="Technologies I've learned and used so far" />
      <div className="flex flex-col gap-4">
        <MarqueeSlider drc="right" speed={40} />
        <MarqueeSlider drc="left" speed={43} />
      </div>
    </section>
  );
};

export default Skills;
