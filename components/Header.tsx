"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { desktopNav, mobileNavs } from "@/navs";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import InfoHeader from "./Home/InfoHeader";
import { AnimatePresence, motion } from "framer-motion";
import Accordion from "./Accordion";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/logo22.png";
import { usePathname } from "next/navigation";

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
    <div style={{ zIndex: 1000 }}>
      <RiMenu3Fill
        size={24}
        className={`md:hidden text-white cursor-pointer`}
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
              className="w-screen absolute h-screen flex flex-col overflow-y-scroll top-0 left-0 bg-white border-b-[2px] shadow-xl border-gray-400 p-4 transition-all"
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
                  {mobileNavs.map((link, i) => (
                    <div key={link.id} className="flex flex-col w-full">
                      {i !== 0 && (
                        <div className="h-[2px] bg-gray-200 w-1/2 self-center my-[6px]" />
                      )}
                      {link.children ? (
                        <Accordion
                          data={{
                            header: (
                              <Link
                                onClick={onBeforeNavigate}
                                href={link.href}
                                className="hover:text-primary-gold py-1 text-gray-600 transition-all"
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
                                      href={c.href}
                                      className="w-full max-w-[200px] h-10 flex items-center hover:text-primary-gold transition-all"
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
                          href={link.href}
                          className="w-full max-w-[200px] py-1 flex items-center text-gray-700 hover:text-primary-gold transition-all"
                        >
                          {link.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </motion.nav>
              </div>
              <Link
                href={"/"}
                onClick={onBeforeNavigate}
                className=" w-24 h-24 relative self-center mt-8 p-2 rounded-xl"
              >
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={logo.src}
                  alt="logo"
                />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      }
    </div>
  );
};

const Navbar = () => {
  const url = usePathname();
  const pathname = url.substring(url.lastIndexOf("/") - 1);

  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeEle, setActiveEle] = useState<Element | null>(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsVisible(
      !(
        (lastScrollPos > currentScrollPos && currentScrollPos < 100) ||
        currentScrollPos < 100
      )
    );
    
    // setting the header always visible when on payment page
    if (pathname === "/payment") {
      setIsVisible(true);
    }


    setLastScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  const variants = {
    visible: { opacity: 1, height: "auto" },
    hidden: { opacity: 0, height: 0 },
  };

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
        className="px-0 rounded-xl z-[100] overflow-hidden min-w-[180px] rounded-b-md shadow-xl shadow-black/[0.2] bg-white "
      >
        {link.children.map((c) => (
          <Link
            key={c.id}
            href={c.href}
            className="w-full px-6 max-w-[200px] text-xs h-10 flex items-center hover:text-primary-blue hover:bg-gray-100 transition-all"
          >
            {c.title}
          </Link>
        ))}
      </motion.dialog>
    );
  };

  return (
    <>
      <AnimatePresence>
        {pathname === "/" ? (
          <motion.div
            className="md:block"
            variants={variants}
            initial="hidden"
            animate={!isVisible ? "visible" : "hidden"}
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <InfoHeader />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <header
        className={`${
          isVisible ? "bg-white border" : "pt-5"
        } mt-5 mx-5 rounded-full flex flex-col  transition duration-200 ease-in-out z-50`}
      >
        <nav
          className={`w-full flex py-3 items-center justify-between border-gray-200 px-4 xl:px-24`}
        >
          <Link href={"/"} className=" relative w-32 h-12">
            <Image
              objectFit="contain"
              layout="fill"
              src={logo.src}
              alt="centennia"
            />
          </Link>
          <div className="w-full hidden md:block">
            <ul id="desktop-nav" className="w-full flex justify-center">
              {desktopNav.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div
                    id={link.id}
                    key={link.id}
                    className={`${
                      isActive
                        ? "text-primary-gold"
                        : `${
                            isVisible ? "text-black" : "text-white opacity-85"
                          }  hover:text-primary-gold`
                    } relative p-3 text-xs lg:text-sm whitespace-nowrap tracking-wide font-poppins font-medium cursor-pointer transition-all nav-links `}
                  >
                    <Link
                      href={link.href}
                      className="uppercase flex items-center font-semibold text-sm py-2"
                    >
                      <p className="text-xs">{link.title}</p>
                      {link.children && <IoMdArrowDropdown size={16} />}
                    </Link>
                    {link.children && (
                      <LinkDropdown key={link.id} link={link} />
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="hidden lg:block">
              <Link href={"/contact"} className=" button-86">
                Free Assessment
              </Link>
            </div>
          </div>

          {/* placeholder */}
          <div className="lg:hidden" />
          <MobileNav />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
