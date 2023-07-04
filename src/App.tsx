import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    )
}

export default App