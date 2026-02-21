import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Bengaluru",
      "Bangalore",
      "Delhi",
      "Hyderabad",
      "Pune",
      "Chennai",
      "Gurugram",
      "Gurgaon",
      "Noida",
      "Mumbai",
      "Kolkata",
      "Ahmedabad",
      "Chandigarh",
      "Kochi",
      "Thiruvananthapuram",
      "Jaipur",
      "Indore",
      "Visakhapatnam",
      "Coimbatore",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Software Developer",
      "Project Manager",
      "Data Analyst",
      "UX Designer",
      "DevOps Engineer",
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1Lakh", "1Lakh to 5Lakh", "6Lakh to 10Lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}- ${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2" key={itemId}>
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
