import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const FAB = () => {
    function handleClick() {
      console.log("wHaTSupp");
    }

    return (
      <AnimatePresence>
        <motion.div
          key={"fab"}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-[#25D366] rounded-lg text-white hover:scale-110 hover:-translate-y-1 transition-all fixed p-2 bottom-8 md:bottom-4 right-4 cursor-pointer"
        >
          <span onClick={handleClick}>
            <AiOutlineWhatsApp className=" text-4xl" />
          </span>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div>
      <Toaster />
      <div className="w-full fixed top-0 z-50">
        <Header />
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
