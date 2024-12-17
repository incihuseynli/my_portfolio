"use client"
import { Button } from "@/components/ui/moving-border";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 *! FIX: LINKS AND BUTTONS AREN"T CLICKABLE
 */
const HeroContext = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section className="pb-12 md:pb-0 grid grid-cols-1 lg:grid-cols-2  place-content-center gap-16 relative z-10">
      {/* Left side */}
      <div className="flex flex-col items-center justify-center lg:justify-normal lg:items-start gap-4  mt-16 md:mt-4">
        <div className="flex flex-col gap-2">
          <h5 className="text-xl md:text-2xl capitalize text-center lg:text-start text-white/80 tracking-wider font-medium">
            Web Developer
          </h5>
          <h1 className=" text-2xl sm:text-4xl md:text-6xl text-center lg:text-start xl:text-7xl font-bold flex md:flex-col gap-4 lg:gap-0">
            Hello, I&apos;m
            <span className="text-[#CBACF9]">Inji Huseynli</span>
          </h1>
        </div>
        <div className="text-center lg:text-start w-4/5 lg:w-full">
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
      <div className="w-full h-full lg:ml-10 lg:mt-5 flex items-center justify-center">
        {/* 3d Image */}

        <Image
          src="/heroImgRounded.png"
          alt="Inci's Photo"
          width={isAboveMediumScreens ? '450' : '600'}
          height={isAboveMediumScreens ? '450' : '600'}
          className="border border-purple-500/40 rounded-md"
        />
      </div>
    </section>
  );
};

export default HeroContext;
