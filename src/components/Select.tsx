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
      className="bg-transparent text-white border border-sky-600 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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