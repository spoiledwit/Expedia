import { ImQuotesRight } from "react-icons/im";

type Testemonial = {
  customerName: string;
  text: string;
  rating: number;
};

const TestimonialCard = ({testimonial}:{testimonial: Testemonial}) => {
  return (
    <div className="w-full border-[1px] border-gray-200 rounded-2xl shadow-xl flex flex-col justify-between items-center">
      <div className="h-max flex flex-col items-end px-4 pt-4 md:pt-8 rounded-t-2xl">
        <p className="font-semibold text-slate-500 tracking-tight text-sm text-center">
          {testimonial.text}
        </p>
        <ImQuotesRight size={48} color="#e2e8f0" />
      </div>
      <div className="bg-slate-100 h-20 w-full grid place-items-center rounded-b-2xl">
        <strong className="font-serif  text-gray-600 italic font-light text-center">
          {testimonial.customerName}
        </strong>
      </div>
    </div>
  );
};

const Testimonials = () => {

  const testimonials: Testemonial[] = [
    {
      customerName: "John Doe",
      rating: 4.7,
      text: "Highly dedicated and professional immigration advisers helping to achieve Canadian immigration goals. Entire team were quite supportive throughout the process and assisted me in precisely step-by-step. Keep up the good work guys; hope you all will help millions of people like me to reach their milestones."
    },
    {
      customerName: "Kim Foe",
      rating: 5.0,
      text: "Highly dedicated and professional immigration advisers helping to achieve Canadian immigration goals. Entire team were quite supportive throughout the process and assisted me in precisely step-by-step. Keep up the good work guys; hope you all will help millions of people like me to reach their milestones."
    },
    {
      customerName: "Haly Asper",
      rating: 5.0,
      text: "Highly dedicated and professional immigration advisers helping to achieve Canadian immigration goals. Entire team were quite supportive throughout the process and assisted me in precisely step-by-step. Keep up the good work guys; hope you all will help millions of people like me to reach their milestones."
    },
  ]

  return <div className="w-full p-4 md:px-40 grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-20">
    {
      testimonials.map((t, i) => (
        <TestimonialCard key={i} testimonial={t} />
      ))
    }
  </div>;
};

export default Testimonials;
