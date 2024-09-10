import React from "react";
import { clubExamples } from "@/data";

interface Club {
  name: string;
  university: string;
  club_description: string;
  university_description: string;
}

interface ClubExamples {
  [section: string]: Club[];
}

const ExampleClubs = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="absolute top-0 left-0 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {Object.entries(clubExamples).map(([section, clubs]) => (
          <div
            key={section}
            className="selection min-h-[500px] flex justify-center border rounded-xl p-10 flex-col gap-4 text-wrap"
          >
            <div className="text-lg font-bold">{section}</div>
            <div>
              {clubs.map((club, index) => (
                <div className="flex flex-col mb-8 gap-2" key={index}>
                  <div className="text-lg font-semibold">{club.name}</div>
                  <div className="text-base font-medium">{club.university}</div>
                  <div className="text-xs font-light">
                    {club.club_description}
                  </div>
                  <div className="text-xs font-light">
                    {club.university_description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleClubs;
