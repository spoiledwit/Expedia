import Button from "../Button";
import greece from "../../assets/greece.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  if (inView) {
    controls.start("visible");
  }

  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <div className="absolute w-full h-[100vh] bg-black opacity-40"></div>
      <img
        src={greece}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div ref={ref} className="absolute w-full h-full flex px-4 md:px-20 xl:px-40">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -50 },
          }}
          transition={{ duration: 1 }}
          className="flex flex-col mt-20 justify-center items-start"
        >
          <motion.p
            className="text-white text-3xl md:text-5xl mb-4 leading-snug"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            About Us
          </motion.p>
          <motion.p
            className="text-white text-lg md:text-xl mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            We are trusted immigration consultants who can handle <br /> your
            case and Our professional registered agents will assist you <br />{" "}
            with your visa application.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Button text="Get Free Assessment" onClick={() => {}} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
