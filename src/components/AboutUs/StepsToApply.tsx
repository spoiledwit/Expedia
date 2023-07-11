import AnimateToView from "../AnimateToView";

type Step = {
  index: number;
  label: string;
  text: string;
};

const StepSection = ({ step }: { step: Step }) => {
  return (
    <div className="flex flex-col p-5 w-full h-full items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="w-24 font-serif grid place-items-center aspect-square text-4xl text-white rounded-full bg-sky-700">
          {step.index}
        </div>

        <h3 className=" text-black mt-4 text-center text-lg font-semibold mb-5 tracking-wide">
          {step.label}
        </h3>
      </div>
      <p className=" text-black mt-4 md:mt-0 text-center text-base lg:text-sm tracking-wide">
        {step.text}
      </p>
    </div>
  );
};

const StepsToApply = () => {
  const steps: Step[] = [
    {
      index: 1,
      label: "Fill in the form",
      text: "CentenniaImmigration will fill up all your required forms when you apply for a visa.",
    },
    {
      index: 2,
      label: "Submit your attested documents",
      text: "CentenniaImmigration will also submit all your attested documents that need to be submitted.",
    },
    {
      index: 3,
      label: "Receive your Visa",
      text: "Don't worry about visa processing, just relax and wait to receive your desired visa.",
    },
  ];

  return (
    <div className="w-full py-20 px-4 md:px-20 pb-20 flex flex-col items-center bg-white">
      <section className="w-full flex flex-col gap-3 text-center">
        <h3 className="  text-sky-700 text-lg md:text-4xl tracking-wide">
          STEP BY STEP PROCESS FOR YOUR VISA
        </h3>
        <p className="mb-16 tracking-wide text-black">
          We follow a streamlined and well-structured visa process for quick
          turnaround time for checking, follow up and approval. With us you can
          rest assure that you will only be provided with professional guidance.
        </p>
      </section>

      <AnimateToView>
        <div className="w-full flex flex-col lg:flex-row">
          {steps.map((s, i) => (
            <div
              key={s.index}
              className="w-full flex-wrap flex flex-col lg:flex-row justify-center items-center"
            >
              {i !== 0 && (
                <div className=" w-[60%] lg:hidden h-[1px] bg-sky-600 my-8" />
              )}
              <StepSection step={s} />
            </div>
          ))}
        </div>
      </AnimateToView>
    </div>
  );
};

export default StepsToApply;
