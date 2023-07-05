import { AiOutlineFileDone, AiOutlineForm } from "react-icons/ai";
import { MdFlightTakeoff } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

type Step = {
  index: number;
  icon: JSX.Element;
  label: string;
  text: string;
};

const StepSection = ({ step }: { step: Step }) => {
  return (
    <div className="w-full flex flex-col items-center md:h-60 justify-between">
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-yellow-500 uppercase tracking-wide">
          Step {step.index}
        </h4>
        <div className="w-[56px]">{step.icon}</div>
        <h3 className="mt-4 text-center text-lg text-black uppercase tracking-wide">
          {step.label}
        </h3>
      </div>
      <p className=" mt-4 md:mt-0 text-center text-gray-700 text-sm tracking-wide">{step.text}</p>
    </div>
  );
};

const StepsToApply = () => {
  const steps: Step[] = [
    {
      index: 1,
      label: "Fill in the form",
      text: "Imperium will fill up all your required forms when you apply for a visa.",
      icon: <AiOutlineForm size={56} className="text-sky-800" />,
    },
    {
      index: 2,
      label: "Submit your attested documents",
      text: "Imperium will also submit all your attested documents that need to be submitted.",
      icon: <AiOutlineFileDone size={56} className="text-sky-800" />,
    },
    {
      index: 3,
      label: "Receice your Visa",
      text: "Don't worry about visa processing, just relax and wait to receive your desired visa.",
      icon: <MdFlightTakeoff size={56} className="text-sky-800" />,
    },
  ];

  return (
    <div className="w-full h-max px-4 md:px-20 py-20 flex flex-col gap-20 items-center bg-white">
      <section className="w-full flex flex-col gap-8 text-center">
        <h3 className=" text-sjy-900 text-3xl md:text-4xl tracking-wide">
          We create solutions for your Future
        </h3>
        <p className=" text-2xl tracking-wide text-sky-900">
          Imperium gives their consultancy by a registered and experienced
          consultants.
        </p>
      </section>

      <div className="w-full flex flex-col lg:flex-row">
        {steps.map((s, i) => (
          <div
            key={s.index}
            className="w-full flex flex-col lg:flex-row items-center"
          >
            {i !== 0 && (
              <div className=" w-[60%] lg:hidden h-[1px] bg-sky-600 my-8" />
            )}
              <div className=" hidden lg:block w-10 mx-12">
                {i !== 0 && <FaLongArrowAltRight size={40} className="text-yellow-400" />}
              </div>
            <StepSection step={s} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsToApply;
