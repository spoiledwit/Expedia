"use client";

import { useState } from "react";
import Input from "../Input";
import Select from "../Select";
import { toast } from "react-hot-toast";
// import { createContact } from "../../lib/contact";

export type SubmitProps = {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  country: string;
  text: string;
};

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [country, setCountry] = useState("");
  const [text, setText] = useState("");

  const validateProps = (props: SubmitProps): boolean => {
    return (
      !props.name ||
      !props.email ||
      !props.phone ||
      !props.text ||
      !props.country
    );
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const props = { name, email, phone, text, country, jobTitle };

    if (validateProps(props)) {
      toast.error("Please fill all the fields.");
      return;
    }
    // const success = await createContact(props);
    // if (success) {
    //   toast.success("Message sent successfully!");
    //   e.target.reset();
    // } else {
    //   toast.error("Unable to submit form!");
    // }
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
    <div className="w-full p-8 bg-primary-blue rounded-xl shadow-2xl shadow-gray-500 flex flex-col gap-4">
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
          className="w-full h-32 caret-primary-gold text-gray-200 bg-transparent border-[2px] border-white/30 focus:border-primary-gold outline-none ring-0 transition-all rounded-xl p-4"
        />
        <button
          type="submit"
          className="mt-4 rounded-xl h-12 px-6 text-white hover:text-primary-gold text-lg self-end bg-transparent border-[2px] border-primary-blue hover:border-primary-blue transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
