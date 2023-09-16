"use client";

import { deleteAssessment } from "@/lib/assessment";
import { totTitleCase } from "../../../lib/utils";
import { Assessment } from "../../../types";
import toast from "react-hot-toast";

export default function DataTable({
  assessments,
}: {
  assessments: Assessment[];
}) {
  async function handleDelete(id: string) {
    const success = await deleteAssessment(id);
    if (success) {
      toast.success("Item deleted!");
    } else {
      toast.error("Unable to delete item.");
    }
  }

  return (
    <main className="w-full overflow-x-scroll shadow-xl sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Name
            </th>
            <th scope="col" className="px-6 py-3 min-w-[160px]">
              Email
            </th>
            <th scope="col" className="px-6 py-3 min-w-[160px]">
              Phone
            </th>
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Visa
            </th>
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Country
            </th>
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Job
            </th>
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Education
            </th>
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((c, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{c.name}</td>
              <td className="px-6 py-4">{c.email}</td>
              <td className="px-6 py-4">{c.phone}</td>
              <td className="px-6 py-4">{totTitleCase(c.visaType)}</td>
              <td className="px-6 py-4">{totTitleCase(c.country)}</td>
              <td className="px-6 py-4">{c.jobTitle || "-"}</td>
              <td className="px-6 py-4">{c.education || "-"}</td>
              <td className="px-6 py-4">{c.createdAt.substring(0, 10)}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleDelete(c._id)}
                  className="text-xs text-red-500 hover:underline underline-offset-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
