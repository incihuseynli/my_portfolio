import { skills } from '@/data/data'
import { MarqueeSliderProps } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeSlider = ({drc,speed}:MarqueeSliderProps) => {
  return (
    <Marquee direction={drc} speed={speed} gradient={false}>
    {
      skills.map((skill) => (
        <div
        key={skill.id}
        className="mt-8 flex items-center justify-center"
      >
        <Image
          src={skill.image}
          alt={skill.name}
          width={120}
          height={120}
          className="object-contain"
        />
        </div>
      ))}
  </Marquee>
  )
}

export default MarqueeSlider