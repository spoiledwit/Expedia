"use client";

import axios from "axios";

import ContactsList from "@/components/Admin/Contact/DataTable";
import { Contact } from "@/types";
import toast from "react-hot-toast";
import { useState } from "react";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    // setLoading(true);
    // const res = await axios.get(`${import.meta.env.VITE_BASE_URI}/contacts`, {
    //   headers: {
    //     Authorization: cookies.Authorization,
    //   },
    // });
    // setContacts(res.data);
    // setLoading(false);

    setContacts([]);

    return [];
  };

  async function deleteContact(id: string) {
    // const res = await axios.delete(
    //   `${import.meta.env.VITE_BASE_URI}/contacts/${id}`,
    //   {
    //     headers: {
    //       Authorization: cookies.Authorization,
    //     },
    //   }
    // );
    // if (res.status === 200) {
    //   toast.success("Contact Info Deleted!");
    // } else {
    //   toast.error("Unable to delete info");
    // }
    await fetchContacts();
  }
  return (
    <main className="w-full px-4 md:px-20 mt-28">
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
      <ContactsList contacts={contacts} onDelete={deleteContact} />
    </main>
  );
};

export default ContactsPage;
