import { BsChevronCompactDown } from "react-icons/bs";
import pic from "../../assets/london.jpg"

const Hero = () => {
  return (
    <div className="flex relative w-full h-screen justify-center items-center">
      <div className="absolute w-full h-screen bg-black opacity-30"></div>
      <img
        src={pic}
         alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute w-full h-screen flex px-4 md:px-20 xl:px-40">
        <div className="flex flex-col mt-20 justify-center items-start">
          <p className="text-white text-3xl md:text-5xl mb-4 leading-snug">
            Contact Us
          </p>
          <p className="text-white text-xl mb-12">
            Get your queries answered by our experienced consultants!
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex animate-bounce justify-center items-center">
        <BsChevronCompactDown className="text-white text-4xl" />
      </div>
    </div>
  );
};

export default Hero;