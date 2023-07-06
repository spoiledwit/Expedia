import { CountryData } from "../../types";
import pic from '../../assets/pic.png'

const Hero = () => {
  return (
    <div className="flex w-full h-[calc(80vh)] justify-center items-center">
      <div className="absolute w-full h-[80vh] bg-black opacity-30"></div>
      <img
        src={pic}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute w-full h-full flex px-40">
        <div className="flex flex-col mt-20 justify-center">
          <p className="text-white text-5xl mb-4 w-[700px] leading-snug">
            Contact Us
          </p>
          <p className="text-white text-xl mb-6">
            Get your queries answered by our experienced consultants!
          </p>
          </div>
      </div>
    </div>
  );
};

export default Hero;
