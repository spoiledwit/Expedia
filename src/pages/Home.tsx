import Hero from "../components/Home/Hero";
import Contact from "../components/Home/Contact";
import Consultancy from "../components/Home/Consultancy";
import Testimonials from "../components/Home/Testimonials";
import Countries from "../components/Home/Countries";
import Partners from "../components/Partners";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import StepsToApply from "../components/AboutUs/StepsToApply";
import Info from "../components/Home/Info";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [bgColor, setBgColor] = useState("bg-sky-700");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setBgColor("bg-white");
      } else {
        setBgColor("bg-sky-700");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bgColor]);

  return (
    <div className={`w-full overflow-hidden ${bgColor} transition flex flex-col`}
      style={{ scrollBehavior: "smooth", transitionDuration: "1s" }}
    >
      <Helmet>
        <title>Centennial Migration | UAE's top Visa consulting firm</title>
        <meta name="description" content="Home | CentenniaImmigration" />
      </Helmet>
      <Hero />
      <Countries />
      <Contact />
      <StepsToApply />
      <Consultancy />
      <Testimonials />
      <div className="md:px-20 py-10 px-4 xl:px-40">
        <Partners />
      </div>
      <Info />
    </div>
  );
};

export default Home;
