import { useNavigate } from "react-router-dom";

const Consultancy = () => {

  const navigate = useNavigate();
  
  return (
    <div className="w-full md:py-20 py-8 bg-primary-blue flex px-8 flex-col justify-center items-center gap-4 ">
      <h2 className="capitalize text-center text-2xl md:text-4xl font-medium text-white tracking-wide">
        Unparalleled Consultancy from Experienced Lawyers
      </h2>
      <h4 className=" text-sky-200 text-center text-lg md:text-xl tracking-wide">
        CentenniaImmigration gives their consultancy by a registered and experienced lawyer.
      </h4>

      <button className="mt-8 rounded-lg text-sm tracking-wide h-12 px-6 text-white hover:text-primary-gold bg-transparent border-[2px] border-secondary-blue hover:border-primary-gold transition-all"
      onClick={()=>{
        navigate("/contact");
      }}
      >
        <p className="uppercase">Join With Premium Consultants</p>
      </button>
    </div>
  );
};

export default Consultancy;
