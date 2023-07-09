import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Strategy from "../../assets/strategy.png";
import mission from "../../assets/mission.png";
import vision from "../../assets/business.png";

type Virtue = {
  icon: string,
  label: string;
  text: string;
};

const VirtueTile = ({ virtue }: { virtue: Virtue }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const animation = useAnimation();
  if (inView) {
    animation.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={animation}
      className="virtue-tile"
    >
      <div className="virtue-icon">
        <img src={virtue.icon} alt="" />
      </div>
      <h3 className="virtue-label">
        {virtue.label}
      </h3>
      <p className="text-center max-w-[800px]">{virtue.text}</p>
    </motion.div>
  );
};


const OurMission = () => {
  const virtues: Virtue[] = [
    {
      icon:mission,
      label: "Our Mission",
      text: "The leading provider of UAE immigration and visa services with the required reach, agility and client commitment to enable corporations and individuals to more easily navigate complex regulations.",
    },
    {
      icon: vision,
      label: "Our Vision",
      text: "Provide information, orientation and immigration outreach programs to help students, faculty, scholars and staff maintain legal immigration status & to provide accurate and timely advice on immigration.",
    },
    {
      icon: Strategy,
      label: "Our Strategy",
      text: "Responsible for strategies compliance with government regulations relating to the admission or hiring of international students, including management of the visitor Information System.",
    },
  ];

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="our-mission bg-sky-950 py-10"
      >
        <section className="mission-intro">
          <h3>We create solutions for your Future</h3>
          <p>
            Expedia gives their consultancy by a registered and experienced
            consultants.
          </p>
        </section>
  
        <div className="virtues-container">
          {virtues.map((v, i) => (
            <VirtueTile key={i} virtue={v} />
          ))}
        </div>
      </motion.div>
    );  
};

export default OurMission;
