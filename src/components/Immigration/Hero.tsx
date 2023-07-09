import Button from "../Button";
import Canada from "../../assets/canada_im_cover.jpg";
import aus from "../../assets/aus_im_cover.jpg";
import europe from "../../assets/europe_im_cover.jpg";
import uk from "../../assets/uk_im_cover.jpg";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

const Hero = ({
  title,
  description
}: {
  title: string;
  description: string;
  imageURL: string;
}) => {

  const navigate = useNavigate();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="flex w-full h-[calc(100vh)] justify-center items-center">
      <div className="absolute w-full h-[100vh] bg-black opacity-30"></div>
      <img
        src={title.includes("Canada") ? Canada : title.includes("Australia") ? aus : title.includes("Europe") ? europe : uk}
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full flex px-4 md:px-20 xl:px-40">
        <div className="flex flex-col mt-20 justify-center items-start">
          <AnimatePresence>
            {inView && (
              <motion.p
                className="text-white capitalize text-3xl md:text-5xl mb-4 leading-snug"
                variants={textVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ type: 'spring', stiffness: 120 }}
              >
                {title}
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {inView && (
              <motion.p
                className="text-white text-xl mb-12"
                variants={textVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
          <Button
            text="Book Free Consultation"
            onClick={() => {
              navigate("/contact");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
