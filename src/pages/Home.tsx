import Hero from "../components/Home/Hero"
import Contact from "../components/Home/Contact"
import Consultancy from "../components/Home/Consultancy"
import About from "../components/Home/About"
import Faq from "../components/Home/FAQ"
import Testimonials from "../components/Home/Testimonials"


const Home = () => {
  return (
    <div className="w-full flex flex-col gap-20 mb-40 ">
      <Hero />
      <Contact />
      <Consultancy />
      <About />
      <Faq />
      <Testimonials />
    </div>
  )
}

export default Home