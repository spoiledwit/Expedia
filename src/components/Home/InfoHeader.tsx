import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiLogoTwitter } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const InfoHeader = () => {
  return (
    <div>
      <div className="flex px-10 md:flex-row py-2 md:py-0 md:px-16 xl:px-40 h-16 md:h-10 justify-between items-center bg-primary-blue text-white text-sm">
        <div className=" w-full md:w-max flex md:gap-4 justify-between">
          <div className="flex items-center">
            <AiOutlineMail className="mr-2" size={18} />
            <a href="/" className=" whitespace-nowrap">
              info@skypass.com
            </a>
          </div>

          <div className="h-4 hidden md:block w-0.5 bg-primary-gold"></div>
          <div className="md:flex hidden items-center">
            <AiOutlineClockCircle className="mr-2" size={18} />
            <a href="/" className=" whitespace-nowrap">
              Mon - Fri: 9:00 - 18:00
            </a>
          </div>

          <div className="h-4 hidden md:block w-0.5 bg-primary-gold"></div>
          <div className="md:flex hidden items-center">
            <AiOutlinePhone className="mr-2" size={18} />
            <a href="/" className=" whitespace-nowrap">
              +1 234 567 890
            </a>
          </div>
        </div>



        <div className="flex items-center">
          <BsFacebook
            size={18}
            className="mr-3 hover:text-primary-gold cursor-pointer transition-all"
          />
          <BiLogoTwitter
            size={23}
            className="mr-2 hover:text-primary-gold cursor-pointer transition-all"
          />
          <AiFillYoutube
            size={23}
            className="hover:text-primary-gold cursor-pointer transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
