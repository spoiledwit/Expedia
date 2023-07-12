import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
import Button from "../Button";
import AssessmentForm, { type SubmitProps } from "../AssessmentForm";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { createAssessment } from "../../lib/assessment";

const Contact = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (props: SubmitProps, e: any) => {
    e.preventDefault();
    if (props.country && props.email && props.name && props.phone) {
      const success = await createAssessment(props);
      if (success) {
        toast.success("Form submitted successfully!");
        e.target.reset();
      } else {
        toast.error("Unable to submit form!");
      }
    } else {
      toast.error("Please fill all the fields.");
    }
  };

  const controlsForm = useAnimation();
  const { ref: refForm, inView: inViewForm } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start("visible");
  }

  if (inViewForm) {
    controlsForm.start("visible");
  }

  return (
    <motion.div
      className="w-full flex flex-col lg:flex-row gap-20 lg:gap-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
        transition={{ duration: 1 }}
        className="w-full lg:w-[50%] flex flex-col items-center justify-between lg:items-start pt-5 lg:px-28 px-8 xl:px-40 bg-white"
      >
        <div className=" w-full flex flex-col">
          <h3 className=" md:-translate-x-10 text-yellow-500 md:mt-16">
            WHY CHOOSE EXPEDIA?
          </h3>
          <h2 className="text-sky-900 text-2xl md:text-3xl my-10 font-medium">
            Countless Benefits & Easy Processing
          </h2>
          <p className="mb-6">
            You choose <strong> Expedia Visa Services </strong> because
            immigration rules and dynamic, Complicated to apply, and its
            difficult to deal with the migration department and you need to
            increase the success rate Expedia will help you to get that easily.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex space-x-8 items-center">
              <div className="border-2 border-sky-900 py-2">
                <PiAirplaneTakeoffFill
                  size={48}
                  className="text-sky-900 w-16"
                />
              </div>
              <div>
                <p className="font-semibold">Legal Immigration Success</p>
                <p>
                  Since 2018 Expedia Visa Services immigration success rate is
                  97 percent. So you don't need to worry about that.
                </p>
              </div>
            </div>
            <div className="flex space-x-8 items-center">
              <div className="border-2 border-sky-900 p-2">
                <IoDocumentText size={48} className="text-sky-900" />
              </div>
              <div>
                <p className="font-semibold">Required Documents Support</p>
                <p>
                  Sometimes it is difficult for the student or people which
                  document is required and when. Expedia will help you to manage
                  that.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button
          text="Contact Us"
          onClick={() => {
            navigate("/contact");
          }}
        />
      </motion.div>

      <motion.div
        ref={refForm}
        animate={controlsForm}
        initial="hidden"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
        transition={{ duration: 1 }}
        className=" lg:rounded-3xl bg-sky-950 max-w-[600px] lg:shadow-2xl shadow-gray-500 flex flex-col justify-center items-start md:px-20 px-8 gap-12 py-20 space-y-4"
      >
        <div className="flex">
          <motion.h1
            className="md:text-3xl text-2xl text-white font-medium px-6"
            animate={{ scale: 1.2 }}
            transition={{ duration: 1 }}
          >
            Apply Now For Free Assessment
          </motion.h1>
          <FiSend className="text-white text-5xl" />
        </div>
        <AssessmentForm onSubmit={handleSubmit} />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
