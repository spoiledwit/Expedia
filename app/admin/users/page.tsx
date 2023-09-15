"use client";

import DataTable from "@/components/Admin/Users/DataTable";
import axios from "axios";
import { useCookies } from "react-cookie";
import { User } from "@/types";
import { toast } from "react-hot-toast";
import { useState } from "react";

const UsersPage = () => {
  //   const [cookies] = useCookies(["Authorization"]);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    // const res = await axios.get(`${import.meta.env.VITE_BASE_URI}/user/all`, {
    //   headers: {
    //     Authorization: cookies.Authorization,
    //   },
    // });
    setUsers([]);
    return [];
  };

  async function deleteUser(id: string) {
    // const res = await axios.delete(`${import.meta.env.VITE_BASE_URI}/user/${id}`, {
    //   headers: {
    //     Authorization: cookies.Authorization,
    //   },
    // });
    // if (res.status === 200) {
    //   toast.success("User deleted successfully!");
    // } else {
    //   toast.error("Unable to delete user!");
    // }
    await fetchUsers();
  }
  return (
    <main className="w-full px-4 md:px-20 mt-28">
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
      <DataTable
        onDelete={deleteUser}
        onCreate={() => fetchUsers()}
        users={users}
      />
    </main>
  );
};

export default UsersPage;
