import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout"
import AboutPage from "./pages/AboutUs"
import ImmigrationPage from "./pages/Immigration"
import ContactUsPage from "./pages/ContactUs"
import PolicyPage from './pages/Policy'
import SubImmigrationPage from "./pages/SubImmigrationPage"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/immigration/:country" element={<ImmigrationPage />} />
          <Route path="/immigration/:country/:plan" element={<SubImmigrationPage />} />
          <Route path="/policy/:article" element={<PolicyPage />} />
        </Route>
      </Routes>
    )
}

export default App