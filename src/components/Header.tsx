import { useState, useEffect } from "react";
import { navLinks } from "../navs";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import InfoHeader from "./Home/InfoHeader";
import Logo from "../assets/expedia.png";
import { AnimatePresence, motion } from "framer-motion";
import Accordion from "./Accordion";
import { IoIosArrowDown } from "react-icons/io";

type LinkWithChildren = {
  id: string;
  title: string;
  href: string;
  children: { id: string; href: string; title: string }[];
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const onBeforeNavigate = () => {
    setOpenIndex(-1);
    setIsOpen(false);
  };

  return (
    <div>
      <RiMenu3Fill
        className="w-[24px] md:hidden text-black cursor-pointer h-[24px]"
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
              className="w-screen absolute h-screen flex flex-col overflow-y-scroll top-0 left-0 bg-white border-b-[2px] shadow-xl border-gray-300 px-4 py-4 transition-all"
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
                  className=" w-full flex flex-col"
                >
                  {navLinks.map((link, i) => (
                    <div key={link.id} className="flex flex-col w-full">
                      {i !== 0 && (
                        <div className="h-[2px] bg-gray-200 w-1/2 self-center my-[6px]" />
                      )}
                      {link.children ? (
                        <Accordion
                          data={{
                            title: (
                              <Link
                                onClick={onBeforeNavigate}
                                to={link.href}
                                className="hover:text-sky-600 text-gray-600 transition-all"
                              >
                                {link.title}
                              </Link>
                            ),
                            content: (
                              <div className="flex w-full my-3 text-sm text-gray-500">
                                <div className="w-[2px] bg-gray-300 mx-3 py-8" />
                                <div className="w-full">
                                  {link.children.map((c) => (
                                    <Link
                                      onClick={onBeforeNavigate}
                                      key={c.id}
                                      to={c.href}
                                      className="w-full max-w-[200px] h-10 flex items-center hover:text-sky-600 transition-all"
                                    >
                                      {c.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ),
                          }}
                          isOpen={i === openIndex}
                          onClick={() =>
                            i === openIndex ? setOpenIndex(-1) : setOpenIndex(i)
                          }
                        />
                      ) : (
                        <Link
                          onClick={onBeforeNavigate}
                          key={link.id}
                          to={link.href}
                          className="w-full max-w-[200px] flex items-center text-gray-700 hover:text-sky-600 transition-all"
                        >
                          {link.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </motion.nav>
              </div>
              <Link
                to={"/"}
                onClick={onBeforeNavigate}
                className="min-w-max self-center mt-8 opacity-25 grayscale"
              >
                <img src={Logo} alt="logo" className="md:h-14 h-12" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      }
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeEle, setActiveEle] = useState<Element | null>(null);

  const pathname = location.pathname;

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
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
    const linkEles = document.getElementsByClassName("nav-links");
    for (let i = 0; i < linkEles.length; i++) {
      const ele = linkEles.item(i);
      ele?.addEventListener("mouseover", () => {
        setActiveEle(ele);
      });
      ele?.addEventListener("mouseleave", () => {
        setActiveEle(null);
      });
    }
  }, []);

  const LinkDropdown = ({ link }: { link: LinkWithChildren }) => {
    const isOpen = activeEle?.id === link.id;
    return (
      <motion.dialog
        id={link.id}
        open={isOpen}
        animate={{ opacity: 1.0, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{
          ease: "circOut",
          duration: 0.15,
        }}
        className="px-0 z-[100] min-w-[160px] rounded-b-md shadow-xl shadow-black/[0.2] bg-white "
      >
        {link.children.map((c) => (
          <Link
            key={c.id}
            to={c.href}
            className="w-full px-2 max-w-[200px] text-xs h-10 flex items-center hover:text-sky-600 hover:bg-gray-100 transition-all"
          >
            {c.title}
          </Link>
        ))}
      </motion.dialog>
    );
  };

  return (
    <header className="bg-white bg-opacity-25 backdrop-blur-md transition duration-200 ease-in-out z-50">
      {pathname === "/" && !isVisible ? <InfoHeader /> : null}
      <nav className="w-full flex items-center justify-between px-4 xl:px-24">
        <Link to={"/"} className="min-w-max">
          <img src={Logo} alt="logo" className="md:h-14 h-12" />
        </Link>
        <div className="w-full hidden md:block">
          <ul id="desktop-nav" className="w-full flex justify-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <div
                  id={link.id}
                  key={link.id}
                  className={`${
                    isActive ? "text-sky-500" : "text-black hover:text-sky-900"
                  } relative p-3 text-xs tracking-wide font-poppins font-medium cursor-pointer transition-all nav-links `}
                >
                  <Link
                    to={link.href}
                    className="uppercase flex gap-1 items-center py-2"
                  >
                    {link.title}
                    {link.children && <IoIosArrowDown size={12} />}
                  </Link>
                  {link.children && <LinkDropdown key={link.id} link={link} />}
                </div>
              );
            })}
          </ul>
        </div>
        <button
          className={`bg-sky-950 hidden lg:block hover:text-yellow-400 text-white rounded-md h-10 px-10 font-poppins whitespace-nowrap text-sm`}
        >
          Free Assesment
        </button>
        {/* placeholder */}
        <div className="lg:hidden" />
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;
