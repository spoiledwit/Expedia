import { BiPlus } from "react-icons/bi";
import { User } from "../../../types";
import ModalButton from "../ModalButton";
import { register as createUser } from "../../../lib/auth";
import toast from "react-hot-toast";

export default function DataTable({
  users,
  onDelete,
  onCreate
}: {
  users: User[];
  onDelete: (id: string) => void;
  onCreate: () => void
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
              <ModalButton modal={<CreateUserModal onCreate={onCreate} />}>
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

function CreateUserModal({onCreate}:{onCreate: () => void}) {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const { name, email, password } = e.target.elements;

    const res = await createUser(name.value, email.value, password.value);
    if (res.status === 201) {
      toast.success("User created successfully!");
    } else {
      toast.error("Unable to delete user!");
    }
    onCreate()
    e.reset()
  }

  return (
    <div className="w-96 px-4 mb-6">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-6">
        <label
          htmlFor="name"
          className="flex flex-col gap-y-2 text-sm font-normal text-gray-900 dark:text-white"
        >
          Name
          <input
            id="name"
            placeholder="Name"
            className="h-10 bg-gray-100 rounded-lg px-4"
          />
        </label>
        <label
          htmlFor="email"
          className="flex flex-col gap-y-2 text-sm font-normal text-gray-900 dark:text-white"
        >
          Email
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="h-10 bg-gray-100 rounded-lg px-4"
          />
        </label>
        <label
          htmlFor="name"
          className="flex flex-col gap-y-2 text-sm font-normal text-gray-900 dark:text-white"
        >
          Password
          <input
            id="password"
            type="password"
            placeholder="********"
            className="h-10 bg-gray-100 rounded-lg px-4"
          />
        </label>

        <button
          type="submit"
          className="disabled:cursor-wait text-base whitespace-nowrap bg-green-500 hover:bg-green-400 disabled:bg-gray-500 disabled:hover:bg-gray-500 border rounded-lg px-6 flex items-center justify-center text-white h-10 outline-none"
        >
          Create
        </button>
      </form>
    </div>
  );
}
