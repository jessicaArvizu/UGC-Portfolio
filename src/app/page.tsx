import Header from "@/sections/Header";
import WhoAmI from "@/sections/WhoAmI"
import TikTok from "@/sections/Tiktok";
import Stats from "@/sections/Stats";
import Videos from "@/sections/Videos";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import AboutMe from "@/sections/AboutMe";

export default function Home() {
  return (
    <>
      <Header />
      <WhoAmI />
      <AboutMe />
      <TikTok />
      <Stats />
      <Videos/>
      <Services/>
      <Contact/>
    </>
  );
}
