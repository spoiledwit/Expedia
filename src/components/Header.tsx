import { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import styles from "../styles/navbar.module.css";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';
import InfoHeader from './Home/InfoHeader';
import Logo from "../assets/expedia.png"

const Navbar = () => {
  const location = useLocation();
  const [barPosition, setBarPosition] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMatchingNavLink, setIsMatchingNavLink] = useState(false);

  const pathname = location.pathname;

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsVisible(!((lastScrollPos > currentScrollPos && (currentScrollPos < 100)) || currentScrollPos < 100));
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
    const activeLinkIndex = navLinks.findIndex(link => location.pathname === link.href);
    if (activeLinkIndex === -1) {
      setIsMatchingNavLink(false);
    } else {
      setIsMatchingNavLink(true);
      setBarPosition(activeLinkIndex * 3);
    }
  }, [location]);

  return (
    <header className={`${pathname === "/" && !isVisible ? "" : " bg-white bg-opacity-25 backdrop-blur-md"} transition duration-200 ease-in-out z-50`}>
      {pathname === "/" && !isVisible ? <InfoHeader /> : null}
      <nav className={`${styles.navbar} ${styles.container} px-28`}>
        <Link to={"/"} className={`${styles.nav_link} text-xl whitespace-nowrap lg:ml-10 font-bold`}>
          <img src={Logo} alt="logo" className="h-[60px] object-cover" />
        </Link>
        <ul className={`${styles.nav_list}`}>
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <Link to={link.href} key={index}
                className={`
                text-[15px]
                font-poppins
                font-medium
                "text-white"
                hover:text-yellow-500
                cursor-pointer
                transition
                duration-200
                ease-in-out
                lg:mr-10
                `}
                onMouseEnter={() => setBarPosition(index * 7)}
                onMouseLeave={() => setBarPosition(navLinks.findIndex(link => location.pathname === link.href) * 7)}
              >
                <p>
                  {link.title.toUpperCase()}
                </p>
              </Link>
            )
          })}
          </ul>
        <button className= {`bg-sky-950 hover:text-yellow-400 mr-10 text-white px-6 rounded-[4px] h-[37px] font-poppins text-sm`}>Free Assesment</button>
        <div className={`${styles.hb} flex-1 justify-end items-center`}>
          {toggle ? <AiOutlineClose className="w-[28px] text-white cursor-pointer h-[28px] object-contain" onClick={() => setToggle(!toggle)} /> : <RiMenu3Fill className="w-[28px] text-white cursor-pointer h-[28px] object-contain" onClick={() => setToggle(!toggle)} />}
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className={`list-none z-50 flex justify-end items-start flex-1 flex-col bg-fuchsia-900 p-10 rounded-3xl`}>
              {navLinks.map((nav, index) => (
                <Link
                  to={nav.href}
                  onClick={() => setToggle(!toggle)}
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-white text-[16px] 
                 ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                >
                  <p>{nav.title}</p>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;