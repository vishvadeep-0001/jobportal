import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button className="rounded-full" variant="outline" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://img.freepik.com/premium-vector/creative-elegant-abstract-minimalistic-logo-design-vector-any-brand-company_1253202-137644.jpg?semt=ais_hybrid&w=740&q=80" />
          </Avatar>
        </Button>
      </div>

      <div>
        <h1 className="font-medium">Company Name </h1>
        <p className="text-sm text-gray-600">India</p>
      </div>

      <div className="">
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, vero!
          Lorem ipsum dolor sit amet Lorem, ipsum dolor.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>
          12 Positions
        </Badge>
        <Badge className={"text-[#f83002] font-bold"} variant={"ghost"}>
          Part Time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant={"ghost"}>
          24 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
