"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {format} from "timeago.js"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function QueriesTable() {
  const [queries, setqueries] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchqueries();
  }, []);

  const fetchqueries = async () => {
    setloading(true);
    try {
      const res = await axios.get("/api/admin/contact");
      setqueries(res.data.queries);
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
      <TableCaption>A list of all contacts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Job</TableHead>
          <TableHead>Education</TableHead>
          <TableHead>Nationality</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {queries.map((contact: any) => (
          <TableRow key={contact._id}>
            <TableCell className="font-medium">{contact._id}</TableCell>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.job}</TableCell>
            <TableCell>{contact.education}</TableCell>
            <TableCell>{contact.nationality}</TableCell>
            <TableCell>{format(contact.createdAt)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}