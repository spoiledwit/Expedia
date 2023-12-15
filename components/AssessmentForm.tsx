"use client";

import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import toast from "react-hot-toast";
import axios from "axios";
// import { createAssessment } from "@/lib/assessment";

export type SubmitProps = {
  name: string;
  email: string;
  phone: string;
  job: string;
  education: string;
  nationality: string;
};

const AssessmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [education, setEducation] = useState("");
  const [nationality, setNationality] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const props = { name, email, phone, nationality, education, job };
    if (validateProps(props)) {
      toast.error("Please fill all the fields.");
      return;
    }
    try {
      const response = await axios.post(`/api/contact`, props);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
    setName("");
    setEmail("");
    setEducation("");
    setJob("");
    setNationality("");
    setPhone("");
    e.target.reset();
  };

  // const countries = [
  //   { label: "Pakistan", value: "pakistan" },
  //   { label: "India", value: "india" },
  //   { label: "Bangladesh", value: "bangladesh" },
  // ];

  // const visaTypes = [
  //   { label: "Study Visa", value: "study-visa" },
  //   { label: "Work Visa", value: "work-visa" },
  //   {
  //     label: "Visit Visa",
  //     value: "visit-visa",
  //   },
  // ];

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
      <Input label="Name" onChange={(e) => setName(e.target.value)} />
      <Input label="Phone" onChange={(e) => setPhone(e.target.value)} />
      <Input
        label="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input label="Job Title" onChange={(e) => setJob(e.target.value)} />
      <Input
        label="Education"
        onChange={(e) => setNationality(e.target.value)}
      />
      <Input
        label="Nationality"
        onChange={(e) => setEducation(e.target.value)}
      />
      <button
        disabled={loading}
        type="submit"
        className="mt-4 rounded-lg h-12 px-6 text-white hover:text-primary-gold text-lg bg-transparent border-[2px] border-secondary-blue hover:border-primary-gold transition-all"
      >
        {loading ? "Submitting" : "Submit"}
      </button>
    </form>
  );
};

export default AssessmentForm;
