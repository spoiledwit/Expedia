import { AiOutlineFileDone, AiOutlineForm } from "react-icons/ai";
import { MdFlightTakeoff } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import london from "../../assets/london.jpg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Step = {
  index: number;
  icon: JSX.Element;
  label: string;
  text: string;
};

const variants = {
  hidden: { opacity: 0, x: -200, transition: { duration: 2 } },
  show: { opacity: 1, x: 0 }
}

const StepSection = ({ step, inView }: { step: Step, inView: boolean }) => {
  return (
    <motion.div
      className="flex flex-col glass p-5 h-[300px] w-[300px] items-center"
      initial='hidden'
      animate={inView ? 'show' : 'hidden'}
      variants={variants}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-yellow-500 uppercase mb-3 tracking-wide">
          Step {step.index}
        </h4>
        <div className="w-[56px]">{step.icon}</div>
        <h3 className="mt-4 text-center text-lg font-semibold text-white mb-5 tracking-wide">
          {step.label}
        </h3>
      </div>
      <p className=" mt-4 md:mt-0 text-center text-base lg:text-sm text-white tracking-wide">{step.text}</p>
    </motion.div>
  );
};

const StepsToApply = () => {
  const steps: Step[] = [
    {
      index: 1,
      label: "Fill in the form",
      text: "Expedia will fill up all your required forms when you apply for a visa.",
      icon: <AiOutlineForm size={56} className="text-sky-600" />,
    },
    {
      index: 2,
      label: "Submit your attested documents",
      text: "Expedia will also submit all your attested documents that need to be submitted.",
      icon: <AiOutlineFileDone size={56} className="text-sky-600" />,
    },
    {
      index: 3,
      label: "Receive your Visa",
      text: "Don't worry about visa processing, just relax and wait to receive your desired visa.",
      icon: <MdFlightTakeoff size={56} className="text-sky-600" />,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only run once
    threshold: 0.7,    // Percentage of the element that is in view before the callback is run
  });

  return (
    <div ref={ref} className="w-full"
      style={{
        backgroundImage: `url(${london})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full py-10 px-4 md:px-20 pb-20 flex flex-col items-center bg-black bg-opacity-30">

        <section className="w-full flex flex-col gap-3 text-center">
          <h3 className=" text-white text-lg md:text-4xl tracking-wide">
            We create solutions for your Future
          </h3>
          <p className=" text-xl mb-16 tracking-wide text-white">
            Expedia gives their consultancy by a registered and experienced
            consultants.
          </p>
        </section>

        <div className="w-full flex flex-col lg:flex-row mr-32">
        {steps.map((s, i) => (
          <div
            key={s.index}
            className="w-full flex-wrap flex flex-col lg:flex-row items-center"
          >
              {i !== 0 && (
                <div className=" w-[60%] lg:hidden h-[1px] bg-sky-600 my-8" />
              )}
              <div className=" hidden lg:block w-10 mx-12">
                {i !== 0 && <FaLongArrowAltRight size={40} className="text-yellow-400" />}
              </div>
              <StepSection step={s} inView={inView} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default StepsToApply;
