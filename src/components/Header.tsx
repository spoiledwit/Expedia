import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import styles from "../styles/navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import InfoHeader from "./Home/InfoHeader";
import Logo from "../assets/expedia.png";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [barPosition, setBarPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMatchingNavLink, setIsMatchingNavLink] = useState(false);

  const pathname = location.pathname;

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsVisible(
      !(
        (lastScrollPos > currentScrollPos && currentScrollPos < 100) ||
        currentScrollPos < 100
      )
    );
    setLastScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  useEffect(() => {
    const activeLinkIndex = navLinks.findIndex(
      (link) => location.pathname === link.href
    );
    if (activeLinkIndex === -1) {
      setIsMatchingNavLink(false);
    } else {
      setIsMatchingNavLink(true);
      setBarPosition(activeLinkIndex * 3);
    }
  }, [location]);

  return (
    <header
      className={`${
        pathname === "/" && !isVisible
          ? ""
          : " bg-white bg-opacity-25 backdrop-blur-md"
      } transition duration-200 ease-in-out z-50`}
    >
      {pathname === "/" && !isVisible ? <InfoHeader /> : null}
      <nav className={`${styles.navbar} ${styles.container} px-4 xl:px-24`}>
        <Link
          to={"/"}
          className={`${styles.nav_link} text-xl whitespace-nowrap lg:ml-10 font-bold`}
        >
          <img src={Logo} alt="logo" className="md:h-14 h-12 object-cover" />
        </Link>
        <ul className={`${styles.nav_list} gap-4`}>
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                to={link.href}
                key={index}
                className={`
                ${isActive ? "text-sky-700" : "text-black hover:text-sky-900"}
                text-sm
                tracking-wide
                font-poppins
                font-medium
                cursor-pointer
                transition-all
                whitespace-nowrap
                `}
                onMouseEnter={() => setBarPosition(index * 7)}
                onMouseLeave={() =>
                  setBarPosition(
                    navLinks.findIndex(
                      (link) => location.pathname === link.href
                    ) * 7
                  )
                }
              >
                <p>{link.title.toUpperCase()}</p>
              </Link>
            );
          })}
        </ul>
        <button
          className={`bg-sky-950 hidden lg:block hover:text-yellow-400 mr-10 text-white px-6 rounded-[4px] h-[37px] font-poppins text-sm`}
        >
          Free Assesment
        </button>
        {/* placeholder */}
        <div className="lg:hidden" />
        <div>
          <RiMenu3Fill
            className="w-[24px] text-black cursor-pointer h-[24px]"
            onClick={() => setIsOpen(true)}
          />
          {
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-screen absolute top-0 left-0 bg-white px-4 py-8 transition-all"
                >
                  <div className="flex flex-col w-full">
                    <AiOutlineClose
                      className="w-[24px] self-end text-black cursor-pointer h-[24px]"
                      onClick={() => setIsOpen(false)}
                    />
                    <motion.nav
                      initial={{ y: 32 }}
                      animate={{ y: 0 }}
                      transition={{ ease: "easeOut", duration: 0.15 }}
                      className=" w-full flex flex-col gap-2"
                    >
                      {navLinks.map((link) => (
                        <Link
                          key={link.id}
                          to={link.href}
                          className="w-full max-w-[200px] h-10 flex items-center"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </motion.nav>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
