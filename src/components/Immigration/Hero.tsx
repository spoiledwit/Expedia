import { CountryData } from "../../types";
import Button from "../Button";

const Hero = ({ countryData }: { countryData: CountryData }) => {
  return (
    <div className="flex w-full h-[calc(80vh)] justify-center items-center">
      <div className="absolute w-full h-[80vh] bg-black opacity-30"></div>
      <img
        src={countryData.hero.imageURL}
        alt={countryData.name}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute w-full h-full flex px-4 md:px-20 xl:px-40">
        <div className="flex flex-col mt-20 justify-center items-start">
          <p className="text-white text-3xl md:text-5xl mb-4 leading-snug">
            {countryData.hero.title}
          </p>
          <p className="text-white text-xl mb-6">
            {countryData.hero.description}
          </p>
          <Button text="Book Free Consultation" onClick={() => {console.log('get assessment')}} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
