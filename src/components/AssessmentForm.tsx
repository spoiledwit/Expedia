type InputProps = {
  label: string;
};
const Input: React.FC<InputProps> = ({ label }) => (
  <div className="flex flex-col">
    <label className="text-white">{label}</label>
    <input className="border border-white rounded-md h-10 pl-2 bg-transparent text-white" />
  </div>
);

type SelectProps = {
  label: string;
  options: string[];
};

const Select: React.FC<SelectProps> = ({ label, options }) => (
  <div className="flex flex-col">
    <label className="text-white">{label}</label>
    <select className="border border-white rounded-md h-10 pl-2 bg-transparent text-white">
      {options.map((option) => (
        <option key={option} className="text-black">
          {option}
        </option>
      ))}
    </select>
  </div>
);

const AssessmentForm = ({onSubmit}:{onSubmit:(e:any) => void}) => {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4 bg-sky-950 rounded-xl p-4">
      <Input label="Name" />
      <Input label="Phone" />
      <Input label="Email" />
      <Input label="Job Title" />
      <Input label="Education" />
      <Select label="Country" options={["Pakistan", "India", "Bangladesh"]} />
      <Select
        label="Visa Service"
        options={["Study Visa", "Work Visa", "Visit Visa"]}
      />
    </form>
  );
};

export default AssessmentForm;
