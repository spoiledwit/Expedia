import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

export default function ContactInfo() {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <section className=" w-full flex flex-col gap-4 ">
        <h2 className="capitalize text-2xl md:text-4xl font-medium text-primary-blue tracking-wide">
          Contact Info
        </h2>
        <p>
          Reach us using below details our consultants are 24/7 available for
          you!
        </p>
      </section>

      <div className="w-full h-full flex md:flex-col items-center justify-between md:gap-12">
        <div className=" w-full flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <div className="w-6">
              <AiFillPhone size={24} className="text-primary-gold" />
            </div>
            <section className="w-full flex flex-col">
              <h5 className=" text-lg tracking-wide font-bold text-gray-700">
                Phone
              </h5>
              <a href="/" className=" text-primary-blue text-sm">
                +971565497013
              </a>
            </section>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-6">
              <MdEmail size={24} className="text-primary-gold" />
            </div>
            <section className="w-full flex flex-col">
              <h5 className=" text-lg tracking-wide font-bold text-gray-700">
                Email
              </h5>
              <a href="/" className=" text-primary-blue text-sm">
                info@centennialmigration.com
              </a>
            </section>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-6">
              <FaLocationDot size={24} className="text-primary-gold" />
            </div>
            <section className="w-full flex flex-col">
              <h5 className=" text-lg tracking-wide font-bold text-gray-700">
                Location
              </h5>
              <a href="/" className=" text-primary-blue text-sm">
                Regal Tower, 1608, Business Bay, Al Mustaqbal Street, Dubai, UAE
              </a>
            </section>
          </div>
        </div>

        {/* Social Links */}
        <div className="md:w-full flex flex-col md:flex-row justify-center gap-6 md:gap-4">
          <a href="https://www.facebook.com/centennialmigration">
            <BsFacebook
              size={24}
              className="text-primary-blue hover:text-primary-gold transition-all"
            />
          </a>
          <a href="https://twitter.com/Centennial_M">
            <BsTwitter
              size={24}
              className="text-primary-blue hover:text-primary-gold transition-all"
            />
          </a>
          <a href="https://www.youtube.com/@CentennialMigration">
            <BsYoutube
              size={24}
              className="text-primary-blue hover:text-primary-gold transition-all"
            />
          </a>
        </div>

        {/* placeholder */}
        <div />
      </div>
      <div />
    </div>
  );
}
