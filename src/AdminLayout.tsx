import { Outlet } from "react-router-dom";
import Header from "./components/Admin/Header";
import { Toaster } from "react-hot-toast";

const AdminLayout = () => {
  return (
    <div>
      <Toaster />
      <div className="w-full fixed top-0 z-50">
        <Header />
        <hr />
      </div>
      <div className="relative">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
