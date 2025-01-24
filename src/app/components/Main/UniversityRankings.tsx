import React, { useState, useMemo } from "react";
import Image from "next/image";
import { BsSearch, BsTrophy, BsFilter } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/app/components/UI/DropdownMenu";
import Modal, { useModal } from "@/app/components/UI/Modal";

type University = {
  id: number;
  name: string;
  country: string;
  globalRanking: number;
  logo: string;
  description: string;
  categories: string[];
  scores: {
    academic: number;
    research: number;
    international: number;
    industry: number;
    overallScore: number;
  };
};

const universityData: University[] = [
  {
    id: 1,
    name: "Stanford University",
    country: "USA",
    globalRanking: 1,
    logo: "https://images.unsplash.com/photo-1632988663082-4bac2c1847a0",
    description: "Leading research university in Silicon Valley",
    categories: ["Tech", "Innovation", "Research"],
    scores: {
      academic: 95,
      research: 98,
      international: 92,
      industry: 96,
      overallScore: 95.25,
    },
  },
  {
    id: 2,
    name: "Harvard University",
    country: "USA",
    globalRanking: 2,
    logo: "https://images.unsplash.com/photo-1576049519901-ef17971aedc4",
    description: "Prestigious Ivy League research university",
    categories: ["Research", "Liberal Arts", "Social Sciences"],
    scores: {
      academic: 94,
      research: 96,
      international: 93,
      industry: 90,
      overallScore: 93.25,
    },
  },
  {
    id: 3,
    name: "University of Cambridge",
    country: "UK",
    globalRanking: 3,
    logo: "https://images.unsplash.com/photo-1571443979997-d25042c872e1",
    description: "Historic and world-renowned British university",
    categories: ["History", "Science", "Innovation"],
    scores: {
      academic: 96,
      research: 97,
      international: 95,
      industry: 89,
      overallScore: 94.25,
    },
  },
  {
    id: 4,
    name: "University of Oxford",
    country: "UK",
    globalRanking: 4,
    logo: "https://images.unsplash.com/photo-1676759527273-c4398483f22f",
    description: "Historic university with a rich academic tradition",
    categories: ["Research", "Humanities", "Innovation"],
    scores: {
      academic: 96,
      research: 95,
      international: 94,
      industry: 88,
      overallScore: 93.75,
    },
  },
  {
    id: 5,
    name: "California Institute of Technology (Caltech)",
    country: "USA",
    globalRanking: 5,
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Focused on science and engineering research",
    categories: ["Tech", "Research", "Innovation"],
    scores: {
      academic: 93,
      research: 97,
      international: 90,
      industry: 92,
      overallScore: 93,
    },
  },
  {
    id: 6,
    name: "Massachusetts Institute of Technology (MIT)",
    country: "USA",
    globalRanking: 6,
    logo: "https://images.unsplash.com/photo-1702961548924-04a5d5fdd2f5",
    description: "Renowned institution for technology and innovation",
    categories: ["Tech", "Innovation", "Engineering"],
    scores: {
      academic: 94,
      research: 99,
      international: 91,
      industry: 95,
      overallScore: 94.75,
    },
  },
  {
    id: 7,
    name: "ETH Zurich",
    country: "Switzerland",
    globalRanking: 7,
    logo: "https://images.unsplash.com/photo-1728480675802-6c32cb3e1113",
    description: "Leading university in Europe for technology and engineering",
    categories: ["Tech", "Engineering", "Innovation"],
    scores: {
      academic: 92,
      research: 95,
      international: 96,
      industry: 91,
      overallScore: 93.5,
    },
  },
];

