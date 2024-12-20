"use client";
import { statInfo } from "@/data/data";
import { useInView } from "@/hooks/useInView";
import React, { useEffect, useState } from "react";
/**
 **All todos done!
 * TODO: Create Stat and add scroll time increse animation
 * TODO: Stats for Number of Projects, Commits,Skills that i know
 */
const Stats = () => {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const [counts, setCounts] = useState<number[]>(statInfo.map(() => 0));
 
  useEffect(() => {
    if (!isInView) return;

    const intervals: NodeJS.Timeout[] = [];
    statInfo.forEach((stat, index) => {
      let count = 0;
      const increment = Math.ceil(stat.stat / 50);
      const interval = setInterval(() => {
        count += increment;
        setCounts((prev) =>
          prev.map((val, i) =>
            i === index && count <= stat.stat ? count : val
          )
        );
        if (count >= stat.stat) clearInterval(interval);
      }, 50);
      intervals.push(interval);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [isInView]);

  return (
    <section 
      ref={ref}
      className="mt-80 lg:mt-0 grid grid-cols-1  lg:grid-cols-3 place-content-center justify-between w-full gap-6 md:gap-0"
    >
      {statInfo.map((stat, index) => (
        <div key={stat.id} className="flex flex-col gap-4 lg:gap-0 items-center mb-20 lg:mb-0">
          <h4 className="text-9xl lg:text-6xl font-bold text-[#CBACF9]">
            {counts[index]}+
          </h4>
          <p className="capitalize font-medium text-3xl sm:text-4xl lg:text-xl tracking-wide">
            {stat.content}
          </p>
        </div>
      ))}
    </section>  
  );
};

export default Stats;
