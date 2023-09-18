import Head from "next/head";
import ContactForm from "@/components/ContactUs/ContactSection";
import Hero from "@/components/ContactUs/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Expedia",
  description: "Contact Us | Expedia",
};

const ContactUsPage = () => {
  return (
    <div className="w-full mb-20">
      <Head>
        <title>Contact Us | Expedia</title>
        <meta name="description" content="About Us | Expedia" />
      </Head>

      <Hero />
      <div className="w-full my-20 md:my-40 px-4 md:px-24 lg:px-48 xl:px-80">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsPage;
