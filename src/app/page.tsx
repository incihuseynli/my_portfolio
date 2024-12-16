import Contact from "@/components/sections/contact-section/Contact";
import Hero from "@/components/sections/hero-section/Hero";
import Projects from "@/components/sections/projects-section/Projects";
import Skills from "@/components/sections/skills-section/Skills";
import Stats from "@/components/sections/stats-section/Stats";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Stats />
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </>
  );
}
