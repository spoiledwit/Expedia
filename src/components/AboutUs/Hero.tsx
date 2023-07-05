import pic from "../../assets/pic.png"
import Button from "../Button"


const Hero = () => {
  return (
    <div className="flex w-full h-[calc(100vh)] justify-center items-center">
      <div className="absolute w-full h-full bg-black opacity-30"></div>
      <img
        src={pic}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute w-full h-full flex px-40">
        <div className="flex flex-col mt-20 justify-center">
          <p className="text-white text-5xl mb-4 w-[700px] leading-snug">
            One of Leading Immigration Consultants in Dubai
          </p>
          <p className="text-white text-xl mb-6">
            We are trusted immigration consultants who can handle <br /> your
            case and Our professional registered agents will assist you <br />{" "}
            with your visa application.
          </p>
          <Button text="Get Free Assessment" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
