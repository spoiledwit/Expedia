"use client";

// import canada from "../../../assets/canada_im_cover.jpg";
import Image from "next/image";
import aus from "../../../assets/aus_im_cover.jpg";
import europe from "../../../assets/europe_im_cover.jpg";
import uk from "../../../assets/uk_im_cover.jpg";
import { mobileNavs } from "../../../navs";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

const countries = [
  {
    name: "Australia",
    headline:
      "Immerse yourself in the thrilling adventure that waits in the untamed wilderness and vibrant cities.",
    image: aus,
  },
  {
    name: "Europe",
    headline:
      "Experience the rich tapestry of diverse cultures, fascinating histories, and breathtaking landscapes.",
    image: europe,
  },
  {
    name: "UK",
    headline:
      "Journey through time from historic landmarks to cutting-edge cultural phenomena.",
    image: uk,
  },
];

interface CountriesSliderProps {
  setColor?: (color: string) => void;
}

// Update your SmallSliderProps interface
interface SmallSliderProps {
  activeCountry: {
    name: string;
  };
  setActiveCountry: (country: { name: string }) => void;
  countryRefs: React.MutableRefObject<
    (React.RefObject<HTMLDivElement> | null)[]
  >;
  scrollPosition: number;
  imageHeight: number;
}

// Modified SmallSlider component
const SmallSlider: React.FC<SmallSliderProps> = ({
  countryRefs,
  scrollPosition,
  imageHeight,
}) => {
  const handleImageClick = (country: any) => {
    // find the index of the clicked country
    const index = countries.findIndex((c) => c.name === country.name);

    // find the corresponding larger image
    const targetImage = countryRefs.current[index];

    // smoothly scroll to the image
    if (targetImage?.current) {
      const targetPosition =
        targetImage.current.getBoundingClientRect().top + scrollPosition;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="flex flex-col gap-2">
        {countries.map((country, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 relative bg-green-400 ${
              Math.floor(scrollPosition / imageHeight) === index
                ? "border-2 border-white"
                : ""
            } transition duration-500`}
            onClick={() => handleImageClick(country)}
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={country.image.src}
              alt="country"
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CountriesSlider: React.FC<CountriesSliderProps> = ({ setColor }) => {
  const [activeCountry, setActiveCountry] = useState(countries[0]);
  const countryRefs = useRef([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageHeight = 600; // Height of a single image
  countryRefs.current = countries.map(
    (_, i) => countryRefs.current[i] ?? React.createRef()
  );
  const colors = ["#0B0610", "#1f0d0d", "#091335"];

  const handleScroll = () => {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    scrollPos = scrollPos - 200;
    setScrollPosition(scrollPos);

    const countryIndex = countryRefs.current.reduce(
      (prevIndex, currRef, index) => {
        if (countryRefs.current[prevIndex].current) {
          const prevOffset =
            countryRefs.current[prevIndex].current.getBoundingClientRect().top;
          //@ts-ignore
          const currOffset = currRef.current.getBoundingClientRect().top;

          return Math.abs(currOffset) < Math.abs(prevOffset)
            ? index
            : prevIndex;
        }
        return index;
      },
      0
    );

    setActiveCountry(countries[countryIndex]);

    // Check if all countries have been scrolled past
    const allCountriesPassed = countryRefs.current.every((ref) => {
      //@ts-ignore
      const offset = ref.current.getBoundingClientRect().top;
      return offset < 0;
    });

    if (!setColor) {
      return;
    }

    if (allCountriesPassed) {
      setColor("#FFFFFF"); // Set color to white
    } else {
      setColor(colors[countryIndex]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "max-content",
        minHeight: "100vh",
        marginBottom: "40px",
      }}
    >
      <div className=" w-full overflow-hidden">
        {countries.map((country, index) => (
          <div className="relative w-full h-full flex bg-pink-500 " key={index}>
            <Link
              href={`/immigration/${country.name.toLowerCase()}`}
              className=" w-full h-full bg-white cursor-pointer"
            >
              <Image
                layout="fill"
                objectFit="cover"
                ref={countryRefs.current[index]}
                src={country.image.src}
                alt="country"
              />
            </Link>
            <h2>
              <span className="absolute bottom-10 right-10 text-white text-5xl font-bold p-5">
                {country.name}
              </span>
            </h2>
          </div>
        ))}
      </div>
      <div className="sticky h-[310px] w-[200px] overflow-hidden top-80">
        <SmallSlider
          activeCountry={activeCountry}
          //@ts-ignore
          setActiveCountry={setActiveCountry}
          countryRefs={countryRefs}
          scrollPosition={scrollPosition}
          imageHeight={imageHeight}
        />
      </div>

      <div className="h-96 w-[50%] sticky top-40  flex flex-col items-end">
        <div>
          <span>
            <h1
              className={`text-2xl ${
                activeCountry.name === "Canada"
                  ? "text-blue-400"
                  : activeCountry.name === "Australia"
                  ? "text-fuchsia-500"
                  : activeCountry.name === "Europe"
                  ? "text-yellow-600"
                  : "text-cyan-400"
              } font-bold`}
            >
              {activeCountry.name}:
            </h1>
            <p className=" max-w-[500px] mb-5 font-light text-3xl text-white opacity-80 mt-2">
              {activeCountry.headline}
            </p>
          </span>
          {mobileNavs.map((link, index) => (
            <div key={index} className=" flex flex-wrap gap-2 max-w-[500px]">
              {link.id === activeCountry.name.toLowerCase() &&
                link.children?.map((child, index) => (
                  <Link
                    key={index}
                    href={child.href}
                    className=" border p-2 text-sm transition text-gray-100 duration-300 rounded-md hover:scale-105"
                  >
                    {child.title}
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesSlider;
