import Hero from "../components/Home/Hero"
import Contact from "../components/Home/Contact"
import Consultancy from "../components/Home/Consultancy"
import About from "../components/Home/About"
import Faq from "../components/Home/FAQ"
import Testimonials from "../components/Home/Testimonials"
import { useEffect } from "react"

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])
  
  return (
    <div className="w-full flex flex-col gap-20 mb-40 ">
      <Hero />
      <Contact />
      <About />
      <Consultancy />
      <Faq />
      <Testimonials />
    </div>
  )
}

export default Home