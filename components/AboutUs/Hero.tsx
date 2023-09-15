import greece from "../../assets/greece.jpg";
import Link from "next/link";
import Motion from "../Motion";
import AnimateToView from "../AnimateToView";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <div className="absolute w-full h-[100vh] bg-black opacity-40"></div>
      <div className=" w-full h-full relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={greece.src}
          alt="greece wallpaper"
        />
      </div>

      <AnimateToView className="absolute w-full h-full flex px-4 md:px-20 xl:px-40">
        <Motion
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -50 },
          }}
          transition={{ duration: 1 }}
          className="flex flex-col mt-20 justify-center items-start"
        >
          <Motion
            className="text-white text-3xl md:text-5xl mb-4 leading-snug"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            About Us
          </Motion>

          <Motion
            className="text-white text-lg md:text-xl mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            We are trusted immigration consultants who can handle <br /> your
            case and Our professional registered agents will assist you <br />{" "}
            with your visa application.
          </Motion>

          <Motion
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Link href={"/"} className=" button-86">
              Get Free Assessment
            </Link>
          </Motion>
        </Motion>
      </AnimateToView>
    </div>
  );
};

export default Hero;
