import Header from "@/sections/Header";
import AboutMe from "@/sections/AboutMe"
import Mission from "@/sections/Mission";
import TikTok from "@/sections/Tiktok";
import Stats from "@/sections/Stats";
import Videos from "@/sections/Videos";
import Prices from "@/sections/Prices";
import Contact from "@/sections/Contact";


export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Mission />
      <TikTok />
      <Stats />
      <Videos/>
      <Prices/>
      <Contact/>
    </>
  );
}
