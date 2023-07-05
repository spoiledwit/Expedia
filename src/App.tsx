import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout"
import AboutPage from "./pages/AboutUsPage"
import SkeletonImmigration from "./skeletons/Immigration"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/immigration" element={<SkeletonImmigration />} />
        </Route>
      </Routes>
    )
}

export default App