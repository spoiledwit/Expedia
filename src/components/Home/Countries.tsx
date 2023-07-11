import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import canada from "../../assets/canada.jpeg";
import australia from "../../assets/australia.jpg";
import { useNavigate } from "react-router-dom";
import uk from "../../assets/uk.jpg";
import eu from "../../assets/eu.jpeg";
import { HiArrowLongRight } from "react-icons/hi2";

const Countries = () => {
  const navigate = useNavigate();

  const countries = [
    {
      name: "Canada",
      image: canada,
      descripton:
        "lorem ipsum aut autem ija fe8f e8f ef lejf jflejfi weiufweif oweuf weoifewifuw efuewi fif ewfiu.",
      link: "/immigration/canada",
    },
    {
      name: "Australia",
      image: australia,
      descripton:
        "lorem ipsum aut autem ija fe8f e8f ef lejf jflejfi weiufweif oweuf weoifewifuw efuewi fif ewfiu.",
      link: "/immigration/australia",
    },
    {
      name: "UK",
      image: uk,
      descripton:
        "lorem ipsum aut autem ija fe8f e8f ef lejf jflejfi weiufweif oweuf weoifewifuw efuewi fif ewfiu.",
      link: "/immigration/uk",
    },
    {
      name: "Europe",
      image: eu,
      descripton:
        "lorem ipsum aut autem ija fe8f e8f ef lejf jflejfi weiufweif oweuf weoifewifuw efuewi fif ewfiu.",
      link: "/immigration/europe",
    },
  ];

  const handleClick = (link: any) => {
    navigate(link);
  };

  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <div className="py-20 flex flex-col gap-12 w-full">
      <div className="py-8 w-full md:bg-sky-700 flex flex-col items-center justify-center">
        <h2 className=" md:text-white text-sky-700 md:text-3xl text-2xl font-medium">
          The countries we support
        </h2>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 48 },
        }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center gap-8 px-4 md:px-40"
      >
        {countries.map((country) => {
          return (
            <div
              key={country.name}
              onClick={() => handleClick(country.link)}
              className="relative w-[240px] h-[325px] hover:scale-105 rounded-lg overflow-hidden transition-all duration-300"
            >
              <img
                src={country.image}
                alt={country.name}
                className="cursor-pointer absolute object-cover w-full h-full transition-all duration-500"
              />
              <div className="flex items-end p-5 justify-center absolute bg-gradient-to-t from-black to-60% to-transparent w-full h-full bg-opacity-20 cursor-pointer">
                <section className="text-white flex flex-col gap-2">
                  <div className="w-full flex gap-4 items-center">
                    <h4 className="  text-xl font-medium">{country.name}</h4>
                    <HiArrowLongRight size={20} />
                  </div>
                  <p className="  text-xs">{country.descripton}</p>
                </section>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Countries;