const UniversityRankings: React.FC = () => {
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] =
    useState<keyof University["scores"]>("overallScore");
  const [selectedUniversity, setSelectedUniversity] =
    useState<University | null>(null);

  const allCountries = Array.from(
    new Set(universityData.map((u) => u.country)),
  );
  const allCategories = Array.from(
    new Set(universityData.flatMap((u) => u.categories)),
  );

  const filteredUniversities = useMemo(() => {
    return universityData
      .filter(
        (uni) =>
          uni.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedCountries.length === 0 ||
            selectedCountries.includes(uni.country)) &&
          (selectedCategories.length === 0 ||
            selectedCategories.some((cat) => uni.categories.includes(cat))),
      )
      .sort((a, b) => b.scores[sortBy] - a.scores[sortBy]);
  }, [searchTerm, selectedCountries, selectedCategories, sortBy]);

  const handleUniversityClick = (uni: University) => {
    setSelectedUniversity(uni);
    openModal();
  };

  return (
    <div className="space-y-4 w-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]">
      <div className="flex flex-row flex-wrap gap-4 mb-4">
        {/* Search Input */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search universities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 bg-white/5 rounded-xl border border-white/10 text-white"
          />
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
        </div>

        {/* Country Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger
            onClick={() => { }}
            className="px-4 py-2 bg-white/10 rounded-xl text-white flex items-center"
          >
            Countries{" "}
            {selectedCountries.length > 0 && `(${selectedCountries.length})`}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {allCountries.map((country) => (
              <DropdownMenuCheckboxItem
                key={country}
                checked={selectedCountries.includes(country)}
                onChange={() => {
                  setSelectedCountries((prev) =>
                    prev.includes(country)
                      ? prev.filter((c) => c !== country)
                      : [...prev, country],
                  );
                }}
              >
                {country}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Categories Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger
            onClick={() => { }}
            className="px-4 py-2 bg-white/10 rounded-xl text-white flex items-center"
          >
            Categories{" "}
            {selectedCategories.length > 0 && `(${selectedCategories.length})`}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {allCategories.map((category) => (
              <DropdownMenuCheckboxItem
                key={category}
                checked={selectedCategories.includes(category)}
                onChange={() => {
                  setSelectedCategories((prev) =>
                    prev.includes(category)
                      ? prev.filter((c) => c !== category)
                      : [...prev, category],
                  );
                }}
              >
                {category}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sort Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            onClick={() => { }}
            className="px-4 py-2 bg-white/10 rounded-xl text-white flex items-center"
          >
            Sort by: {sortBy}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.keys(universityData[0].scores).map((key) => (
              <DropdownMenuCheckboxItem
                key={key}
                checked={sortBy === key}
                onChange={() => setSortBy(key as keyof University["scores"])}
              >
                {key}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Universities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUniversities.map((uni, index) => (
          <div
            key={uni.id}
            className="bg-white/[0.05] border border-white/10 rounded-2xl hover:bg-white/[0.1] transition-all cursor-pointer"
            onClick={() => handleUniversityClick(uni)}
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={`${uni.logo}?w=400&h=300&fit=crop`}
                alt={uni.name}
                fill
                className="rounded-t-xl object-cover"
              />
            </div>
            <div className="space-y-2 px-6 pb-6">
              <div>
                <h3 className="text-lg font-semibold flex items-center">
                  {uni.name}
                </h3>
                <p className="text-sm text-white/60">{uni.country}</p>
              </div>
              <div className="flex flex-row flex-wrap justify-between">
                <span className="text-sm text-white/60">Global Ranking</span>
                <span className="font-semibold">#{uni.globalRanking}</span>
              </div>
              <div className="flex flex-row flex-wrap justify-between">
                <span className="text-sm text-white/60">Overall Score</span>
                <span className="font-semibold">
                  {uni.scores.overallScore.toFixed(2)}
                </span>
              </div>
              <div className="flex flex-row flex-wrap gap-2 mt-2">
                {uni.categories.slice(0, 3).map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 bg-white/10 rounded-full text-xs"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* University Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedUniversity?.name}
      >
        {selectedUniversity && (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div>
                <p className="text-white/60">{selectedUniversity.country}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-white/60 mb-2">
                  Description
                </h4>
                <p>{selectedUniversity.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white/60 mb-2">
                  Scores
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(selectedUniversity.scores)
                    .filter(([key]) => key !== "overallScore")
                    .map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-white/10 rounded-xl p-3 flex justify-between items-center"
                      >
                        <span className="text-sm capitalize">{key}</span>
                        <span className="font-semibold">
                          {value.toFixed(2)}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white/60 mb-2">
                  Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedUniversity.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UniversityRankings;
