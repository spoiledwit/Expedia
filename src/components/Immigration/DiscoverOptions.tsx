import { CountryData } from "../../types";
import AssessmentForm from "../AssessmentForm";

const DiscoverImmigrationOptions = ({countryData}:{countryData: CountryData}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(
      "form submitted: ",
      e.target.elements.map((ele: any) => ele.value)
    );
  };

  return (
    <div className="w-full px-4 md:px-32 lg:px-60 xl:px-80 flex flex-col md:flex-row gap-12 md:gap-16">
      <section className="md:w-3/5 flex flex-col gap-8 items-center md:items-start">
        <h3 className=" md:-translate-x-10 text-lg text-yellow-500 uppercase tracking-wide">
          {countryData.options.slogan}
        </h3>
        <h2 className=" text-center md:text-start capitalize text-2xl md:text-4xl font-medium text-sky-900 tracking-wide">
          {countryData.options.title}
        </h2>
        <section className=" prose" dangerouslySetInnerHTML={{__html: countryData.options.descriptionHTML}} />
      </section>
      <div className="md:w-2/5">
        <AssessmentForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default DiscoverImmigrationOptions;
