"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { BsPlay, BsSearch } from "react-icons/bs";
import Modal, { useModal } from "@/app/components/UI/Modal";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/app/components/UI/DropdownMenu";

type VRTour = {
  id: number;
  university: string;
  country: string;
  thumbnail: string;
  duration: string;
  description: string;
  tourUrl: string;
  locations: string[];
  tags: string[];
};

const virtualTours: VRTour[] = [
  {
    id: 1,
    university: "Stanford University",
    country: "USA",
    thumbnail: "https://images.unsplash.com/photo-1508302882073-8af6be4c6688",
    duration: "15 min",
    description: "Explore Stanford's historic Main Quad and modern research facilities",
    tourUrl: "/vr/stanford",
    locations: ["Main Quad", "Memorial Church", "Green Library", "Engineering Quad"],
    tags: ["Tech", "Research", "Silicon Valley"]
  },
  {
    id: 2,
    university: "Harvard University",
    country: "USA",
    thumbnail: "https://images.unsplash.com/photo-1576049519901-ef17971aedc4?q=80",
    duration: "20 min",
    description: "Walk through Harvard Yard and visit historic buildings",
    tourUrl: "/vr/harvard",
    locations: ["Harvard Yard", "Widener Library", "Memorial Hall", "Science Center"],
    tags: ["Ivy League", "Historic", "Research"]
  },
  {
    id: 3,
    university: "MIT",
    country: "USA",
    thumbnail: "https://images.unsplash.com/photo-1537888692311-8a7fb3e9f374",
    duration: "18 min",
    description: "Experience MIT's cutting-edge facilities and iconic architecture",
    tourUrl: "/vr/mit",
    locations: ["The Great Dome", "Media Lab", "Stata Center", "Infinite Corridor"],
    tags: ["Tech", "Innovation", "Research"]
  },
  {
    id: 4,
    university: "Oxford University",
    country: "UK",
    thumbnail: "https://images.unsplash.com/photo-1580844946486-f08607088f08?q=80",
    duration: "25 min",
    description: "Tour through centuries of academic excellence",
    tourUrl: "/vr/oxford",
    locations: ["Bodleian Library", "Christ Church", "Radcliffe Camera", "Bridge of Sighs"],
    tags: ["Historic", "Traditional", "Research"]
  },
  {
    id: 5,
    university: "Cambridge University",
    country: "UK",
    thumbnail: "https://images.unsplash.com/photo-1550611343-63ba251eaeb1",
    duration: "22 min",
    description: "Discover the rich academic heritage of Cambridge",
    tourUrl: "/vr/cambridge",
    locations: ["King's College Chapel", "Senate House", "Trinity College", "Mathematical Bridge"],
    tags: ["Historic", "Traditional", "Research"]
  },
  {
    id: 6,
    university: "California Institute of Technology",
    country: "USA",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    duration: "16 min",
    description: "Explore Caltech's world-class science and engineering facilities",
    tourUrl: "/vr/caltech",
    locations: ["Beckman Institute", "Millikan Library", "Chen Neuroscience Building"],
    tags: ["Tech", "Innovation", "Science"]
  }
];

const VRToursEnhanced = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedTour, setSelectedTour] = useState<VRTour | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const allTags = Array.from(new Set(virtualTours.flatMap(tour => tour.tags)));
  const allCountries = Array.from(new Set(virtualTours.map(tour => tour.country)));

  const filteredTours = useMemo(() => {
    return virtualTours.filter(tour => {
      const matchesSearch = tour.university.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => tour.tags.includes(tag));
      const matchesCountry = selectedCountries.length === 0 || 
        selectedCountries.includes(tour.country);
      
      return matchesSearch && matchesTags && matchesCountry;
    });
  }, [searchTerm, selectedTags, selectedCountries]);

  const handleTourClick = (tour: VRTour) => {
    setSelectedTour(tour);
    openModal();
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const toggleCountry = (country: string) => {
    setSelectedCountries(prev => 
      prev.includes(country) 
        ? prev.filter(c => c !== country) 
        : [...prev, country]
    );
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
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

        {/* Tag Filters */}
        <DropdownMenu>
          <DropdownMenuTrigger onClick={() => {}} className="px-4 py-2 bg-white/10 rounded-xl text-white flex items-center">
            Tags {selectedTags.length > 0 && `(${selectedTags.length})`}
          </DropdownMenuTrigger>
          <DropdownMenuContent position="bottom-right">
            {allTags.map(tag => (
              <DropdownMenuCheckboxItem
                key={tag}
                checked={selectedTags.includes(tag)}
                onChange={() => toggleTag(tag)}
              >
                {tag}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Country Filters */}
        <DropdownMenu>
          <DropdownMenuTrigger onClick={() => {}} className="px-4 py-2 bg-white/10 rounded-xl text-white flex items-center">
            Countries {selectedCountries.length > 0 && `(${selectedCountries.length})`}
          </DropdownMenuTrigger>
          <DropdownMenuContent position="bottom-right">
            {allCountries.map(country => (
              <DropdownMenuCheckboxItem
                key={country}
                checked={selectedCountries.includes(country)}
                onChange={() => toggleCountry(country)}
              >
                {country}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTours.map((tour) => (
          <div
            key={tour.id}
            className="group h-72 relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => handleTourClick(tour)}
          >
            <Image
              src={tour.thumbnail}
              alt={tour.university}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent h-1/2" />
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{tour.university}</h3>
                <p className="text-sm text-white/80 line-clamp-2">{tour.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BsPlay className="w-5 h-5" />
                    <span className="text-sm text-white/60">{tour.duration}</span>
                  </div>
                  <div className="flex gap-1">
                    {tour.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-white/10 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      <Modal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={`${selectedTour?.university} VR Tour`}
      >
        {selectedTour && (
          <div className="space-y-4">
            <div className="aspect-video relative bg-black/50 rounded-xl mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/60">VR Experience Loading...</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/60 mb-2">Featured Locations</h4>
              <div className="flex flex-wrap gap-2">
                {selectedTour.locations.map((location, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/60 mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {selectedTour.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="w-full py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
              Launch Full VR Experience
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default VRToursEnhanced;
