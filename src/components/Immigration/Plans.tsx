import { useState } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import pic from "../../assets/pic.png";

type Plan = {
  id: string;
  imageURL: string;
  label: string;
  description: string;
};

const PlanCard = ({ plan }: { plan: Plan }) => {
  const handleClick = () => {
    console.log(plan.label);
  };

  return (
    <div
      onClick={handleClick}
      className="relative text-white hover:text-yellow-400 filter grayscale hover:filter-none w-full h-60 cursor-pointer transition-all"
    >
      <img
        alt="canada immigration plan"
        src={plan.imageURL}
        className="w-full h-full absolute opacity-50 -z-[5]"
      />
      <div className="w-full h-full bg-black absolute opacity-75 -z-[4]" />
      <div className="p-4 flex flex-col items-center gap-4 opacity-100">
        <div className="w-10">
          <FaCanadianMapleLeaf size={40} />
        </div>
        <h4 className=" text-white  text-lg font-semibold">{plan.label}</h4>
        <p className=" text-white text-sm text-center">{plan.description}</p>
      </div>
    </div>
  );
};

const ImmigrationPlans = () => {
  const plans: Plan[] = [
    {
      id: "1",
      imageURL: "https://loremflickr.com/640/480/nature",
      label: "Express Entry",
      description:
        "Canada is the 2nd largest country in the world when it comes to total area and the 4th largest in terms of land area.",
    },
    {
      id: "2",
      imageURL: "https://loremflickr.com/640/480/nature",
      label: "AIP",
      description:
        "The Atlantic Immigration Program is an employer-driven program for hiring foreign workers.",
    },
    {
      id: "3",
      imageURL: "https://loremflickr.com/640/480/nature",
      label: "RNIP",
      description:
        "RNIP is a unique immigration program that is designed for small and remote communities.",
    },
    {
      id: "4",
      imageURL: "https://loremflickr.com/640/480/nature",
      label: "YCP",
      description:
        "The YCP is an immigration program launched by Canada's northern territory of the Yukon.",
    },
    {
      id: "5",
      imageURL: "https://loremflickr.com/640/480/nature",
      label: "PNP",
      description:
        "This program is for applicants who are missing some points from their Express Entry Profile.",
    },
    {
      id: "6",
      imageURL: "https://loremflickr.com/640/480/nature",
      label: "Work Permit",
      description:
        "Canada is a great country for workers to start their careers, earn and live well with work permits.",
    },
    {
      id: "7",
      imageURL: "https://loremflickr.com/640/480/nature",
      label: "Study Visa",
      description:
        "We provide services on Student Visa Requirements in Canada, Process, Fees & Application,",
    },
    {
      id: "8",
      imageURL: "https://loremflickr.com/640/480/nature",
      label: "Startup Visa",
      description:
        "The Atlantic Immigration Program is an employer-driven program for hiring foreign workers.",
    },
  ];

  return (
    <section className="w-full px-4 md:px-32 lg:px-60 xl:px-80 flex flex-col items-center md:items-start gap-8">
      <h3 className=" md:-translate-x-10 text-lg text-yellow-500 uppercase tracking-wide">
        CANADA
      </h3>
      <div className=" w-full gap-8 md:gap-0 flex flex-col md:flex-row text-center md:text-start items-center justify-between">
        <h2 className="md:w-2/5 capitalize text-2xl md:text-4xl font-medium text-sky-900 tracking-wide">
          Explore Canadian Immigration Programs
        </h2>
        <p className="md:w-1/2 text-gray-900 tracking-wide">
          We provide a skilled staff to help you get the most out of your
          immigration. Our qualified and dependable Immigration Consultants can
          assist you in obtaining a favorable result in your case.
        </p>
      </div>
      <div className="mt-8 w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
        {plans.map((p, i) => (
          <PlanCard key={i} plan={p} />
        ))}
      </div>
    </section>
  );
};

export default ImmigrationPlans;
