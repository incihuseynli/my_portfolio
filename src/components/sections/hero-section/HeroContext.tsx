import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 *! FIX: LINKS AND BUTTONS AREN"T CLICKABLE
 */
const HeroContext = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2  place-content-center gap-12 relative z-10">
      {/* Left side */}
      <div className="flex flex-col items-start gap-4  mt-16 md:mt-4">
        <div className="flex flex-col gap-2">
          <h5 className="text-xl md:text-2xl capitalize text-white/80 tracking-wider font-medium">
            Web Developer
          </h5>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold flex flex-col">
            Hello, I&apos;m
            <span className="text-[#CBACF9]">Inci Huseynli</span>
          </h1>
        </div>
        <div>
          <p className="text-sm text-white/70 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quod
            ipsam voluptate, dicta eaque doloribus eum sint modi minima aperiam,
            quasi quaerat praesentium impedit deserunt officiis sed nulla quae
            quibusdam? Fuga dicta et laudantium magni.
          </p>
        </div>
        {/* Buttons */}

        <div className="flex items-center gap-4">
          {/* Button DL */}
          {/* TODO: For button add shadcn button of Outline 
            or Moving Border from aceternity
          */}

          <Button
            borderRadius="1.75rem"
            className="bg-transparent cursor-pointer text-[#CBACF9] dark:border-[#CBACF9]"
          >
            Download CV
          </Button>
          {/* Socials */}

          <Link href={"/github-profile"} className="cursor-pointer z-20">
            <Image
              src="/githubIcon.svg"
              alt="Github Profile"
              width={28}
              height={28}
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/linkedinIcon.svg"
              alt="Github Profile"
              width={34}
              height={34}
            />
          </Link>
        </div>
      </div>
      {/* Right side */}
      <div className="w-full h-full">
        {/* 3d Image */}

        {/* <Image src="/portfolioImg.png" alt="Inci's Photo" width={450} height={450} /> */}
      </div>
    </section>
  );
};

export default HeroContext;
