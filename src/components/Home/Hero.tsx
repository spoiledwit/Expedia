import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Button";
import { BsChevronCompactDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import home from "../../assets/hero_cover3.jpg";
import canada from "../../assets/canada_im_cover.jpg";
import aus from "../../assets/aus_im_cover.jpg";
import europe from "../../assets/europe_im_cover.jpg";
import uk from "../../assets/uk_im_cover.jpg";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start("visible");
  }

  const images = [home, canada, aus, uk, europe];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-screen relative">
      <Slider {...settings}>
        {images.map((img, i) => {
          return (
            <div
              key={i}
              className="flex w-full h-screen justify-center items-center relative"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          );
        })}
      </Slider>

      <motion.div
        className="absolute bg-black bg-opacity-30 top-0 left-0 w-full h-full flex px-8 md:px-20 xl:px-40"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:mt-20 justify-center items-start">
          <motion.p
            className="text-white text-3xl md:text-5xl mb-4 leading-snug"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 },
            }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            One of Leading Immigration <br /> Consultants in Dubai
          </motion.p>
          <motion.p
            className="text-white text-xl mb-6"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 },
            }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            We are trusted immigration consultants who can handle <br /> your
            case and Our professional registered agents will assist you <br />{" "}
            with your visa application.
          </motion.p>
          <Button
            text="Get Free Assessment"
            onClick={() => {
              navigate("/contact");
            }}
          />
        </div>
      </motion.div>
      <div className="absolute bottom-10 w-full flex animate-bounce justify-center items-center">
        <BsChevronCompactDown className="text-white text-4xl" />
      </div>
    </div>
  );
};

export default Hero;
