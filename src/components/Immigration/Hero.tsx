import Button from "../Button";

const Hero = ({
  title,
  description,
  imageURL,
}: {
  title: string;
  description: string;
  imageURL: string;
}) => {
  return (
    <div className="flex w-full h-[calc(80vh)] justify-center items-center">
      <div className="absolute w-full h-[80vh] bg-black opacity-30"></div>
      <img
        src={imageURL}
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full flex px-4 md:px-20 xl:px-40">
        <div className="flex flex-col mt-20 justify-center items-start">
          <p className="text-white capitalize text-3xl md:text-5xl mb-4 leading-snug">
            {title}
          </p>
          <p className="text-white text-xl mb-12">{description}</p>
          <Button
            text="Book Free Consultation"
            onClick={() => {
              console.log("get assessment");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
