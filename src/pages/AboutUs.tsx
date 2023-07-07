import { useEffect } from "react";
import Hero from "../components/AboutUs/Hero";
import OurMission from "../components/AboutUs/OurMission";
import StartProcess from "../components/AboutUs/StartProcess";
import StepsToApply from "../components/AboutUs/StepsToApply";



const AboutPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])

  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <StartProcess />
      <OurMission />
      <StepsToApply />
    </div>
  );
};

export default AboutPage;
