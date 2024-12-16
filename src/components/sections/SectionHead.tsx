import { SectionHeadProps } from "@/types/types";
import React from "react";

const SectionHead = ({ sectTitle, sectSub }: SectionHeadProps) => {
  return (
    <div className="py-4 flex flex-col items-center justify-center text-center">
      <h4 className="text-5xl font-bold capitalize bg-gradient-to-r from-white to-[#7451a7] text-transparent bg-clip-text ">
        {sectTitle}
      </h4>
      <span className="text-base w-full md:w-1/2 mt-4 text-white/70 ">{sectSub}</span>
    </div>
  );
};

export default SectionHead;
