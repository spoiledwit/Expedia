import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const FAB = () => {
    function handleClick() {
      console.log("whatsapp");
    }

    return (
      <AnimatePresence>
        <motion.div
          key={"fab"}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-[#25D366] rounded-lg text-2xl md:text-3xl text-white hover:scale-110 hover:-translate-y-1 transition-all fixed p-2 bottom-0 right-0 mr-4 cursor-pointer mb-4"
        >
          <span onClick={handleClick}>
            <AiOutlineWhatsApp />
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
