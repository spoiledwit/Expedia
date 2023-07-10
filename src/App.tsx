import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import AboutPage from "./pages/AboutUs";
import ImmigrationPage from "./pages/Immigration";
import ContactUsPage from "./pages/ContactUs";
import PolicyPage from "./pages/Policy";
import { useCookies } from "react-cookie";
import Login from "./pages/Login";
import AdminPage from "./pages/Admin/Contacts";
import AdminLayout from "./AdminLayout";
import UsersPage from "./pages/Admin/Users";

const App = () => {
  const [cookies] = useCookies(["Authorization"]);
  const isAdminLoggedIn = () => {
    return !!cookies.Authorization;
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/immigration/:country/" element={<ImmigrationPage />} />
        <Route
          path="/immigration/:country/:plan"
          element={<ImmigrationPage />}
        />
        <Route path="/policy/:article" element={<PolicyPage />} />
      </Route>
      <Route
        path="/admin"
        element={isAdminLoggedIn() ? <AdminLayout /> : <Login />}
      >
        <Route path="/admin/" element={<AdminPage />} />
        <Route path="/admin/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};

export default App;
