import ContactForm from "../components/ContactUs/ContactUsForm/ContactFrom";
import Hero from "../components/ContactUs/Hero";
import Map from "../components/ContactUs/Map";

const ContactUsPage = () => {
  return (
    <div className=" w-full mb-20">
      <Hero />
      <div className="my-40 px-4 md:px-24 lg:px-48 xl:px-80">
        <ContactForm />
      </div>
      <Map />
    </div>
  );
};

export default ContactUsPage;
