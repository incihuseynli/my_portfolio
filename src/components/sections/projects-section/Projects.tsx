import React from "react";
import SectionHead from "../SectionHead";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="#projects">
      <SectionHead
        sectTitle="My Projects"
        sectSub="Projects I have worked on"
      />
      <ProjectCard />
    </section>
  );
};

export default Projects;
