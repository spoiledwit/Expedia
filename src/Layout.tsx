import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <div>
            <div className="w-full fixed top-0 z-50">
            <Header />
            <hr />
            </div>
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
}

export default Layout;