import Header from "@/sections/Header";
import WhoAmI from "@/sections/WhoAmI"
import TikTok from "@/sections/Tiktok";
import Stats from "@/sections/Stats";
import Videos from "@/sections/Videos";
import Prices from "@/sections/Prices";
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
      <Prices/>
      <Contact/>
    </>
  );
}
