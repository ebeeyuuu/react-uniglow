import React, { useState, useMemo } from "react";
import { BsSearch, BsFilter } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/app/components/UI/DropdownMenu";
import UniversityCard from "./UniversityCard";
import ComparisonModal from "./ComparisonModal";

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
    description: "Leading research university in Silicon Valley, known for entrepreneurship and innovation",
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
    name: "Massachusetts Institute of Technology (MIT)",
    country: "USA",
    globalRanking: 2,
    logo: "https://images.unsplash.com/photo-1595034313026-9d6a73b4d055",
    description: "World-leading institution in science, technology, and engineering",
    categories: ["Tech", "Engineering", "Research"],
    scores: {
      academic: 96,
      research: 99,
      international: 90,
      industry: 97,
      overallScore: 95.5,
    },
  },
  {
    id: 3,
    name: "University of Cambridge",
    country: "UK",
    globalRanking: 3,
    logo: "https://images.unsplash.com/photo-1565030960396-1349013b188b",
    description: "Historic institution with centuries of academic excellence",
    categories: ["Research", "Humanities", "Sciences"],
    scores: {
      academic: 97,
      research: 96,
      international: 95,
      industry: 89,
      overallScore: 94.25,
    },
  },
  {
    id: 4,
    name: "Harvard University",
    country: "USA",
    globalRanking: 4,
    logo: "https://images.unsplash.com/photo-1580328763483-49d2fff13ba1",
    description: "Prestigious Ivy League institution with comprehensive academic programs",
    categories: ["Research", "Business", "Law"],
    scores: {
      academic: 98,
      research: 97,
      international: 88,
      industry: 92,
      overallScore: 93.75,
    },
  },
  {
    id: 5,
    name: "ETH Zurich",
    country: "Switzerland",
    globalRanking: 5,
    logo: "https://images.unsplash.com/photo-1558082516-58d23b11f62f",
    description: "Leading European technical and engineering institution",
    categories: ["Engineering", "Tech", "Research"],
    scores: {
      academic: 94,
      research: 95,
      international: 96,
      industry: 93,
      overallScore: 94.5,
    },
  },
  {
    id: 6,
    name: "University of Tokyo",
    country: "Japan",
    globalRanking: 6,
    logo: "https://images.unsplash.com/photo-1558082513-13654c992586",
    description: "Japan's leading research university with strong STEM focus",
    categories: ["Research", "Tech", "Sciences"],
    scores: {
      academic: 93,
      research: 94,
      international: 85,
      industry: 92,
      overallScore: 91,
    },
  },
  {
    id: 7,
    name: "National University of Singapore",
    country: "Singapore",
    globalRanking: 7,
    logo: "https://images.unsplash.com/photo-1558082516-b2b3f21167e5",
    description: "Leading Asian institution known for research and innovation",
    categories: ["Research", "Tech", "Business"],
    scores: {
      academic: 92,
      research: 93,
      international: 97,
      industry: 90,
      overallScore: 93,
    },
  },
  {
    id: 8,
    name: "University of Oxford",
    country: "UK",
    globalRanking: 8,
    logo: "https://images.unsplash.com/photo-1580328763498-459dd2982b9c",
    description: "Britain's oldest university with exceptional research output",
    categories: ["Research", "Humanities", "Sciences"],
    scores: {
      academic: 97,
      research: 95,
      international: 94,
      industry: 88,
      overallScore: 93.5,
    },
  },
  {
    id: 9,
    name: "Caltech",
    country: "USA",
    globalRanking: 9,
    logo: "https://images.unsplash.com/photo-1558082513-13654c992586",
    description: "Elite science and engineering focused institution",
    categories: ["Tech", "Sciences", "Engineering"],
    scores: {
      academic: 95,
      research: 96,
      international: 87,
      industry: 94,
      overallScore: 93,
    },
  },
  {
    id: 10,
    name: "Imperial College London",
    country: "UK",
    globalRanking: 10,
    logo: "https://images.unsplash.com/photo-1558082513-13654c992586",
    description: "Leading science, engineering, and medical institution",
    categories: ["Sciences", "Engineering", "Medicine"],
    scores: {
      academic: 93,
      research: 94,
      international: 96,
      industry: 91,
      overallScore: 93.5,
    },
  },
  {
    id: 11,
    name: "University of Melbourne",
    country: "Australia",
    globalRanking: 11,
    logo: "https://images.unsplash.com/photo-1558082513-13654c992586",
    description: "Australia's leading research university",
    categories: ["Research", "Sciences", "Arts"],
    scores: {
      academic: 91,
      research: 92,
      international: 95,
      industry: 89,
      overallScore: 91.75,
    },
  },
  {
    id: 12,
    name: "Technical University of Munich",
    country: "Germany",
    globalRanking: 12,
    logo: "https://images.unsplash.com/photo-1558082513-13654c992586",
    description: "Germany's premier technical university",
    categories: ["Engineering", "Tech", "Innovation"],
    scores: {
      academic: 90,
      research: 93,
      international: 94,
      industry: 92,
      overallScore: 92.25,
    },
  },
  {
    id: 13,
    name: "University of Toronto",
    country: "Canada",
    globalRanking: 13,
    logo: "https://images.unsplash.com/photo-1558082513-13654c992586",
    description: "Canada's leading research institution",
    categories: ["Research", "Innovation", "Sciences"],
    scores: {
      academic: 92,
      research: 91,
      international: 93,
      industry: 88,
      overallScore: 91,
    },
  },
  {
    id: 14,
    name: "Peking University",
    country: "China",
    globalRanking: 14,
    logo: "https://images.unsplash.com/photo-1558082513-13654c992586",
    description: "China's oldest national university",
    categories: ["Research", "Sciences", "Humanities"],
    scores: {
      academic: 91,
      research: 90,
      international: 86,
      industry: 89,
      overallScore: 89,
    },
  },
  {
    id: 15,
    name: "École Polytechnique Fédérale de Lausanne",
    country: "Switzerland",
    globalRanking: 15,
    logo: "https://images.unsplash.com/photo-1558082513-13654c992586",
    description: "Leading technical institution in French-speaking Switzerland",
    categories: ["Engineering", "Tech", "Innovation"],
    scores: {
      academic: 89,
      research: 92,
      international: 95,
      industry: 90,
      overallScore: 91.5,
    },
  }
];

