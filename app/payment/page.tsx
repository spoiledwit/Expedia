'use client'
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import Input from "@/components/Input";
import toast from "react-hot-toast";

const ContactUsPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!name || !email || !amount) {
      return toast.error("Please fill all the fields");
    }
    setLoading(true);
    try {
      setAmount(amount);
      const res = await axios.post("https://centennialpayment.vercel.app/orders", {
        amount: amount * 100,
        currency: "AED",
        customerEmail: email,
      });
      const paymentLink = res.data._links.payment.href;
      //redirecting to the payment page
      window.open(paymentLink, "_blank");

    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen mb-20">
      <Head>
        <title>Payment | Centennial Migration</title>
        <meta name="description" content="About Us | Expedia" />
      </Head>
      <div className="md:px-32 mt-40 px-10">
       <h2 className=" font-serif text-center text-4xl">Pay Online</h2>
       <div
       className=" bg-primary-blue rounded-lg shadow-lg p-10 mt-10 flex flex-col gap-5"
       >
       <Input
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Amount"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          disabled={loading}
          className={`bg-primary-gold text-primary-blue mt-5 p-2 rounded-lg`}
          onClick={handlePayment}
        >
        {loading ? "processing..." : amount ? `Pay ${amount} AED` : `Pay Now`}
        </button>
       </div>
      </div>
    </div>
  );
};

export default ContactUsPage;