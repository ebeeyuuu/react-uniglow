import Image from "next/image";
import React, { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "../UI/DropdownMenu";

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
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedEnvironments, setSelectedEnvironments] = useState<string[]>([]);
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
    {
      id: 2,
      name: "Massachusetts Institute of Technology",
      country: "USA",
      city: "Cambridge",
      logoUrl: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f",
      acceptanceRate: "6.7%",
      tuitionFee: {
        domestic: 55878,
        international: 55878,
      },
      subjects: [
        { id: 5, name: "Computer Science", category: "Engineering" },
        { id: 6, name: "Mechanical Engineering", category: "Engineering" },
        { id: 7, name: "Physics", category: "Science" },
        { id: 8, name: "Mathematics", category: "Science" },
      ],
      ranking: {
        world: 2,
        domestic: 2,
      },
      features: [
        "Research Excellence",
        "Innovation Hub",
        "STEM Focus",
        "Industry Partnerships",
        "Entrepreneurship Programs",
      ],
      campusSize: "168 acres",
      studentCount: 11576,
      researchOutput: "High",
      internationalStudentPercentage: 29,
      accommodationAvailable: true,
      yearFounded: 1861,
      environmentType: "Urban",
      weatherType: ["Cold winters", "Mild summers", "Fall foliage"],
    },
    {
      id: 3,
      name: "Stanford University",
      country: "USA",
      city: "Stanford",
      logoUrl: "https://images.unsplash.com/photo-1564181893-c2f3f276ddb7",
      acceptanceRate: "4.3%",
      tuitionFee: {
        domestic: 56169,
        international: 56169,
      },
      subjects: [
        { id: 9, name: "Computer Science", category: "Engineering" },
        { id: 10, name: "Psychology", category: "Social Sciences" },
        { id: 11, name: "Economics", category: "Social Sciences" },
        { id: 12, name: "Engineering", category: "Engineering" },
      ],
      ranking: {
        world: 3,
        domestic: 3,
      },
      features: [
        "Silicon Valley Location",
        "Entrepreneurship Focus",
        "Research Excellence",
        "Strong Sports Program",
        "Innovation Hub",
      ],
      campusSize: "8180 acres",
      studentCount: 17249,
      researchOutput: "High",
      internationalStudentPercentage: 24,
      accommodationAvailable: true,
      yearFounded: 1885,
      environmentType: "Suburban",
      weatherType: ["Mild winters", "Warm summers", "Mediterranean climate"],
    },
    {
      id: 4,
      name: "University of Cambridge",
      country: "UK",
      city: "Cambridge",
      logoUrl: "https://images.unsplash.com/photo-1560869713-7d0a29430803",
      acceptanceRate: "21%",
      tuitionFee: {
        domestic: 9250,
        international: 45384,
      },
      subjects: [
        { id: 13, name: "Mathematics", category: "Science" },
        { id: 14, name: "Natural Sciences", category: "Science" },
        { id: 15, name: "Engineering", category: "Engineering" },
        { id: 16, name: "History", category: "Humanities" },
      ],
      ranking: {
        world: 4,
        domestic: 1,
      },
      features: [
        "Historic Institution",
        "College System",
        "Research Excellence",
        "Tutorial System",
        "Strong Academic Tradition",
      ],
      campusSize: "288 acres",
      studentCount: 23247,
      researchOutput: "High",
      internationalStudentPercentage: 37,
      accommodationAvailable: true,
      yearFounded: 1209,
      environmentType: "Urban",
      weatherType: ["Cool winters", "Mild summers", "Rainy"],
    },
    {
      id: 5,
      name: "ETH Zurich",
      country: "Switzerland",
      city: "Zurich",
      logoUrl: "https://images.unsplash.com/photo-1564510182791-49d0c0b6e65c",
      acceptanceRate: "27%",
      tuitionFee: {
        domestic: 1230,
        international: 1230,
      },
      subjects: [
        { id: 17, name: "Computer Science", category: "Engineering" },
        { id: 18, name: "Physics", category: "Science" },
        { id: 19, name: "Architecture", category: "Architecture" },
        { id: 20, name: "Environmental Engineering", category: "Engineering" },
      ],
      ranking: {
        world: 8,
        domestic: 1,
      },
      features: [
        "Research Excellence",
        "Innovation Hub",
        "Affordable Education",
        "International Focus",
        "Industry Connections",
      ],
      campusSize: "172 acres",
      studentCount: 22193,
      researchOutput: "High",
      internationalStudentPercentage: 41,
      accommodationAvailable: false,
      yearFounded: 1855,
      environmentType: "Urban",
      weatherType: ["Cold winters", "Mild summers", "Alpine climate"],
    }
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
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Search universities, subjects, locations..."
            className="p-4 border border-white/[0.2] bg-black text-white rounded-2xl w-full -mb-4"
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

      <div className="flex flex-wrap gap-4 mb-8">
        <DropdownMenu>
          <DropdownMenuTrigger onClick={() => {}}>
            Countries <span className="ml-2">({selectedCountries.length})</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Countries</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["USA", "UK", "Switzerland", "Germany", "France"].map((country) => (
              <DropdownMenuCheckboxItem
                key={country}
                checked={selectedCountries.includes(country)}
                onChange={() => {
                  if (selectedCountries.includes(country)) {
                    setSelectedCountries(selectedCountries.filter((c) => c !== country));
                  } else {
                    setSelectedCountries([...selectedCountries, country]);
                  }
                }}
              >
                {country}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Subject Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger onClick={() => {}}>
            Subjects <span className="ml-2">({selectedSubjects.length})</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Subjects</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {[
              "Computer Science",
              "Engineering",
              "Business",
              "Medicine",
              "Law",
              "Arts",
              "Sciences",
            ].map((subject) => (
              <DropdownMenuCheckboxItem
                key={subject}
                checked={selectedSubjects.includes(subject)}
                onChange={() => {
                  if (selectedSubjects.includes(subject)) {
                    setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
                  } else {
                    setSelectedSubjects([...selectedSubjects, subject]);
                  }
                }}
              >
                {subject}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Environment Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger onClick={() => {}}>
            Environment <span className="ml-2">({selectedEnvironments.length})</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Campus Environment</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["Urban", "Suburban", "Rural"].map((env) => (
              <DropdownMenuCheckboxItem
                key={env}
                checked={selectedEnvironments.includes(env)}
                onChange={() => {
                  if (selectedEnvironments.includes(env)) {
                    setSelectedEnvironments(selectedEnvironments.filter((e) => e !== env));
                  } else {
                    setSelectedEnvironments([...selectedEnvironments, env]);
                  }
                }}
              >
                {env}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Add more filters as needed */}
      </div>

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
