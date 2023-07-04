import { AiOutlineMail } from "react-icons/ai"
import { AiOutlineClockCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { BiLogoTwitter } from "react-icons/bi"
import { AiFillYoutube } from "react-icons/ai"

const InfoHeader = () => {
  return (
    <div>
      <div className="flex px-44 min-h-[40px] justify-between items-center bg-sky-950 text-white text-sm">
        <div
          className="flex gap-3 items-center"
        >
          <div className="flex items-center">
            <AiOutlineMail className="mr-2" size={18} />
            <p>
              info@skypass.com
            </p>
          </div>
          <div className="h-4 w-0.5 bg-yellow-500"></div>
          <div className="flex items-center">
            <AiOutlineClockCircle className="mr-2" size={18} />
            <p>
              Mon - Fri: 9:00 - 18:00
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <BsFacebook size={18} className="mr-3 hover:text-yellow-400 cursor-pointer" />
          <BiLogoTwitter size={23} className="mr-2 hover:text-yellow-400 cursor-pointer" />
          <AiFillYoutube size={23} className="hover:text-yellow-400 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default InfoHeader