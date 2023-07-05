import { GiEyelashes, GiBullseye, GiRecycle } from "react-icons/gi";

type Virtue = {
  icon: JSX.Element;
  label: string;
  text: string;
};

const VirtueTile = ({ virtue }: { virtue: Virtue }) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 text-center md:text-justify md:justify-between items-center">
      <div className="w-full md:w-[40%] whitespace-nowrap flex gap-8 items-center justify-center">
        <div className="w-8">
        {virtue.icon}
        </div>
        <h3 className=" text-xl font-serif text-yellow-500 uppercase tracking-wide">
          {virtue.label}
        </h3>
      </div>
      <p className="w-full md:w-[60%] text-gray-200">{virtue.text}</p>
    </div>
  );
};

const OurMission = () => {
  const virtues: Virtue[] = [
    {
      icon: <GiBullseye size={40} className="text-yellow-400" />,
      label: "Our Mission",
      text: "The leading provider of UAE immigration and visa services with the required reach, agility and client commitment to enable corporations and individuals to more easily navigate complex regulations.",
    },
    {
      icon: <GiEyelashes size={40} className="text-yellow-400" />,
      label: "Our Vision",
      text: "Provide information, orientation and immigration outreach programs to help students, faculty, scholars and staff maintain legal immigration status & to provide accurate and timely advice on immigration.",
    },
    {
      icon: <GiRecycle size={40} className="text-yellow-400" />,
      label: "Our Strategy",
      text: "Responsible for strategies compliance with government regulations relating to the admission or hiring of international students, including management of the visitor Information System.",
    },
  ];

  return (
    <div className="w-full h-max px-4 md:px-16 lg:px-48 xl:px-80 py-20 flex flex-col gap-20 items-center bg-sky-950">
      <section className="w-full flex flex-col gap-8 text-center">
        <h3 className=" text-white text-3xl md:text-4xl tracking-wide">
          We create solutions for your Future
        </h3>
        <p className=" text-2xl tracking-wide text-white">
          Imperium gives their consultancy by a registered and experienced
          consultants.
        </p>
      </section>

      <div className=" w-full flex flex-col">
        {virtues.map((v, i) => (
          <div key={i} className="w-full flex flex-col items-center">
            {i !== 0 && <div className=" w-[60%] h-[1px] bg-sky-600 my-8" />}
            <VirtueTile virtue={v} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMission;
