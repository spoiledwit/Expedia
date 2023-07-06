import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

type SubmitProps = {
  name: string;
  email: string;
  phone: string;
  job: string;
  education: string;
  country: string;
  visaType: string;
};

const AssessmentForm = ({
  onSubmit,
}: {
  onSubmit: (e: SubmitProps) => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [education, setEducation] = useState("");
  const [country, setCountry] = useState("");
  const [visaType, setVisaType] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({ name, email, phone, job, education, country, visaType });
  };

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
      <Input label="Education" onChange={(e) => setEducation(e.target.value)} />
      <Select
        onChange={(e) => setCountry(e.target.value)}
        options={["Pakistan", "India", "Bangladesh"]}
      />
      <Select
        onChange={(e) => setVisaType(e.target.value)}
        options={["Study Visa", "Work Visa", "Visit Visa"]}
      />
      <button
        type="submit"
        className="mt-4 rounded-lg h-12 px-6 text-white hover:text-yellow-300 text-lg bg-transparent border-[2px] border-sky-700 hover:border-sky-500 transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default AssessmentForm;
