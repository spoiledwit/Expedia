import Hero from "@/components/AboutUs/Hero";
import OurMission from "@/components/AboutUs/OurMission";
import StartProcess from "@/components/AboutUs/StartProcess";
import StepsToApply from "@/components/AboutUs/StepsToApply";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CentenniaImmigration",
  description: "About Us | CentenniaImmigration",
};

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StartProcess />
      <OurMission />
      <StepsToApply />
    </div>
  );
}
