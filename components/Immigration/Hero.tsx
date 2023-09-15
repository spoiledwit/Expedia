import Image from "next/image";
import canada from "../../assets/canada_im_cover.jpg";
import australia from "../../assets/aus_im_cover.jpg";
import europe from "../../assets/europe_im_cover.jpg";
import uk from "../../assets/uk.jpg";
import poland from "../../assets/poland.jpg";
import newzealand from "../../assets/newzeeland.jpg";
import malta from "../../assets/Malta.jpg";
import lithuania from "../../assets/lithinua.jpg";
import finland from "../../assets/finland.jpeg";
import portugal from "../../assets/portugal.jpg";
import czech from "../../assets/czech.jpg";

import Motion from "../Motion";
import AnimateToView from "../AnimateToView";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
  imageURL: string;
}) => {
  function getImageSource() {
    const _title = title.toLowerCase();
    return _title.includes("canada")
      ? canada
      : _title.includes("australia")
      ? australia
      : _title.includes("europe") || _title.includes("eu")
      ? europe
      : _title.includes("poland")
      ? poland
      : _title.includes("new zealand")
      ? newzealand
      : _title.includes("malta")
      ? malta
      : _title.includes("lithuania")
      ? lithuania
      : _title.includes("finland")
      ? finland
      : _title.includes("portugal")
      ? portugal
      : _title.includes("czech")
      ? czech
      : uk;
  }

  return (
    <div className="flex w-full h-[calc(100vh)] justify-center items-center">
      <div className="absolute w-full h-[100vh] bg-black opacity-30"></div>
      <div className=" w-full h-screen relative bg-green-300">
        <Image
          layout="fill"
          objectFit="cover"
          src={getImageSource().src}
          alt="travel country wallpaper"
          style={{ width: "100%" }}
        />
      </div>
      <div className="absolute w-full h-screen flex px-4 md:px-20 xl:px-40">
        <div className="flex flex-col mt-20 justify-center items-start">
          <AnimateToView>
            <Motion
              className="text-white capitalize text-3xl md:text-5xl mb-4 leading-snug"
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ type: "spring", stiffness: 120 }}
            >
              {title}
            </Motion>
          </AnimateToView>
          <AnimateToView>
            <Motion
              className="text-white text-xl mb-12"
              variants={textVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            >
              {description}
            </Motion>
          </AnimateToView>
          <Link href={"/contact"} className=" button-86">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
