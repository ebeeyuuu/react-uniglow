import Image from "next/image";
import React, { useState, useEffect } from "react";

type Subject = {
  id: number;
  name: string;
  category: string;
};

type University = {
  id: number;
  name: string;
  country: string;
  city: string;
  logoUrl: string;
  acceptanceRate: string;
  tuitionFee: {
    domestic: number;
    international: number;
  };
  subjects: Subject[];
  ranking: {
    world: number;
    domestic: number;
  };
  features: string[];
  campusSize: string;
  studentCount: number;
  researchOutput: "High" | "Medium" | "Low";
  internationalStudentPercentage: number;
  accommodationAvailable: boolean;
  yearFounded: number;
  environmentType: "Urban" | "Suburban" | "Rural";
  weatherType: string[];
};

type FilterState = {
  searchTerm: string;
  selectedSubjects: string[];
  selectedFeatures: string[];
  selectedCountries: string[];
  tuitionRange: {
    min: number;
    max: number;
  };
  rankingRange: {
    min: number;
    max: number;
  };
  environmentTypes: string[];
  weatherTypes: string[];
  accommodationRequired: boolean;
};

const AIMatcher = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    selectedSubjects: [],
    selectedFeatures: [],
    selectedCountries: [],
    tuitionRange: {
      min: 0,
      max: 100000,
    },
    rankingRange: {
      min: 1,
      max: 1000,
    },
    environmentTypes: [],
    weatherTypes: [],
    accommodationRequired: false,
  });

  // Sample data with more detail
  const sampleUniversities: University[] = [
    {
      id: 1,
      name: "Harvard University",
      country: "USA",
      city: "Cambridge",
      logoUrl: "https://images.unsplash.com/photo-1576049519901-ef17971aedc4",
      acceptanceRate: "4.6%",
      tuitionFee: {
        domestic: 54768,
        international: 54768,
      },
      subjects: [
        { id: 1, name: "Computer Science", category: "Engineering" },
        { id: 2, name: "Business Administration", category: "Business" },
        { id: 3, name: "Law", category: "Law" },
        { id: 4, name: "Medicine", category: "Medicine" },
      ],
      ranking: {
        world: 1,
        domestic: 1,
      },
      features: [
        "Research Excellence",
        "Ivy League",
        "Strong Alumni Network",
        "Career Services",
        "Study Abroad Programs",
      ],
      campusSize: "209 acres",
      studentCount: 23731,
      researchOutput: "High",
      internationalStudentPercentage: 24,
      accommodationAvailable: true,
      yearFounded: 1636,
      environmentType: "Urban",
      weatherType: ["Cold winters", "Mild summers", "Fall foliage"],
    },
    // Add at least 15-20 more detailed university entries here
  ];

  useEffect(() => {
    setUniversities(sampleUniversities);
  }, []);

  // Advanced filtering function
  const applyFilters = () => {
    let filtered = universities;

    // Text search across multiple fields
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(uni =>
        uni.name.toLowerCase().includes(searchLower) ||
        uni.city.toLowerCase().includes(searchLower) ||
        uni.country.toLowerCase().includes(searchLower) ||
        uni.subjects.some(subject => subject.name.toLowerCase().includes(searchLower))
      );
    }

    // Subject filtering
    if (filters.selectedSubjects.length > 0) {
      filtered = filtered.filter(uni =>
        filters.selectedSubjects.every(subject =>
          uni.subjects.some(s => s.name === subject)
        )
      );
    }

    // Country filtering
    if (filters.selectedCountries.length > 0) {
      filtered = filtered.filter(uni =>
        filters.selectedCountries.includes(uni.country)
      );
    }

    // Tuition range
    filtered = filtered.filter(uni =>
      uni.tuitionFee.international >= filters.tuitionRange.min &&
      uni.tuitionFee.international <= filters.tuitionRange.max
    );

    // Ranking range
    filtered = filtered.filter(uni =>
      uni.ranking.world >= filters.rankingRange.min &&
      uni.ranking.world <= filters.rankingRange.max
    );

    // Environment type
    if (filters.environmentTypes.length > 0) {
      filtered = filtered.filter(uni =>
        filters.environmentTypes.includes(uni.environmentType)
      );
    }

    // Weather preferences
    if (filters.weatherTypes.length > 0) {
      filtered = filtered.filter(uni =>
        filters.weatherTypes.some(weather =>
          uni.weatherType.includes(weather)
        )
      );
    }

    // Accommodation
    if (filters.accommodationRequired) {
      filtered = filtered.filter(uni => uni.accommodationAvailable);
    }

    setFilteredUniversities(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, universities]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col space-y-4">
          {/* Main Search */}
          <input
            type="text"
            placeholder="Search universities, subjects, locations..."
            className="p-4 border border-white/[0.2] bg-black text-white rounded-2xl w-full"
            value={filters.searchTerm}
            onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
          />

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {filters.selectedSubjects.map(subject => (
              <span key={subject} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                {subject}
                <button
                  onClick={() => setFilters(prev => ({
                    ...prev,
                    selectedSubjects: prev.selectedSubjects.filter(s => s !== subject)
                  }))}
                  className="ml-2"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Subject Filter */}
        <div className="border border-white/[0.2] rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-2">Subjects</h3>
          {/* Add subject selection UI */}
        </div>

        {/* Location Filter */}
        <div className="border border-white/[0.2] rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          {/* Add location selection UI */}
        </div>

        {/* Tuition Range */}
        <div className="border border-white/[0.2] rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-2">Tuition Range</h3>
          {/* Add range slider UI */}
        </div>

        {/* Environment Type */}
        <div className="border border-white/[0.2] rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-2">Environment</h3>
          {/* Add environment selection UI */}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUniversities.map((university) => (
          <div
            key={university.id}
            className="border bg-white/[0.02] border-white/[0.2] rounded-2xl shadow-md hover:border-white/[0.4] transition-all"
          >
            <div className="relative w-full h-48">
              <Image
                src={university.logoUrl}
                alt={university.name}
                fill
                className="rounded-t-xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{university.name}</h2>
              <p className="text-gray-400 mb-2">{university.city}, {university.country}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div>
                  <p className="text-sm text-gray-500">World Ranking</p>
                  <p className="font-semibold">#{university.ranking.world}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Acceptance Rate</p>
                  <p className="font-semibold">{university.acceptanceRate}</p>
                </div>
              </div>

              {/* Subject Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {university.subjects.slice(0, 3).map(subject => (
                  <span
                    key={subject.id}
                    className="px-2 py-1 bg-gray-800 text-xs rounded-full"
                  >
                    {subject.name}
                  </span>
                ))}
                {university.subjects.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-xs rounded-full">
                    +{university.subjects.length - 3} more
                  </span>
                )}
              </div>

              {/* Features */}
              <div className="text-sm text-gray-400">
                <p>• {university.studentCount.toLocaleString()} students</p>
                <p>• {university.environmentType} campus</p>
                <p>• {university.internationalStudentPercentage}% international students</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIMatcher;
