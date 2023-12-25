import ContactForm from "@/components/ContactUs/ContactSection";
import Hero from "@/components/ContactUs/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Centennial Migration",
  description:
    "Centennial Migration are among the best visa consultancy in UAE, and India, with affordable prices, high success rates, and hassle-free service.",
};

const ContactUsPage = () => {
  return (
    <div className="w-full mb-20">
      <Hero />
      <div className="w-full my-20 md:my-40 px-4 md:px-24 lg:px-48 xl:px-80">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsPage;
