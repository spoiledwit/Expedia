import Button from "../Button";

const StartProcess = () => {
  const startProcess = () => {
    console.log("start process");
  };

  return (
    <div className="w-full h-max px-4 md:px-16 lg:px-48 xl:px-80 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
      <section className="md:w-[60%] flex flex-col gap-8 md:gap-12">
        <h3 className=" md:-translate-x-10 text-lg text-yellow-500 uppercase tracking-wide">
          WE MAKE A DIFFERENCE
        </h3>
        <div className=" flex flex-col w-full gap-4">
          <h2 className="capitalize text-2xl md:text-4xl font-medium text-sky-900 tracking-wide">
            Welcome to immigration Advisory services
          </h2>
          <p className=" text-gray-700 text-sm tracking-wide">
            Expedia Visa Services foundation was established with a small idea
            that was incepted in the minds of its promoters in the year 2018! We
            skilfully guide applicants for the immigration process to any
            country they aspire to settle down.
          </p>
        </div>

        <div className="w-full h-full flex flex-col  items-center md:items-start">
          <div className="mb-12 w-full h-full">
            <img
              alt=""
              src="https://loremflickr.com/640/480/cats"
              className="w-full rounded-xl"
            />
            <section>
              <h2 className="capitalize text-2xl md:text-4xl font-medium text-sky-900 tracking-wide"></h2>
              <p></p>
            </section>
          </div>
          <Button text="Start Your Process" onClick={startProcess} />
        </div>
      </section>

      <img
        alt=""
        src="https://loremflickr.com/640/480/cats"
        className="md:w-[40%] h-[60vh] rounded-xl object-cover hidden md:block"
      />
    </div>
  );
};

export default StartProcess;
