import Image from "next/image";
import pic from "../../assets/pic.png";
import {
  BsGlobe,
  BsPersonFillAdd,
  BsHeadphones,
  BsFillShieldFill,
} from "react-icons/bs";
import { BiLogoVisa } from "react-icons/bi";
import { AiFillTrophy } from "react-icons/ai";

type Service = {
  icon: JSX.Element;
  label: string;
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="p-8 md:p-12 w-72 h-72 bg-gray-50 bg-opacity-10 gap-8 border-[1px] border-gray-600 backdrop-blur-md text-white rounded-2xl flex flex-col justify-between items-center">
      {service.icon}
      <p className="text-lg uppercase text-center">{service.label}</p>
    </div>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      icon: <BsGlobe size={64} />,
      label: "comprehensive immigration services",
    },
    {
      icon: <BiLogoVisa size={64} />,
      label: "expert immigration consultants",
    },
    {
      icon: <BsFillShieldFill size={64} />,
      label: "bespoke consultancy",
    },
    {
      icon: <AiFillTrophy size={64} />,
      label: "free eligibility check",
    },
    {
      icon: <BsPersonFillAdd size={64} />,
      label: "affordable immigration services",
    },
    {
      icon: <BsHeadphones size={64} />,
      label: "transparent services",
    },
  ];

  return (
    <div className="mb-20 w-full h-[80vh] flex justify-center items-center">
      <div className="absolute w-full h-[80vh] bg-black opacity-70"></div>
      <Image
        src={pic}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute w-full h-full flex flex-wrap justify-center items-center gap-4 md:gap-8 p-4 md:px-40 md:py-20">
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} />
        ))}
      </div>
    </div>
  );
};

export default Services;
