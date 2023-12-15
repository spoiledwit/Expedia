"use client";

import { useState } from "react";
import Input from "../Input";
import Select from "../Select";
import { toast } from "react-hot-toast";
import axios from "axios";
// import { createContact } from "../../lib/contact";

export type SubmitProps = {
  name: string;
  email: string;
  phone: string;
  job: string;
  education: string;
  nationality: string;
};

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [education, setEducation] = useState("");
  const [nationality, setNationality] = useState("");

  const validateProps = (props: SubmitProps): boolean => {
    return (
      !props.name ||
      !props.email ||
      !props.phone ||
      !props.nationality ||
      !props.job ||
      !props.education
    );
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const props = { name, email, phone, nationality, education, job };
    if (validateProps(props)) {
      toast.error("Please fill all the fields.");
      return;
    }
    const response = await axios.post(`/api/contact`, props);
    toast.success(response.data.message);
    e.target.reset();
  };

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
          <Input label="Job Title" onChange={(e) => setJob(e.target.value)} />
          <Input
            label="Education"
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>
        <Input
          onChange={(e) => setNationality(e.target.value)}
          label="Nationality"
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
