import { useCookies } from "react-cookie";

export default function Header() {
  const [_, __, removeCookie] = useCookies(["Authorization"]);

  return (
    <div className="w-full h-16 px-4 flex justify-between items-center border-b-[2px] border-gray-300">
      <h2 className=" text-2xl font-bold text-black">Admin</h2>
      <button
        className="disabled:cursor-wait bg-green-500 hover:bg-green-400 disabled:bg-gray-500 disabled:hover:bg-gray-500 border rounded-lg px-6 flex items-center justify-center text-white h-10 outline-none"
        onClick={() => removeCookie("Authorization")}
      >
        Log out
      </button>
    </div>
  );
}
