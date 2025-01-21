import Image from "next/image";
import React, { useState, useEffect } from "react";

type University = {
  id: number;
  name: string;
  country: string;
  logoUrl: string;
  acceptanceRate: string;
};

const SearchUniversities = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUniversities, setFilteredUniversities] = useState<
    University[]
  >([]);

  useEffect(() => {
    const fetchedUniversities: University[] = [
      {
        id: 1,
        name: "Harvard University",
        country: "USA",
        logoUrl: "https://images.unsplash.com/photo-1582839651381-c58274f49cdb",
        acceptanceRate: "4.6%",
      },
      {
        id: 2,
        name: "University of Oxford",
        country: "UK",
        logoUrl: "https://images.unsplash.com/photo-1565826512-0cc2d6940321",
        acceptanceRate: "17.5%",
      },
      {
        id: 3,
        name: "Stanford University",
        country: "USA",
        logoUrl: "https://images.unsplash.com/photo-1544553822-9d4f85f9c45e",
        acceptanceRate: "4.3%",
      },
      {
        id: 4,
        name: "University of Cambridge",
        country: "UK",
        logoUrl: "https://images.unsplash.com/photo-1581751180036-6a12d0e6cbe9",
        acceptanceRate: "21.0%",
      },
      {
        id: 5,
        name: "Massachusetts Institute of Technology",
        country: "USA",
        logoUrl: "https://images.unsplash.com/photo-1602071716328-1033d938707b",
        acceptanceRate: "6.7%",
      },
      {
        id: 6,
        name: "California Institute of Technology",
        country: "USA",
        logoUrl: "https://images.unsplash.com/photo-1600765154372-c63c4f2d6f85",
        acceptanceRate: "6.4%",
      },
      {
        id: 7,
        name: "ETH Zurich",
        country: "Switzerland",
        logoUrl: "https://images.unsplash.com/photo-1586271253747-1207aee56e2f",
        acceptanceRate: "27.6%",
      },
      {
        id: 8,
        name: "Imperial College London",
        country: "UK",
        logoUrl: "https://images.unsplash.com/photo-1569403507-9f560f9fa768",
        acceptanceRate: "14.0%",
      },
      {
        id: 9,
        name: "University of Chicago",
        country: "USA",
        logoUrl: "https://images.unsplash.com/photo-1576544452589-417fd090b167",
        acceptanceRate: "6.2%",
      },
      {
        id: 10,
        name: "Princeton University",
        country: "USA",
        logoUrl: "https://images.unsplash.com/photo-1586511831127-1f5f4608a2f9",
        acceptanceRate: "5.8%",
      },
    ];

    setUniversities(fetchedUniversities);
  }, []);

  useEffect(() => {
    setFilteredUniversities(
      universities.filter((university) =>
        university.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, universities])

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Search Universities</h1>

      <input
        type="text"
        className="p-2 border rounded w-full mb-4"
        placeholder="Search for universities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((university) => (
            <div key={university.id} className="border p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold">{university.name}</h2>
              <p className="text-gray-600">{university.country}</p>
              <p className="text-sm text-gray-500">Acceptance Rate: {university.acceptanceRate}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">No universities found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchUniversities;
