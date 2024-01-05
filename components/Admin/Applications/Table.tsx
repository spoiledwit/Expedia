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

export function ApplicationsTable() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/admin/applications");
      setApplications(res.data.applications);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Table>
      <TableCaption>A list of all the Applications submited.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Application ID</TableHead>
          <TableHead>Given Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Contact Number</TableHead>
          <TableHead>Education</TableHead>
          <TableHead>Jobs</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application: any) => (
          <TableRow key={application._id}>
            <TableCell className="font-medium">{application._id}</TableCell>
            <TableCell>{application.givenName}</TableCell>
            <TableCell>{application.user.email}</TableCell>
            <TableCell>{application.contactNumber}</TableCell>
            <TableCell>{application.education.length} {application.education ? "Education Listed" : "Not Educated"}</TableCell>
            <TableCell>{application.jobs.length} {application.jobs.length > 0 ? "Jobs listed" : "No Jobs Listed"}</TableCell>
            <TableCell>{application.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