const UniversityRankings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<keyof University["scores"]>("overallScore");
  const [pinnedUniversities, setPinnedUniversities] = useState<number[]>([]);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [universitiesToCompare, setUniversitiesToCompare] = useState<number[]>([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const allCountries = Array.from(
    new Set(universityData.map((u) => u.country))
  );
  const allCategories = Array.from(
    new Set(universityData.flatMap((u) => u.categories))
  );

  const filteredUniversities = useMemo(() => {
    return universityData
      .filter(
        (uni) =>
          uni.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedCountries.length === 0 ||
            selectedCountries.includes(uni.country)) &&
          (selectedCategories.length === 0 ||
            selectedCategories.some((cat) => uni.categories.includes(cat)))
      )
      .sort((a, b) => b.scores[sortBy] - a.scores[sortBy]);
  }, [searchTerm, selectedCountries, selectedCategories, sortBy]);

  const togglePinUniversity = (id: number) => {
    setPinnedUniversities((prev) =>
      prev.includes(id) ? prev.filter((uniId) => uniId !== id) : [...prev, id]
    );
  };

  const toggleCompareUniversity = (id: number) => {
    setUniversitiesToCompare((prev) =>
      prev.includes(id)
        ? prev.filter((uniId) => uniId !== id)
        : [...prev, id]
    );
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

        {/* Filters */}
        <DropdownMenu>
          <DropdownMenuTrigger onClick={() => {}} className="px-4 py-2 bg-white/10 rounded-xl text-white flex items-center gap-2">
            <BsFilter />
            Filters
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="p-4 space-y-4">
              {/* Countries */}
              <div>
                <h3 className="text-sm font-medium mb-2">Countries</h3>
                <div className="space-y-2">
                  {allCountries.map((country) => (
                    <DropdownMenuCheckboxItem
                      key={country}
                      checked={selectedCountries.includes(country)}
                      onChange={() => {
                        setSelectedCountries((prev) =>
                          prev.includes(country)
                            ? prev.filter((c) => c !== country)
                            : [...prev, country]
                        );
                      }}
                    >
                      {country}
                    </DropdownMenuCheckboxItem>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  {allCategories.map((category) => (
                    <DropdownMenuCheckboxItem
                      key={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => {
                        setSelectedCategories((prev) =>
                          prev.includes(category)
                            ? prev.filter((c) => c !== category)
                            : [...prev, category]
                        );
                      }}
                    >
                      {category}
                    </DropdownMenuCheckboxItem>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="text-sm font-medium mb-2">Sort By</h3>
                <div className="space-y-2">
                  {Object.keys(universityData[0].scores).map((key) => (
                    <DropdownMenuCheckboxItem
                      key={key}
                      checked={sortBy === key}
                      onChange={() => setSortBy(key as keyof University["scores"])}
                    >
                      {key}
                    </DropdownMenuCheckboxItem>
                  ))}
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Compare Mode Toggle */}
        <button
          onClick={() => {
            setIsCompareMode(!isCompareMode);
            if (!isCompareMode) {
              setUniversitiesToCompare([]);
            }
          }}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 ${
            isCompareMode ? "bg-white/20" : "bg-white/10"
          }`}
        >
          {isCompareMode ? "Cancel Compare" : "Compare"}
        </button>

        {/* Compare Button */}
        {isCompareMode && universitiesToCompare.length > 1 && (
          <button
            onClick={() => setShowComparisonModal(true)}
            className="px-4 py-2 bg-white/20 rounded-xl"
          >
            Compare ({universitiesToCompare.length})
          </button>
        )}
      </div>

      {/* Universities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUniversities.map((uni) => (
          <UniversityCard
            key={uni.id}
            university={uni}
            isPinned={pinnedUniversities.includes(uni.id)}
            isSelected={universitiesToCompare.includes(uni.id)}
            isCompareMode={isCompareMode}
            onPin={() => togglePinUniversity(uni.id)}
            onCompare={() => toggleCompareUniversity(uni.id)}
          />
        ))}
      </div>

      {/* Comparison Modal */}
      <AnimatePresence>
        {showComparisonModal && (
          <ComparisonModal
            universities={universityData.filter((uni) =>
              universitiesToCompare.includes(uni.id)
            )}
            onClose={() => {
              setShowComparisonModal(false);
              setUniversitiesToCompare([]);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default UniversityRankings;
