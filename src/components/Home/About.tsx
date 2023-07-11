import Button from "../Button";
import consultants from "../../assets/consultants.jpg";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.7
  });

  const handleClick = () => {
    navigate("/contact");
  };

  if (inView) {
    controls.start("visible");
  }

  return (
    <motion.div 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 }
      }}
      transition={{ duration: 1 }}
      className="w-full md:px-40 px-8 md:p-4 flex flex-col lg:flex-row-reverse items-center lg:gap-20 xl:gap-40 gap-12"
    >
      <motion.section 
        className="w-full lg:w-[60%] flex flex-col items-center md:items-start gap-8 md:gap-12"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.95 }
        }}
        transition={{ duration: 1 }}
      >
        <h3 className="md:block hidden self-start text-lg text-yellow-500 uppercase tracking-wide">
          WHO WE ARE
        </h3>
        <div className=" w-full gap-4 flex flex-col items-center">
          <h2 className="capitalize text-2xl md:text-4xl text-center lg:text-start w-full font-medium text-sky-700 tracking-wide">
            not just a traditional visa & immigration firm
          </h2>
          <p className=" text-gray-700 text-sm tracking-wide text-center lg:text-justify">
            The most trusted immigration and Visa consultant. There are
            locations in the United Arab Emirates as well as internationally.
            The organisation was established in 2018 on the basis of a small
            idea conceived by its promoters! We assist applicants in navigating
            the immigration process to any country in which they choose to live.
          </p>
        </div>
        <Button text="Get Free Assessment" onClick={handleClick} />
      </motion.section>

      <motion.div 
        className="lg:w-[40%] min-w-[320px] max-w-[520px] rounded-xl overflow-clip bg-gray-200"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 }
        }}
        transition={{ duration: 1 }}
      >
        <img
          alt=""
          src={consultants}
          className="w-full min-w-[320px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
