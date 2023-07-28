// import canada from "../../assets/canada.jpeg";
import { useNavigate } from "react-router-dom";
import australia from "../../assets/australia.jpg";
import uk from "../../assets/uk.jpg";
import poland from "../../assets/poland.jpg";
import newzealand from "../../assets/newzeeland.jpg";
import { HiArrowLongRight } from "react-icons/hi2";
import Malta from "../../assets/Malta.jpg";
import Lithuania from "../../assets/lithinua.jpg";
import finland from "../../assets/finland.jpeg";
import canada from "../../assets/canada.jpeg";
import portugal from "../../assets/portugal.jpg";
import czech from "../../assets/czech.jpg";

const Countries = () => {
  const navigate = useNavigate();

  const countries = [
    {
      name: "Australia",
      image: australia,
      link: "/immigration/australia",
    },
    {
      name: "Canada",
      image: canada,
      link: "/immigration/canada",
    },
    {
      name: "UK",
      image: uk,
      link: "/immigration/uk",
    },
    {
      name: "Newzealand",
      image: newzealand,
      link: "/immigration/newzealand",
    },
    {
      name: "Poland",
      image: poland,
      link: "/immigration/poland",
    },
    {
      name: "Finland",
      image: finland,
      link: "/immigration/finland",
    },
    {
      name: "Portugal",
      image: portugal,
      link: "/immigration/portugal",
    },
    {
      name: "Czech Republic",
      image: czech,
      link: "/immigration/czech",
    },
    {
      name: "Malta",
      image: Malta,
      link: "/immigration/malta",
    },
    {
      name: "Lithuania",
      image: Lithuania,
      link: "/immigration/lithuania",
    },
  ];

  const handleClick = (link: any) => {
    navigate(link);
  };

  return (
    <div className="flex flex-col md:gap-12 gap-5 w-full">
      <div className="py-8 w-full bg-primary-blue flex flex-col items-center justify-center">
        <h2 className="text-white md:text-3xl text-xl font-medium">
          All the countries we support
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-24">
        {countries.map((country) => {
          return (
            <div
              key={country.name}
              onClick={() => handleClick(country.link)}
              className="country-card relative w-[240px] h-[325px] rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <img
                src={country.image}
                alt={country.name}
                className="cursor-pointer z-[1] hover:scale-110 absolute object-cover object-center w-full h-full"
              />
              <div className="flex items-end p-5 justify-center absolute z-[2] bg-gradient-to-t from-black to-60% to-transparent w-full h-full bg-opacity-20 cursor-pointer">
                <section className="text-white flex flex-col gap-2">
                  <div className="w-full flex gap-4 items-center">
                    <h4 className="  text-xl font-medium">{country.name}</h4>
                    <HiArrowLongRight size={20} />
                  </div>
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
