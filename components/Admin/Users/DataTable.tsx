import { BiPlus } from "react-icons/bi";
import { User } from "../../../types";
import ModalButton from "../ModalButton";
import ModalCreateUser from "./ModelCreateUser";

export default function DataTable({
  users,
  onDelete,
  onCreate,
}: {
  users: User[];
  onDelete: (id: string) => void;
  onCreate: () => void;
}) {
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
            <th scope="col" className="px-6 py-3 min-w-[128px]">
              Date
            </th>
            <th scope="col" className="px-6 py-3 max-w-[32px]">
              <ModalButton modal={<ModalCreateUser onCreate={onCreate} />}>
                <BiPlus size={24} />
              </ModalButton>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{u.name}</td>
              <td className="px-6 py-4">{u.email}</td>
              <td className="px-6 py-4">{u.createdAt.substring(0, 10)}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onDelete(u._id!)}
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
