import Image from "next/image";
import Strategy from "../../assets/strategy.png";
import mission from "../../assets/mission.png";
import vision from "../../assets/business.png";
import Motion from "../Motion";

type Virtue = {
  icon: string;
  label: string;
  text: string;
};

const VirtueTile = ({ virtue }: { virtue: Virtue }) => {
  return (
    <div className=" w-full flex flex-col items-center gap-4 mt-12">
      <div className=" w-20 h-20 relative ">
        <Image layout="fill" objectFit="contain" src={virtue.icon} alt="" />
      </div>
      <h3 className=" text-xl text-white tracking-tight">{virtue.label}</h3>
      <p className="text-center max-w-[800px] text-white leading-relaxed">
        {virtue.text}
      </p>
    </div>
  );
};

const OurMission = () => {
  const virtues: Virtue[] = [
    {
      icon: mission.src,
      label: "Our Mission",
      text: "The leading provider of UAE immigration and visa services with the required reach, agility and client commitment to enable corporations and individuals to more easily navigate complex regulations.",
    },
    {
      icon: vision.src,
      label: "Our Vision",
      text: "Provide information, orientation and immigration outreach programs to help students, faculty, scholars and staff maintain legal immigration status & to provide accurate and timely advice on immigration.",
    },
    {
      icon: Strategy.src,
      label: "Our Strategy",
      text: "Responsible for strategies compliance with government regulations relating to the admission or hiring of international students, including management of the visitor Information System.",
    },
  ];

  return (
    <Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="our-mission bg-primary-blue py-40"
    >
      <section className="mission-intro">
        <h3>We create solutions for your Future</h3>
        <p>
          CentenniaImmigration gives their consultancy by a registered and
          experienced consultants.
        </p>
      </section>

      <div className="virtues-container">
        {virtues.map((v, i) => (
          // <div key={i}>{v.text}</div>
          <VirtueTile key={i} virtue={v} />
        ))}
      </div>
    </Motion>
  );
};

export default OurMission;
