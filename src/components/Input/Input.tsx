import "./styles.module.css";

const Input = ({
  label,
  type,
  onChange,
}: {
  label: string;
  type?: "text" | "number" | "email";
  onChange: (e: any) => void;
}) => {
  return (
    <div className="relative z-0">
      <input
        onChange={onChange}
        type={type || "text"}
        id="name"
        className="block appearance-none py-2.5 px-0 w-full h-10 bg-transparent caret-sky-500 text-gray-200 border-b-[2px] border-sky-700 focus:border-sky-500 outline-none ring-0 focus:delay-[99999] peer"
        placeholder=" "
      />
      <label
        htmlFor="name"
        className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
