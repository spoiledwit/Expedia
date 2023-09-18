import ContactInfo from "./ContactInfo";
import Form from "./Form";

export default function ContactForm() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-12 md:gap-0">
      <div className="hidden w-1 md:block bg-primary-blue mr-10 my-24" />
      <div className=" md:w-3/5 min-w-[240px] mr-10">
        <ContactInfo />
      </div>
      <Form />
    </div>
  );
}
