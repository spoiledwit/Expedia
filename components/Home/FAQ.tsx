import { useState } from "react";
import Accordion from "../Accordion";

type FAQ = {
  index: number;
  question: string;
  answer: string;
};

const Faq = () => {
  const FAQs: FAQ[] = [
    {
      index: 1,
      question: "What makes CentenniaImmigration Visa Services a reliable choice for immigration consultancy?",
      answer:
        "CentenniaImmigration Visa Services, established in 2018, is known for its expertise in handling immigration processes. With an impressive success rate of 97% in immigration cases, and professional, registered agents, CentenniaImmigration ensures that your immigration application process is as smooth as possible.",
    },
    {
      index: 2,
      question: "What kind of support does CentenniaImmigration offer for visa applications?",
      answer:
        "CentenniaImmigration provides comprehensive assistance throughout the visa application process. This includes helping you understand immigration rules, which can often be complicated and dynamic, assisting with the application to increase the success rate, and supporting you with necessary documentation."
      },
    {
      index: 3,
      question: "Which countries does CentenniaImmigration Visa Services specialize in for immigration?",
      answer:
        "CentenniaImmigration Visa Services specializes in handling immigration processes for countries like Canada, Australia, the UK, and Europe. The team has a commendable reputation as top immigration consultants for Canada and Australia in Dubai."},
    {
      index: 4,
      question: "Why does centenniaImmigration offers the best service?",
      answer:
        "Since 2018 CentenniaImmigration Visa Services immigration success rate is 97 percent. So you don't need to worry about that. Sometimes it is difficult for the student or people which document is required and when. CentenniaImmigration will help you to manage that."},
  ];

  const [openIndex, setOpenIndex] = useState(1);

  return (
    <div className="py-4 px-8 md:px-40 lg:px-64 xl:px-[400px] flex w-full flex-col gap-2">
      {FAQs.map((faq, i) => (
        <div key={faq.index}>
          {i !== 0 && (
            <div className="h-[2px] w-1/2 my-4 bg-gray-200 self-center" />
          )}
          <Accordion
            data={{ header: <p>{faq.question}</p>, content: <p>{faq.answer}</p> }}
            isOpen={faq.index === openIndex}
            onClick={() =>
              faq.index === openIndex
                ? setOpenIndex(-1)
                : setOpenIndex(faq.index)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Faq;
