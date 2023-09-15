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
      className="bg-transparent text-white border border-[#e0c98d] text-sm rounded-lg focus:ring-[#e0c98d] focus:border-[#e0c98d] block w-full p-2.5 dark:focus:ring-[#e0c98d] dark:focus:border-[#e0c98d]"
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
