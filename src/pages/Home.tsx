import Hero from "../components/Home/Hero";
import Contact from "../components/Home/Contact";
import Consultancy from "../components/Home/Consultancy";
import Testimonials from "../components/Home/Testimonials";
import Countries from "../components/Home/Countries";
import Partners from "../components/Partners";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Info from "../components/Home/Info";
import CountriesSlider from "../components/Home/CountriesSlider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [bgColor, setBgColor] = useState("#0369a1");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 250) { 
        setBgColor("#0369a1");
      }
      else if (window.innerWidth < 768) {
        setBgColor("#FFFFFF");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bgColor]);

  return (
    <div className={`w-full transition flex flex-col`}
      style={{ scrollBehavior: "smooth", transitionDuration: "1s", backgroundColor: bgColor }}
    >
      <Helmet>
        <title>Centennial Migration | UAE's top Visa consulting firm</title>
        <meta name="description" content="Home | CentenniaImmigration" />
      </Helmet>
      <Hero />
      <div className="md:block hidden">
      <CountriesSlider setColor={setBgColor}/>
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
};

export default Home;
