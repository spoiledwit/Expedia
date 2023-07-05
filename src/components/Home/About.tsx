import Button from "../Button";

const About = () => {
  const handleClick = () => {
    console.log("Get free assessment");
  };

  return (
    <div className="w-full md:px-40 md:py-20 p-4 flex flex-col md:flex-row md:gap-40 gap-12">
      <section className="w-[60%] flex flex-col gap-8 md:gap-12">
        <h3 className=" -translate-x-10 text-lg text-yellow-500 uppercase tracking-wide">
          WHO WE ARE
        </h3>
        <div className=" w-full gap-4 flex flex-col">

        <h2 className="capitalize text-2xl md:text-4xl font-medium text-sky-900 tracking-wide">
          not just traditional visa & immigration firm
        </h2>
        <p className=" text-gray-700 text-sm tracking-wide">
          The most trusted immigration and Visa consultant. There are locations
          in the United Arab Emirates as well as internationally. The
          organisation was established in 2018 on the basis of a small idea
          conceived by its promoters! We assist applicants in navigating the
          immigration process to any country in which they choose to live.
        </p>
        </div>
      <Button text="Get Free Assessment" onClick={handleClick} />
      </section>

      <div className="w-[40%] rounded-xl overflow-clip bg-gray-200">
        <img alt="" src="https://loremflickr.com/640/480/cats" className="w-full" />
      </div>
    </div>
  );
};

export default About;
