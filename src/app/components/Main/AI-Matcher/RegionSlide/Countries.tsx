import React from "react";

interface Area {
  country: string;
  description: string;
}

interface Countries {
  bustlingCities: Area[];
  suburbanAreas: Area[];
  ruralSettings: Area[];
}

interface CountriesProps {
  sectionName: keyof Countries;
  data: Countries;
}

const Countries: React.FC<CountriesProps> = ({ sectionName, data }) => {
  const areas = data[sectionName];

  return (
    <div className="p-16">
      <h2 className="text-3xl flex justify-center items-center italic mt-24 mb-24 font-semibold">
        {sectionName.replace(/([A-Z])/g, " $1").toUpperCase()}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
        {areas.map((area) => (
          <div
            key={area.country}
            className="p-12 gap-4 border border-white rounded-xl flex flex-col justify-center items-center"
          >
            <strong className="text-lg">{area.country}:</strong>
            <p className="text-center font-extralight">{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
