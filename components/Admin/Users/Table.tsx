"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function UsersTable() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchusers();
  }, []);

  const fetchusers = async () => {
    setloading(true);
    try {
      const res = await axios.get("/api/admin/users");
      setusers(res.data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Table>
      <TableCaption>A list of all the Users on Portal.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Privilege Level</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user: any) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.isAdmin ? "Admin" : "User"}</TableCell>
            <TableCell>{user.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}