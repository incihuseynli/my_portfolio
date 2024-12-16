interface IStatInfo {
  id: string | number;
  stat: number;
  content: string;
}

export type StatInfoType = IStatInfo[];

interface ISkills {
  id: string | number;
  name: string;
  image: string;
}
export type SkillsType = ISkills[];

export interface MarqueeSliderProps {
  drc?: "left" | "right";
  speed?: number;
}
export interface SectionHeadProps {
  sectTitle: string;
  sectSub: string;
}
