const Select = ({
  options,
  onChange,
}: {
  options: string[];
  onChange: (e: any) => void;
}) => {
  return (
    <select
      defaultValue={options[0] || ""}
      onChange={onChange}
      className="bg-transparent text-white border border-secondary-blue text-sm rounded-lg focus:ring-secondary-blue focus:border-secondary-blue block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {options.map((op) => (
        <option key={op} className="text-black capitalize" value={op}>
          {op}
        </option>
      ))}
    </select>
  );
};

export default Select;