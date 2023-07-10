import { useCookies } from "react-cookie";
import { Contact } from "../../types";

export default function DataTable({ contacts, onDelete }: { contacts: Contact[], onDelete: (id: string) => void }) {
  const [cookies] = useCookies(["Authorization"]);

  return (
    <main className="w-full overflow-x-scroll shadow-xl sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 min-w-[256px]">
              Name
            </th>
            <th scope="col" className="px-6 py-3 min-w-[256px]">
              Email
            </th>
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Phone
            </th>
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Job
            </th>
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Country
            </th>
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{c.name}</td>
              <td className="px-6 py-4">{c.email}</td>
              <td className="px-6 py-4">{c.phone}</td>
              <td className="px-6 py-4">{c.jobTitle}</td>
              <td className="px-6 py-4">{c.country}</td>
              <td className="px-6 py-4">{c.createdAt.substring(0,10)}</td>

              <td className="px-6 py-4">
                <button
                  onClick={() => onDelete(c._id)}
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
