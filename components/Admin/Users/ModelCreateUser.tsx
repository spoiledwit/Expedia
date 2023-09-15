"use client";

import { register as createUser } from "../../../lib/auth";
import toast from "react-hot-toast";

export default function ModalCreateUser({
  onCreate,
}: {
  onCreate: () => void;
}) {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const { name, email, password } = e.target.elements;

    const res = await createUser(name.value, email.value, password.value);
    if (res.status === 201) {
      toast.success("User created successfully!");
    } else {
      toast.error("Unable to delete user!");
    }
    onCreate();
    e.target.reset();
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
