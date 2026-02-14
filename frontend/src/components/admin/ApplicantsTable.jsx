import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const shortListingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>FullName</TableCell>
            <TableCell>FullName</TableCell>
            <TableCell>FullName</TableCell>
            <TableCell>FullName</TableCell>
            <TableCell>FullName</TableCell>
            <TableCell className="text-right">
              {shortListingStatus.map((status, index) => {
                return <div key={index}></div>;
              })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
