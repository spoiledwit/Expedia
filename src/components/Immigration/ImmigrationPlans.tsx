import { FaCanadianMapleLeaf } from "react-icons/fa";
import { CountryData } from "../../types";
import { HiFlag } from "react-icons/hi";
import { Link } from "react-router-dom";

type Plan = {
  id: string;
  name: string;
  imageURL: string;
  description: string;
};

const PlanCard = ({
  countryName,
  plan,
}: {
  countryName: string;
  plan: Plan;
}) => {
  return (
    <Link
    to={`/immigration/${countryName}/${plan.id}`}
      className="relative text-white hover:text-yellow-400 filter grayscale hover:filter-none w-full min-h-60 cursor-pointer transition-all"
    >
      <img
        alt="canada immigration plan"
        src={plan.imageURL}
        className="w-full h-full absolute opacity-50 -z-[5]"
      />
      <div className="w-full h-full bg-black absolute opacity-50 -z-[4]" />
      <div className="p-4 flex flex-col items-center gap-12">
        {/* <div className="w-10">{getCountryIcon(countryName)}</div> */}
        <h4 className="text-white  text-lg font-semibold text-center">
          {plan.name}
        </h4>
        <p className="text-white text-sm text-center">{plan.description}</p>
      </div>
    </Link>
  );
};

const ImmigrationPlans = ({ countryData }: { countryData: CountryData }) => {
  return (
    <section className="w-full px-4 md:px-32 lg:px-60 xl:px-80 flex flex-col items-center md:items-start gap-8">
      <h3 className=" md:-translate-x-10 text-lg text-yellow-500 uppercase tracking-wide">
        {countryData.name}
      </h3>
      <div className=" w-full gap-8 md:gap-0 flex flex-col md:flex-row text-center md:text-start items-center justify-between">
        <h2 className="md:w-2/5 capitalize text-2xl md:text-4xl font-medium text-sky-900 tracking-wide">
          {countryData.plans.title}
        </h2>
        <p className="md:w-1/2 text-gray-900 tracking-wide">
          {countryData.plans.description}
        </p>
      </div>
      <div className="mt-8 w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
        {countryData.plans.values.map((p, i) => (
          <PlanCard key={i} plan={p} countryName={countryData.name} />
        ))}
      </div>
    </section>
  );
};

export default ImmigrationPlans;

const getCountryIcon = (countryName: string): JSX.Element => {
  switch (countryName) {
    case "canada":
      return <FaCanadianMapleLeaf size={40} />;
    default:
      return <HiFlag size={40} />;
  }
};
