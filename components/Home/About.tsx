import Image from "next/image";
import consultants from "../../assets/consultants.jpg";
import Link from "next/link";
import Motion from "../Motion";
import AnimateToView from "../AnimateToView";
import { BsChevronCompactDown } from "react-icons/bs";

const About = () => {
  return (
    <AnimateToView
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
      }}
      transition={{ duration: 1 }}
      className="w-full md:px-40 px-8 md:p-4 flex flex-col lg:flex-row-reverse items-center lg:gap-20 xl:gap-40 gap-12"
    >
      <Motion
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.95 },
        }}
        transition={{ duration: 1 }}
      >
        <section className="w-full lg:w-[60%] flex flex-col items-center md:items-start gap-8 md:gap-12">
          <h3 className="md:block hidden self-start text-lg text-primary-gold uppercase tracking-wide">
            WHO WE ARE
          </h3>
          <div className=" w-full gap-4 flex flex-col items-center">
            <h2 className="capitalize text-2xl md:text-4xl text-center lg:text-start w-full font-medium text-primary-blue tracking-wide">
              not just a traditional visa & immigration firm
            </h2>
            <p className=" text-gray-700 text-sm tracking-wide text-center lg:text-justify">
              The most trusted immigration and Visa consultant. There are
              locations in the United Arab Emirates as well as internationally.
              The organisation was established in 2018 on the basis of a small
              idea conceived by its promoters! We assist applicants in
              navigating the immigration process to any country in which they
              choose to live.
            </p>
          </div>
          <Link href={"/contact"}>Get Free Assessment</Link>
        </section>
      </Motion>

      <Motion
        className="lg:w-[40%] min-w-[320px] max-w-[520px] rounded-xl overflow-clip bg-gray-200"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
        transition={{ duration: 1 }}
      >
        <Image alt="" src={consultants.src} className="w-full min-w-[320px]" />
      </Motion>

      <div className="absolute bottom-10 w-full flex animate-bounce justify-center items-center">
        <BsChevronCompactDown className="text-white text-4xl" />
      </div>
    </AnimateToView>
  );
};

export default About;
