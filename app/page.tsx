import Consultancy from "@/components/Home/Consultancy";
import Contact from "@/components/Home/Contact";
import Countries from "@/components/Home/Countries";
import CountriesSlider from "@/components/Home/CountriesSlider";
import Hero from "@/components/Home/Hero";
import Info from "@/components/Home/Info";
import Testimonials from "@/components/Home/Testimonials";
import Partners from "@/components/Partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centennial Migration | UAE's top Visa consulting firm",
  description: "Home | CentenniaImmigration",
};

export default function Home() {
  return (
    <div
      className={`w-full transition flex flex-col`}
      style={{
        scrollBehavior: "smooth",
        transitionDuration: "1s",
        // backgroundColor: bgColor,
        // backgroundColor: "#141c5b",
        backgroundColor: "#fff",
      }}
    >
      <div className=" w-full bg-primary-blue">
        <Hero />
        <div className="md:block hidden">
          {/* <CountriesSlider setColor={setBgColor} /> */}
          <CountriesSlider />
        </div>
      </div>

      <Countries />
      <div className=" w-full overflow-hidden">
        <Contact />
      </div>
      <Consultancy />
      <Testimonials />
      <div className="md:px-20 py-10 px-4 overflow-hidden xl:px-40">
        <Partners />
      </div>
      <Info />
    </div>
  );
}
