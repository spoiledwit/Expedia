import Hero from "@/components/AboutUs/Hero";
import OurMission from "@/components/AboutUs/OurMission";
import StartProcess from "@/components/AboutUs/StartProcess";
import StepsToApply from "@/components/AboutUs/StepsToApply";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Us | Centennial Migration",
  description:
    "Centennial Migration are among the best visa consultancies in UAE, and India, with affordable prices, high success rates, and hassle-free immigration services.",
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
