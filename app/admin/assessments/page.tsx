"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import AssessmentsTable from "@/components/Admin/Assessment/Datatable";
import { Assessment } from "@/types";
import toast from "react-hot-toast";

const AssessmentsPage = () => {
  //   const [cookies] = useCookies(["Authorization"]);
  const [assessments, setAssessments] = useState([]);

  const fetchAssessments = async () => {
    // const res = await axios.get(`${import.meta.env.VITE_BASE_URI}/assessments`, {
    //   headers: {
    //     Authorization: cookies.Authorization,
    //   },
    // });
    setAssessments([]);
    return [];
  };

  async function deleteContact(id: string) {
    // const res = await axios.delete(
    //   `${import.meta.env.VITE_BASE_URI}/assessments/${id}`,
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
    await fetchAssessments();
  }

  useEffect(() => {
    fetchAssessments();
  }, []);

  return (
    <main className="w-full px-4 md:px-20 mt-28">
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
      <AssessmentsTable assessments={assessments} onDelete={deleteContact} />
    </main>
  );
};

export default AssessmentsPage;
