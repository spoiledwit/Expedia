import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { useState } from "react";
import Input from "../Input";
import Select from "../Select";
import { toast } from "react-hot-toast";
import { createContact } from "../../lib/contact";

const Info = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <section className=" w-full flex flex-col gap-4 ">
        <h2 className="capitalize text-2xl md:text-4xl font-medium text-sky-700 tracking-wide">
          Contact Info
        </h2>
        <p>
          Reach us using below details our consultants are 24/7 available for
          you!
        </p>
      </section>

      <div className="w-full h-full flex md:flex-col items-center justify-between md:gap-12">
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
        <div className="md:w-full flex flex-col md:flex-row justify-center gap-6 md:gap-4">
          <a href="/">
            <BsFacebook
              size={24}
              className="text-sky-500 hover:text-yellow-400 transition-all"
            />
          </a>
          <a href="/">
            <BsTwitter
              size={24}
              className="text-sky-500 hover:text-yellow-400 transition-all"
            />
          </a>
          <a href="/">
            <BsYoutube
              size={24}
              className="text-sky-500 hover:text-yellow-400 transition-all"
            />
          </a>
        </div>

        {/* placeholder */}
        <div />
      </div>
      <div />
    </div>
  );
};

export type SubmitProps = {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  country: string;
  text: string;
};

const Form = ({
  onSubmit,
}: {
  onSubmit: (props: SubmitProps, e: any) => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [country, setCountry] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({ name, email, phone, jobTitle, country, text }, e);
  };

  const countries = [
    {
      value: "canada",
      label: "Canada",
    },
    {
      value: "australia",
      label: "Australia",
    },
    {
      value: "uk",
      label: "UK",
    },
    {
      value: "europe",
      label: "Europe",
    },
  ];

  return (
    <div className="w-full p-8 bg-sky-700 rounded-xl shadow-2xl shadow-gray-500 flex flex-col gap-4">
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
          <Input
            label="Job Title"
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <Select
            options={countries}
            defaultLabel="Select a Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="w-full h-32 caret-sky-500 text-gray-200 bg-transparent border-[2px] border-sky-700 focus:border-sky-500 outline-none ring-0 transition-all rounded-xl p-4"
        />
        <button
          type="submit"
          className="mt-4 rounded-xl h-12 px-6 text-white hover:text-yellow-300 text-lg self-end bg-transparent border-[2px] border-sky-300 hover:border-sky-500 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const ContactForm = () => {
  const validateProps = (props: SubmitProps): boolean => {
    return (
      !props.name || !props.email || !props.phone || !props.text || !props.country
    );
  };

  const handleSubmit = async (props: SubmitProps, e: any) => {
    e.preventDefault();

    if (validateProps(props)) {
      toast.error("Please fill all the fields.");
      return;
    }
    const success = await createContact(props);
    if (success) {
      toast.success("Message sent successfully!");
      e.target.reset();
    } else {
      toast.error("Unable to submit form!");
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-12 md:gap-0">
      <div className="hidden w-1 md:block bg-sky-500 mr-10 my-24" />
      <div className=" md:w-3/5 min-w-[240px] mr-10">
        <Info />
      </div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default ContactForm;
