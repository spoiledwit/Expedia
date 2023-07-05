import AssessmentForm from "../AssessmentForm";

const DiscoverImmigrationOptions = () => {
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
          WE MAKE A DIFFERENCE
        </h3>
        <h2 className=" text-center md:text-start capitalize text-2xl md:text-4xl font-medium text-sky-900 tracking-wide">
          Discover All Canada Immigration Options
        </h2>
        <p className=" text-center md:text-justify text-gray-700 text-sm tracking-wide">
          Looking for the best and most trusted immigration consultants for
          Canada in Dubai? Imperium Visas is here to help you! Canada is the 2nd
          largest country in the world when it comes to the total area and the
          4th largest in terms of the land area. The country also ranks high in
          terms of quality of life, education, economic freedom, civil
          liberties, and government transparency. These are some of the reasons
          why more and more people are now looking for opportunities to move to
          Canada to have a fruitful and balanced life. With a significant
          requirement for skilled professionals and workers, the government of
          Canada has allowed immigration to fill in the vacant seats across the
          sectors where locals are unwilling or unable to meet the market
          demand. At present, the country is one of the topmost options for
          skilled workers who are interested in immigrating to countries with a
          high standard of living. With one of the highest per-capita
          immigration rates worldwide, the country is expected to welcome more
          new permanent residents when compared to the numbers of previous year.
          If this is something in which you are interested in, then ensure that
          you get professional assistance and guidance from the most reliable
          Canada immigration consultant in Dubai at Imperium Visas to assure
          yourself of a hassle-free and smooth immigration experience!
        </p>
      </section>
      <div className="md:w-2/5">
        <AssessmentForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default DiscoverImmigrationOptions;
