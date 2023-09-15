import Image from "next/image";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { MdOutlineJoinRight } from "react-icons/md";
import { RiCustomerService2Fill, RiReplyAllLine } from "react-icons/ri";
import { GiProcessor } from "react-icons/gi";
import { AiOutlineFileDone, AiOutlineFileSearch } from "react-icons/ai";
import line from "../../assets/line.svg";

type Info = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function InfoCard({ info }: { info: Info }) {
  return (
    <div className="w-full h-full pb-8 px-12 flex bg-white shadow-xl border-t-2 rounded-lg flex-col justify-between items-center z-10">
      <div className="w-16 aspect-square -translate-y-1/2 grid place-items-center bg-primary-blue rounded-full">
        {info.icon}
      </div>
      <section className="flex h-full justify-between flex-col gap-4">
        <h3 className="text-xl md:text-2xl text-center font-medium md:font-bold text-primary-blue">
          {info.title}
        </h3>
        <p className="text-black text-center text-sm">{info.description}</p>
        <div />
      </section>
    </div>
  );
}

export default function Info() {
  const infos: Info[] = [
    {
      icon: <AiOutlineFileDone size={40} color="#e0c98d" />,
      title: "Register Online",
      description:
        "A person with the required work experience and skills can immigrate to a foreign country, register through our website and give wings to your dream.",
    },
    {
      icon: <RiReplyAllLine size={40} color="#e0c98d" />,
      title: "Quick Response",
      description:
        "After registering with us, you can expect a call from our experts. We offer free consultations!",
    },
    {
      icon: <GiProcessor size={40} color="#e0c98d" />,
      title: "Know The Process",
      description:
        "Our registered consultants will let you know your requirements and application process after reviewing your details.",
    },
    {
      icon: <MdOutlineJoinRight size={40} color="#e0c98d" />,
      title: "Join Us",
      description:
        "The signup process is convenient & hassle-free. You can use our online payment gateway to start your process quickly and work on gathering the documents.",
    },
    {
      icon: <AiOutlineFileSearch size={40} color="#e0c98d" />,
      title: "Documentation",
      description:
        "Our highly experienced process officers will leave no stone unturned to arrange the documents properly to get you a nomination from the federal or provincial government.",
    },
    {
      icon: <FaDownLeftAndUpRightToCenter size={40} color="#e0c98d" />,
      title: "Submission",
      description:
        "After receiving the provincial or sponsor nomination, our MARA and RCIC representation will file your application, ensuring it is 100% error-free and perfect.",
    },
    {
      icon: <BiSolidPlaneAlt size={40} color="#e0c98d" />,
      title: "Get Ready To Fly",
      description:
        "Register with Centennial Migration today, the best immigration consultants in the Middle East. We are based in seven countries having over 15 offices with 300-plus experts!",
    },
    {
      icon: <RiCustomerService2Fill size={40} color="#e0c98d" />,
      title: "Post-landing Services",
      description:
        "Our services don’t end here. We are holding your hands until you migrate to your destination. We will help you to complete pre and post-landing formalities and help you settle in your destination.",
    },
  ];

  return (
    <div className="relative">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20 md:gap-x-8 md:gap-y-20 my-20 px-16 md:px-20 xl:px-40">
        {infos.map((info) => (
          <InfoCard key={info.title} info={info} />
        ))}
      </div>
      <Image
        layout="fill"
        objectFit="contain"
        src={line.src}
        className="lg:block hidden absolute xl:top-[21%] left-0 w-full px-20 -z-0"
        alt="useful info track"
      />
    </div>
  );
}
