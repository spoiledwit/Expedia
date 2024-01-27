import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
  ];

  const immigrationCountries = [
    {
      name: "Canada",
      href: "/immigration/canada",
    },
    {
      name: "Australia",
      href: "/immigration/australia",
    },
    {
      name: "Poland",
      href: "/immigration/poland",
    },
    {
      name: "Malta",
      href: "/immigration/malta",
    },
    {
      name: "UK",
      href: "/immigration/uk",
    },
  ];

  const importantLinks = [
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "Submit Your Documents",
      href: "/",
    },
    {
      name: "Privacy Policy",
      href: "/policy/privacy",
    },
    {
      name: "Refund Policy",
      href: "/policy/refund",
    },
    {
      name: "Terms & Conditions",
      href: "/policy/terms_and_conditions",
    },
    {
      name: "Latest News",
      href: "/",
    },
  ];

  return (
    <footer className=" z-10 relative px-8 pt-10 pb-6 md:px-24 xl:px-40 md:pt-10 w-full bg-primary-blue flex flex-col">
      <div className="w-full md:flex hidden flex-col md:flex-row gap-12 md:gap-0 justify-between items-center">
        <div className="w-1/2 md:grid hidden place-items-center"></div>
        <section className=" text-white md:flex hidden text-lg font-medium flex-col w-full">
          <h3 className=" mb-8 text-white font-medium text-2xl md:text-4xl tracking-wide">
            Key Services
          </h3>
          <div className="flex flex-col gap-2">
            <p>1. We predominantly receive inquiries for Europe and Canada.</p>
            <p>
              2. Our bespoke services rank us among the top immigration
              consultants for Canada in Dubai.
            </p>
            <p>
              3. Our quality services have also established us as one of the
              best immigration advisers for Europe in Dubai.
            </p>
          </div>
        </section>
      </div>

      {/* Separator */}
      <div className="my-16 md:block hidden md:my-20 h-[2px] min-w-max mx-20 md:mx-80 bg-primary-blue" />

      <div className="w-full gap-x-5 grid grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-y-0">
        {/* Quick Links */}
        <section className=" w-full flex flex-col gap-8">
          <h3 className="text-xl md:text-2xl font-medium md:font-bold text-white">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2">
            {quickLinks.map((link, i) => (
              <Link
                // onClick={scrollToTop}
                key={i}
                className="text-white hover:text-primary-gold transition-all"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Migrat To */}
        <section className=" w-full flex flex-col gap-8">
          <h3 className="text-xl md:text-2xl font-medium md:font-bold text-white">
            Migrate To
          </h3>
          <div className="flex flex-col gap-2">
            {immigrationCountries.map((link, i) => (
              <Link
                // onClick={scrollToTop}
                key={i}
                className="text-white hover:text-primary-gold transition-all"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Important Links */}
        <section className=" w-full flex flex-col gap-8">
          <h3 className="text-xl md:text-2xl font-medium md:font-bold text-white">
            Important Links
          </h3>
          <div className="flex flex-col gap-2">
            {importantLinks.map((link, i) => (
              <Link
                // onClick={scrollToTop}
                key={i}
                className="text-white hover:text-primary-gold transition-all"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Us */}
        <section className=" w-full flex flex-col gap-8">
          <h3 className="w-full text-xl md:text-2xl font-medium md:font-bold text-white">
            Contact Us
          </h3>
          <div className="flex w-full flex-col gap-2">
            <a
              className=" text-white hover:text-primary-gold transition-all"
              href="/"
            >
              Regal Tower, 1608, Business Bay, Al Mustaqbal Street, Dubai, UAE
            </a>
            <a
              className=" text-white hover:text-primary-gold transition-all"
              href="mailto:info@centennialmigration.com"
            >
              info@centennialmigration.com
            </a>
            <a
              className=" text-white hover:text-primary-gold transition-all"
              href="tel:+971565497013"
            >
              +971565497013
            </a>
            <a
              className=" text-white hover:text-primary-gold transition-all"
              href="tel:+97148928635"
            >
              +97148928635
            </a>
          </div>
        </section>
      </div>

      {/* Social Links */}
      <div className="mt-16 md:mt-0 w-full justify-center md:justify-end gap-8 md:gap-4 flex">
        <a href="https://www.facebook.com/centennialmigration" target="_blank">
          <BsFacebook
            size={24}
            className="text-white hover:text-primary-gold transition-all"
          />
        </a>
        <a
          href="https://www.instagram.com/centennialmigration/"
          target="_blank"
        >
          <BsInstagram
            size={24}
            className="text-white hover:text-primary-gold transition-all"
          />
        </a>
        <a href="https://www.linkedin.com/company/96444883" target="_blank">
          <BsLinkedin
            size={24}
            className="text-white hover:text-primary-gold transition-all"
          />
        </a>
        <a href="https://twitter.com/Centennial_M" target="_blank">
          <BsTwitter
            size={24}
            className="text-white hover:text-primary-gold transition-all"
          />
        </a>
        <a href="https://www.youtube.com/@CentennialMigration" target="_blank">
          <BsYoutube
            size={28}
            className="text-white hover:text-primary-gold transition-all"
          />
        </a>
      </div>
      <hr className="my-5" />
      <div className="flex justify-between">
        <p className=" text-white text-sm">
          © 2021 All Rights Reserved. Centennial Migration
        </p>
        <div className=" md:block hidden relative w-full">
          {/* <Image
            layout="fill"
            objectFit="contain"
            src={payments1.src}
            alt="payment providers"
          /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
