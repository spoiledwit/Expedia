import canada from "../../assets/canada.jpeg";
import australia from "../../assets/australia.jpg";
import { useNavigate } from "react-router-dom";
import uk from "../../assets/uk.jpg";
import eu from "../../assets/eu.jpeg";
import poland from "../../assets/poland.jpg";
import newzealand from "../../assets/newzeeland.jpg";
import { HiArrowLongRight } from "react-icons/hi2";
import Malta from "../../assets/Malta.jpg"
import Lithuania from "../../assets/lithinua.jpg";
import finland from "../../assets/finland.jpeg";

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
    {
      name: "Newzealand",
      image: newzealand,
      descripton:
        "lorem ipsum aut autem ija fe8f e8f ef lejf jflejfi weiufweif oweuf weoifewifuw efuewi fif ewfiu.",
      link: "/immigration/europe",
    },
    {
      name: "Poland",
      image: poland,
      descripton:
        "lorem ipsum aut autem ija fe8f e8f ef lejf jflejfi weiufweif oweuf weoifewifuw efuewi fif ewfiu.",
      link: "/immigration/europe",
    },
    {
      name: "Finland",
      image: finland,
      descripton:
        "lorem ipsum aut autem ija fe8f e8f ef lejf jflejfi weiufweif oweuf weoifewifuw efuewi fif ewfiu.",
      link: "/immigration/europe",
    },
    {
      name: "Malta",
      image: Malta,
      descripton:
        "lorem ipsum aut autem ija fe8f e8f ef lejf jflejfi weiufweif oweuf weoifewifuw efuewi fif ewfiu.",
      link: "/immigration/europe",
    },
    {
      name: "Lithuania",
      image: Lithuania,
      descripton:
        "lorem ipsum aut autem ija fe8f e8f ef lejf jflejfi weiufweif oweuf weoifewifuw efuewi fif ewfiu.",
      link: "/immigration/europe",
    },
  ];

  const handleClick = (link: any) => {
    navigate(link);
  };

  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="py-8 w-full md:bg-sky-700 flex flex-col items-center justify-center">
        <h2 className=" md:text-white text-sky-700 md:text-3xl text-2xl font-medium">
          The countries we support
        </h2>
      </div>
        <div className="flex flex-wrap justify-center gap-8 px-4 md:px-24">
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
        </div>
    </div>
  );
};

export default Countries;
