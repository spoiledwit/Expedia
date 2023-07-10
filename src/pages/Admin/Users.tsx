import { useEffect, useState } from "react";
import DataTable from "../../components/Admin/Users/DataTable";
import axios from "axios";
import { useCookies } from "react-cookie";
import { User } from "../../types";
import { toast } from "react-hot-toast";

const UsersPage = () => {
  const [cookies] = useCookies(["Authorization"]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await axios.get(`${import.meta.env.VITE_BASE_URI}/user/all`, {
      headers: {
        Authorization: cookies.Authorization,
      },
    });
    setUsers(res.data.users);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  async function deleteUser(id: string) {
    setLoading(true);
    const res = await axios.delete(`${import.meta.env.VITE_BASE_URI}/user/${id}`, {
      headers: {
        Authorization: cookies.Authorization,
      },
    });
    if (res.status === 200) {
      toast.success("User deleted successfully!");
    } else {
      toast.error("Unable to delete user!");
    }
    fetchUsers()
    setLoading(false);
  }

  return (
    <main className="w-full px-4 md:px-20 mt-28">
      <DataTable onDelete={deleteUser} onCreate={() => fetchUsers()} users={users} />
    </main>
  );
};

export default UsersPage;
