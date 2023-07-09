import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const FAB = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const [visible, setVisible] = useState(false);
    window.addEventListener("scroll", () => {
      window.scrollY > 400 ? setVisible(true) : setVisible(false);
    });

    return (
      <AnimatePresence>
        {visible ? (
          <motion.div
          key={'fab'}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass text-2xl md:text-3xl hover:text-yellow-500 text-sky-700 transition-all fixed p-2 bottom-0 right-0 mr-4 cursor-pointer mb-4"
          >
            <span onClick={() => scrollToTop()}>
              <AiOutlineArrowUp />
            </span>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div>
      <Toaster />
      <div className="w-full fixed top-0 z-50">
        <Header />
        <hr />
      </div>
      <div className="relative">
        <Outlet />
        <Footer />
        <FAB />
      </div>
    </div>
  );
};

export default Layout;
