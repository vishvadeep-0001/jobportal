import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <span>You have'nt applied any job yet.</span>
          ) : (
            allAppliedJobs.map((apply) => (
              <TableRow key={apply?._id}>
                <TableCell>{apply?.createdAt?.split("T")[0]}</TableCell>
                <TableCell>{apply?.job?.title}</TableCell>
                <TableCell>{apply?.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${apply?.status === "rejected" ? "bg-red-400" : apply?.status === "pending" ? "bg-gray-400" : "bg-green-400"}`}
                  >
                    {apply?.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
