import Button from "../Button";

const About = () => {
  const handleClick = () => {
    console.log("Get free assessment");
  };

  return (
    <div className="w-full md:px-40 p-4 flex flex-col lg:flex-row-reverse items-center lg:gap-20 xl:gap-40 gap-12">
      <section className="w-full lg:w-[60%] flex flex-col items-center md:items-start gap-8 md:gap-12">
        <h3 className=" self-start md:-translate-x-10 text-lg text-yellow-500 uppercase tracking-wide">
          WHO WE ARE
        </h3>
        <div className=" w-full gap-4 flex flex-col items-center">
          <h2 className="capitalize text-2xl md:text-4xl text-center lg:text-start w-full font-medium text-sky-900 tracking-wide">
            not just traditional visa & immigration firm
          </h2>
          <p className=" text-gray-700 text-sm tracking-wide text-center lg:text-justify">
            The most trusted immigration and Visa consultant. There are
            locations in the United Arab Emirates as well as internationally.
            The organisation was established in 2018 on the basis of a small
            idea conceived by its promoters! We assist applicants in navigating
            the immigration process to any country in which they choose to live.
          </p>
        </div>
        <Button text="Get Free Assessment" onClick={handleClick} />
      </section>

      <div className="lg:w-[40%] min-w-[320px] max-w-[520px] rounded-xl overflow-clip bg-gray-200">
        <img
          alt=""
          src="https://loremflickr.com/cache/resized/8108_8468369831_59c9de0c5d_c_640_480_nofilter.jpg"
          className="w-full min-w-[320px]"
        />
      </div>
    </div>
  );
};

export default About;
