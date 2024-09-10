import React from "react";
import { clubExamples } from "@/data";

interface Club {
  name: string;
  university: string;
  club_description: string;
  university_description: string;
}

interface ClubExamples {
  section: Club[];
}

const ExampleClubs = () => {
  return <div className="w-full h-full flex justify-center items-center"></div>;
};

export default ExampleClubs;
