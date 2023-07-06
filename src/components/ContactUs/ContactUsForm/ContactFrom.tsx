import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { useState } from "react";
import "./styles.module.css";

const Info = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <section className=" w-full flex flex-col gap-4">
        <h2 className="capitalize text-2xl md:text-4xl font-medium text-sky-900 tracking-wide">
          Contact Info
        </h2>
        <p>
          Reach us using below details our consultants are 24/7 available for
          you!
        </p>
      </section>

      <div className=" w-full flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <div className="w-6">
            <AiFillPhone size={24} className="text-yellow-500" />
          </div>
          <section className="w-full flex flex-col">
            <h5 className=" text-lg tracking-wide font-bold text-gray-700">
              Phone
            </h5>
            <a href="/" className=" text-sky-700 text-sm">
              +01 2345678910
            </a>
          </section>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-6">
            <MdEmail size={24} className="text-yellow-500" />
          </div>
          <section className="w-full flex flex-col">
            <h5 className=" text-lg tracking-wide font-bold text-gray-700">
              Email
            </h5>
            <a href="/" className=" text-sky-700 text-sm">
              example@domain.com
            </a>
          </section>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-6">
            <FaLocationDot size={24} className="text-yellow-500" />
          </div>
          <section className="w-full flex flex-col">
            <h5 className=" text-lg tracking-wide font-bold text-gray-700">
              Location
            </h5>
            <a href="/" className=" text-sky-700 text-sm">
              Address House No. -, Street --, City
            </a>
          </section>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-4 w-full justify-center gap-4 flex">
        <a href="/">
          <BsFacebook
            size={24}
            className="text-sky-700 hover:text-yellow-400 transition-all"
          />
        </a>
        <a href="/">
          <BsTwitter
            size={24}
            className="text-sky-700 hover:text-yellow-400 transition-all"
          />
        </a>
        <a href="/">
          <BsYoutube
            size={24}
            className="text-sky-700 hover:text-yellow-400 transition-all"
          />
        </a>
      </div>
    </div>
  );
};

type SubmitProps = {
  name: string;
  email: string;
  phone: string;
  job: string;
  service: string;
  message: string;
};

const Form = ({ onSubmit }: { onSubmit: (props: SubmitProps) => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({ name, email, phone, job, service, message });
  };

  return (
    <div className="w-full p-8 bg-sky-950 rounded-xl shadow-2xl shadow-gray-500 flex flex-col gap-4">
      <h2 className="text-2xl md:text-4xl font-medium text-white tracking-wide">
        Get In Touch With Us!
      </h2>
      <p className=" text-gray-200 tracking-wide">
        Send us your message with your contact details by filling out this form
        one of our consultants will get to you ASAP. Name
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col gap-8"
      >
        <Input label="Name" onChange={(e) => setName(e.target.value)} />
        <div className="w-full grid grid-cols-2 gap-8">
          <Input
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input label="Phone" onChange={(e) => setPhone(e.target.value)} />
          <Input label="Job Title" onChange={(e) => setJob(e.target.value)} />

          <select
            id="countries"
            defaultValue={"canada"}
            onChange={(e) => setService(e.target.value)}
            className="bg-transparent text-white border border-sky-600 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option className="text-black" value="canada">
              Canada
            </option>
            <option className="text-black" value="australia">
              Australia
            </option>
            <option className="text-black" value="uk">
              UK
            </option>
            <option className="text-black" value="europe">
              Europe
            </option>
          </select>
        </div>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-32 caret-sky-500 text-gray-200 bg-transparent border-[2px] border-sky-700 focus:border-sky-500 outline-none ring-0 transition-all rounded-xl p-4"
        />

        <button
          type="submit"
          className="mt-4 rounded-xl h-12 px-6 text-white hover:text-yellow-400 font-bold text-lg self-end bg-transparent border-[2px] border-sky-700 hover:border-sky-500 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const ContactForm = () => {
  const handleSubmit = (props: SubmitProps) => {
    console.log(Object.values(props));
  };

  return (
    <div className="w-full flex gap-12 md:gap-0">
      <div className="hidden w-1 md:block bg-sky-500 mr-10 my-24" />
      <div className=" w-3/5 min-w-[240px] mr-10">
        <Info />
      </div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default ContactForm;

const Input = ({
  label,
  type,
  onChange,
}: {
  label: string;
  type?: "text" | "number" | "email";
  onChange: (e: any) => void;
}) => {
  return (
    <div className="relative z-0">
      <input
        onChange={onChange}
        type={type || "text"}
        id="name"
        className="block appearance-none py-2.5 px-0 w-full h-10 bg-transparent caret-sky-500 text-gray-200 border-b-[2px] border-sky-700 focus:border-sky-500 outline-none ring-0 focus:delay-[99999] peer"
        placeholder=" "
      />
      <label
        htmlFor="name"
        className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};
