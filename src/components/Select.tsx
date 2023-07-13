const Select = ({
  options,
  onChange,
  defaultLabel,
}: {
  options: { label: string; value: string }[];
  onChange: (e: any) => void;
  defaultLabel: string;
}) => {
  return (
    // ! `defaultValue` prop does not work
    <select
      onChange={onChange}
      className="bg-transparent text-white border border-secondary-blue text-sm rounded-lg focus:ring-secondary-blue focus:border-secondary-blue block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value={""} label={defaultLabel} />
      {options.map((op) => (
        <option
          key={op.value}
          className="text-black capitalize"
          label={op.label}
          value={op.value}
        />
      ))}
    </select>
  );
};

export default Select;
