import canada from "../../assets/canada.jpeg";
import eu from "../../assets/eu.jpeg";
import { useNavigate } from "react-router-dom";

const StartProcess = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full h-max  py-10 px-4 md:px-16 lg:px-48 xl:px-80 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
      <section className="md:w-[60%] flex flex-col gap-8 md:gap-12">
        <h3 className=" text-center md:text-start md:-translate-x-10 text-lg text-yellow-500 uppercase tracking-wide">
          WE MAKE A DIFFERENCE
        </h3>
        <div className=" flex flex-col w-full gap-4">
          <h2 className="text-center md:text-start capitalize text-2xl md:text-4xl font-medium text-sky-900 tracking-wide">
            Welcome to immigration Advisory services
          </h2>
          <p className=" text-center md:text-start text-gray-700 text-sm tracking-wide">
            Expedia Visa Services foundation was established with a small idea
            that was incepted in the minds of its promoters in the year 2018! We
            skilfully guide applicants for the immigration process to any
            country they aspire to settle down.
          </p>
        </div>

        <div className="w-full h-full flex flex-col  items-center md:items-start">
          <div className="mb-12 relative w-full h-full cursor-pointer overflow-hidden rounded-xl"
          onClick={()=>{
            navigate("/immigration/europe");
          }}
          >
            <img
              alt=""
              src={eu}
              className="w-full max-h-[400px] rounded-xl hover:scale-110 transition-all duration-500 ease-in-out"
            />
             <p className="text-white font-medium text-2xl  absolute left-10 bottom-10">
              Europe
             </p>
          </div>
        </div>
      </section>
      <div className="max-w-[300px] rounded-xl overflow-hidden relative"
      onClick={()=>{
        navigate("/immigration/canada");
      }}
      >
        <img src={canada} className="w-full hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer" alt="" />
        <p className="absolute bottom-8 left-8 text-2xl font-medium text-white">
          Canada
        </p>
      </div>
    </div>
    
  );
};

export default StartProcess;
