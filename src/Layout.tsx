import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {AiOutlineArrowUp} from "react-icons/ai";
import { Toaster } from "react-hot-toast";

const Layout = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

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
             <div className="glass fixed p-1 bottom-0 right-0 mr-4 cursor-pointer mb-4">
                <span className="text-4xl hover:text-yellow-500 text-sky-700"
                onClick={() => scrollToTop()}
                >
                    <AiOutlineArrowUp />
                </span>
            </div>
            </div>
        </div>
    );
}

export default Layout;