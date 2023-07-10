import { useEffect } from "react";
import ContactForm from "../components/ContactUs/ContactFrom";
import Hero from "../components/ContactUs/Hero";
import {Helmet} from "react-helmet";

const ContactUsPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])
  

  return (
    <div className="w-full mb-20">

<Helmet>
        <title>Contact Us | Expedia</title>
        <meta name="description" content="About Us | Expedia" />
      </Helmet>
      <Hero />
      <div className="w-full my-20 md:my-40 px-4 md:px-24 lg:px-48 xl:px-80">
        <ContactForm />
      </div>
      {/* <Map /> */}
    </div>
  );
};

export default ContactUsPage;
