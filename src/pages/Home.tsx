import Hero from "../components/Home/Hero";
import Contact from "../components/Home/Contact";
import Consultancy from "../components/Home/Consultancy";
import About from "../components/Home/About";
import Faq from "../components/Home/FAQ";
import Testimonials from "../components/Home/Testimonials";
import Countries from "../components/Home/Countries";
import Partners from "../components/Partners";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col md:gap-20 gap-10 mb-40 ">
      <Helmet>
        <title>CentenniaImmigration | UAE's top Visa consulting firm</title>
        <meta name="description" content="Home | CentenniaImmigration" />
      </Helmet>
      <Hero />
      <Contact />
      <Countries />
      <About />
      <div className=" md:block hidden">
        <Consultancy />
      </div>
      <Faq />
      <div className="md:px-20 px-4 xl:px-40">
        <Partners />
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
