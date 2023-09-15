import Link from "next/link";

const Consultancy = () => {
  return (
    <div className="w-full md:py-20 py-8 bg-primary-blue flex px-8 flex-col justify-center items-center gap-4 ">
      <h2 className="capitalize text-center text-2xl md:text-4xl font-medium text-white tracking-wide">
        Unparalleled Consultancy from Experienced Lawyers
      </h2>
      <h4 className=" text-[#e0c98d] text-center text-lg md:text-xl tracking-wide">
        Centennial Migration gives their consultancy by a registered and
        experienced lawyer.
      </h4>

      <Link
        href={"/contact"}
        className="mt-8 rounded-lg text-sm grid place-items-center tracking-wide h-12 px-6 text-white hover:text-primary-gold bg-transparent border-[2px] border-secondary-blue hover:border-primary-gold transition-all"
      >
        <p className="uppercase">Join With Premium Consultants</p>
      </Link>
    </div>
  );
};

export default Consultancy;
