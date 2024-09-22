import React, { useState } from "react";
import Checkmark from "./Checkmark";
import { useUniversityRecommendations } from "@/context/useUniversityRecommendation";

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
  onConfirm: () => void;
}

const Countries: React.FC<CountriesProps> = ({
  sectionName,
  data,
  onConfirm,
}) => {
  const { updateUniversityRecommendations } = useUniversityRecommendations();

  const areas = data[sectionName];
  const [selectedCountryNames, setSelectedCountryNames] = useState<string[]>(
    [],
  );

  const handleCountryClick = (country: string) => {
    setSelectedCountryNames((prev) => {
      const newSelection = prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country];

      return newSelection;
    });
  };

  const handleConfirm = async () => {
    updateUniversityRecommendations({
      idealCountries: selectedCountryNames,
    });
    onConfirm();
  };

  const totalCountries = areas.length;
  const selectedCount = selectedCountryNames.length;

  return (
    <div className="p-16">
      <h2 className="text-3xl flex justify-center items-center italic mt-24 mb-24 font-semibold">
        {sectionName.replace(/([A-Z])/g, " $1").toUpperCase()}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
        {areas.map((area) => (
          <div
            key={area.country}
            className="p-12 gap-4 border border-white rounded-xl cursor-pointer flex flex-col justify-center items-center relative"
            onClick={() => handleCountryClick(area.country)}
          >
            <strong className="text-lg">{area.country}:</strong>
            <p className="text-center font-extralight">{area.description}</p>
            <Checkmark
              isSelected={selectedCountryNames.includes(area.country)}
            />
          </div>
        ))}
      </div>
      <div className="mt-24 mb-40 flex flex-col gap-6 justify-center items-center">
        <p className="text-lg">
          {selectedCount} / {totalCountries}
        </p>
        <button
          onClick={() => handleConfirm()}
          className="px-5 py-3 bg-[#003dcc] text-xl font-medium rounded-xl"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Countries;
