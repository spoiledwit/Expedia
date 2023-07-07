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
      question: "Why are you running?",
      answer:
        "I run because I love it. I run because I need it. I've run nearly everyday since 2005. Before that there was four years of cross country and track, and before that two years of middle school track and field. I didn't really enjoy it as a kid, and didn't treat it seriously for a lot of reasons, so I don't count those years. Just the last decade or so, because my running has been voluntary.",
    },
    {
      index: 2,
      question: "Why are you running?",
      answer:
        "I run because I love it. I run because I need it. I've run nearly everyday since 2005. Before that there was four years of cross country and track, and before that two years of middle school track and field. I didn't really enjoy it as a kid, and didn't treat it seriously for a lot of reasons, so I don't count those years. Just the last decade or so, because my running has been voluntary.",
    },
    {
      index: 3,
      question: "Why are you running?",
      answer:
        "I run because I love it. I run because I need it. I've run nearly everyday since 2005. Before that there was four years of cross country and track, and before that two years of middle school track and field. I didn't really enjoy it as a kid, and didn't treat it seriously for a lot of reasons, so I don't count those years. Just the last decade or so, because my running has been voluntary.",
    },
    {
      index: 4,
      question: "Why are you running?",
      answer:
        "I run because I love it. I run because I need it. I've run nearly everyday since 2005. Before that there was four years of cross country and track, and before that two years of middle school track and field. I didn't really enjoy it as a kid, and didn't treat it seriously for a lot of reasons, so I don't count those years. Just the last decade or so, because my running has been voluntary.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(1);

  return (
    <div className="p-4 md:px-40 lg:px-64 xl:px-[400px] flex w-full flex-col gap-2">
      {FAQs.map((faq, i) => (
        <div key={faq.index}>
          {i !== 0 && (
            <div className="h-[2px] w-1/2 my-4 bg-gray-200 self-center" />
          )}
          <Accordion
            data={{ title: <p>{faq.question}</p>, content: <p>{faq.answer}</p> }}
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
