const Consultancy = () => {
  return (
    <div className="w-full h-[80vh] relative flex flex-col ">
      <div className="h-[30vh] justify-center top-0 z-10 xl:px-80 md:px-20 px-4 flex flex-col md:flex-row gap-8">
        <img
          alt=""
          src="https://loremflickr.com/640/480/cats"
          className="object-cover object-center max-w-[20vw]"
        />
        <img
          alt=""
          src="https://loremflickr.com/640/480/cats"
          className="object-cover object-center max-w-[20vw]"
        />
        <img
          alt=""
          src="https://loremflickr.com/640/480/cats"
          className="object-cover object-center max-w-[20vw]"
        />
      </div>
      <div className=" pt-60 pb-20 w-full flex flex-col gap-4 items-center justify-center absolute bottom-0 bg-sky-950 self-end">
        <h2 className="capitalize text-2xl md:text-4xl font-medium text-white tracking-wide">
          Unparalleled Consultancy from Experienced Lawyers
        </h2>
        <h4 className=" text-gray-200 text-lg md:text-xl tracking-wide">
          Imperium gives their consultancy by a registered and experienced
          lawyer.
        </h4>

        <button className="mt-4 rounded-lg text-sm tracking-wide h-12 px-6 text-white hover:text-yellow-300 bg-transparent border-[2px] border-sky-700 hover:border-sky-500 transition-all">
          <p className="uppercase">Join With Premium Consultants</p>
        </button>
      </div>
    </div>
  );
};

export default Consultancy;
