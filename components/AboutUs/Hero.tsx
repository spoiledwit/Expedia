import london from "../../assets/hero_cover3.jpg";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <div className="absolute w-full h-[100vh] bg-black opacity-40"></div>
      <div className=" w-full h-full relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={london.src}
          alt="london wallpaper"
        />
      </div>

      <div className="absolute w-full h-full flex px-4 md:px-20 xl:px-40">
        <div className="flex flex-col mt-20 justify-center items-start">
          <div className="text-white text-3xl md:text-5xl mb-4 leading-snug">
            About Us
          </div>

          <div className="text-white text-lg md:text-xl mb-12">
            We are trusted immigration consultants who can handle <br /> your
            case and Our professional registered agents will assist you <br />{" "}
            with your visa application.
          </div>

          <div>
            <Link href={"/"} className=" button-86">
              Get Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
