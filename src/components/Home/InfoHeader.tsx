import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiLogoTwitter } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";

const InfoHeader = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row px-4 py-2 md:py-0 md:px-16 xl:px-40 h-16 md:h-10 justify-between items-center bg-sky-950 text-white text-sm">
        <div className=" w-full md:w-max flex md:gap-4 justify-between">
          <div className="flex items-center">
            <AiOutlineMail className="mr-2" size={18} />
            <a href="/" className=" whitespace-nowrap">
              info@skypass.com
            </a>
          </div>
          <div className="h-4 hidden md:block w-0.5 bg-yellow-500"></div>
          <div className="flex items-center">
            <AiOutlineClockCircle className="mr-2" size={18} />
            <a href="/" className=" whitespace-nowrap">
              Mon - Fri: 9:00 - 18:00
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <BsFacebook
            size={18}
            className="mr-3 hover:text-yellow-400 cursor-pointer transition-all"
          />
          <BiLogoTwitter
            size={23}
            className="mr-2 hover:text-yellow-400 cursor-pointer transition-all"
          />
          <AiFillYoutube
            size={23}
            className="hover:text-yellow-400 cursor-pointer transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
