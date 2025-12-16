import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import FilterCard from "./FilterCard";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { alljobs } = useSelector((state) => state.job);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>

          {alljobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {alljobs.map((job) => (
                  <div>
                    <Job job={job} key={job?._id} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
