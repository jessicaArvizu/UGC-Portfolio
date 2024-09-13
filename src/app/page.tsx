"use client"
import Header from "@/sections/Header";
import Intro from "@/sections/Intro"
import TikTok from "@/sections/Tiktok";
import Stats from "@/sections/Stats";
import Videos from "@/sections/Videos";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import AboutMe from "@/sections/AboutMe";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Header />
      <Intro />
      <AboutMe />
      <TikTok />
      <Stats />
      <Videos />
      <Services />
      <Contact />
    </>
  );
}
