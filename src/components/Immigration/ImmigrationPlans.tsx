import { CountryData, PlanData } from "../../types";
import { Link } from "react-router-dom";
import canada from "../../assets/canada.jpg";
import eu from "../../assets/eu.jpeg";
import uk from "../../assets/uk.jpg";
import aus from "../../assets/australia.jpg";
import { useLocation } from "react-router-dom";

const PlanCard = ({
  countryName,
  plan,
}: {
  countryName: string;
  plan: PlanData;
}) => {

  const pathname = useLocation().pathname;

  return (
    <Link
      to={`/immigration/${countryName.toLocaleLowerCase()}/${plan.id}`}
      className={`${pathname!==`/immigration/${countryName.toLocaleLowerCase()}/${plan.id}` && "hover:scale-105"}  relative transition duration-300 ease-in-out overflow-hidden rounded-2xl`}
    >
      <div className="w-full relative h-64 bg-sky-700 rounded-lg overflow-hidden">
        <img
          src={countryName == "canada" ? canada : countryName == "europe" ? eu : countryName == "UK" ? uk : aus}
          alt="Canada"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 w-full h-full ${pathname===`/immigration/${countryName.toLocaleLowerCase()}/${plan.id}` ? "bg-black" : "bg-black"} opacity-50`}></div>
        <div className="absolute inset-0 px-3 py-5 justify-between w-full h-full flex flex-col bottom-0 gap-4">
          <h4 className={`text-lg text-white uppercase  ${pathname===`/immigration/${countryName.toLocaleLowerCase()}/${plan.id}` ? "text-yellow-500" : "text-white"}`}>{plan.name}</h4>
          <p className="text-white text-xs">{plan.subtitle}</p>
        </div>
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
        <h2 className="md:w-2/5 capitalize text-2xl md:text-4xl font-medium text-sky-700 tracking-wide">
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