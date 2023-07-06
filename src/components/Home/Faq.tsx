import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  const FAQs = [
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

  const [open, setOpen] = useState(1);

  return (
    <div className="p-4 md:px-40 lg:px-64 xl:px-[400px] flex w-full flex-col gap-2">
      {FAQs.map((faq) => {
        const isActive = open === faq.index;
        return (
          <div key={faq.index} onClick={() => setOpen(faq.index)} className="flex flex-col w-full cursor-pointer">
            <div className=" w-full flex justify-between p-4 text-sky-900 text-lg font-bold tracking-wide rounded-t-md border-b-2 border-gray-200">
              {faq.question}
              {isActive ? (
                <IoIosArrowDown size={20} className="text-gray-500" />
              ) : (
                <IoIosArrowUp size={20} className="text-gray-500" />
              )}
            </div>
            {isActive && (
              <div className=" w-full px-4 py-2 text-sm">{faq.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
