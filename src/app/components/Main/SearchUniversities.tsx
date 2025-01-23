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
        logoUrl:
          "https://images.unsplash.com/photo-1576049519901-ef17971aedc4",
        acceptanceRate: "4.6%",
      },
      {
        id: 2,
        name: "University of Oxford",
        country: "UK",
        logoUrl:
          "https://images.unsplash.com/photo-1676759527273-c4398483f22f",
        acceptanceRate: "17.5%",
      },
      {
        id: 3,
        name: "Stanford University",
        country: "USA",
        logoUrl:
          "https://images.unsplash.com/photo-1632988663082-4bac2c1847a0",
        acceptanceRate: "4.3%",
      },
      {
        id: 4,
        name: "University of Cambridge",
        country: "UK",
        logoUrl:
          "https://images.unsplash.com/photo-1571443979997-d25042c872e1",
        acceptanceRate: "21.0%",
      },
      {
        id: 5,
        name: "Massachusetts Institute of Technology",
        country: "USA",
        logoUrl:
          "https://images.unsplash.com/photo-1702961548924-04a5d5fdd2f5",
        acceptanceRate: "6.7%",
      },
      {
        id: 6,
        name: "California Institute of Technology",
        country: "USA",
        logoUrl:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        acceptanceRate: "6.4%",
      },
      {
        id: 7,
        name: "ETH Zurich",
        country: "Switzerland",
        logoUrl:
          "https://images.unsplash.com/photo-1728480675802-6c32cb3e1113",
        acceptanceRate: "27.6%",
      },
      {
        id: 8,
        name: "Imperial College London",
        country: "UK",
        logoUrl:
          "https://images.unsplash.com/photo-1640549700347-280bce42924f",
        acceptanceRate: "14.0%",
      },
      {
        id: 9,
        name: "University of Chicago",
        country: "USA",
        logoUrl:
          "https://images.unsplash.com/photo-1622060920348-16e677caf61a",
        acceptanceRate: "6.2%",
      },
      {
        id: 10,
        name: "Princeton University",
        country: "USA",
        logoUrl:
          "https://images.unsplash.com/photo-1642507870858-cb88cac504c4",
        acceptanceRate: "5.8%",
      },
    ];
    setUniversities(fetchedUniversities);
  }, []);

  useEffect(() => {
    setFilteredUniversities(
      universities.filter((university) =>
        university.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }, [searchTerm, universities]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Search Universities</h1>

      <input
        type="text"
        className="p-4 border border-white/[0.2] bg-black text-white rounded-2xl w-full mb-4"
        placeholder="Search for universities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUniversities.length > 0 ? (
          filteredUniversities.map((university) => (
            <div
              key={university.id}
              className="border bg-white/[0.02] border-white/[0.2] rounded-2xl shadow-md"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={`${university.logoUrl}?w=400&h=300&fit=crop`}
                  alt={university.name}
                  fill
                  className="rounded-t-xl object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="pb-4 px-4">
                <h2 className="text-xl font-semibold">{university.name}</h2>
                <p className="text-gray-600">{university.country}</p>
                <p className="text-sm text-gray-500">
                  Acceptance Rate: {university.acceptanceRate}
                </p>
              </div>
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
