"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsPlay, BsChevronDown, BsClock, BsCalendar } from "react-icons/bs";
import Modal, { useModal } from "@/app/components/UI/Modal";

interface Tour {
  id: string;
  universityName: string;
  tourName: string;
  duration: string;
  views: number;
  thumbnail: string;
  description: string;
  lastVisited: string;
  featured: boolean;
  locations: {
    name: string;
    type: "academic" | "recreational" | "residential" | "landmark";
  }[];
  statistics: {
    completion: number;
    avgTimeSpent: string;
    rating: number;
    totalReviews: number;
  };
  guideDetails: {
    name: string;
    role: string;
  };
}

const tours: Tour[] = [
  {
    id: "stanford-main-2025",
    universityName: "Stanford University",
    tourName: "Main Campus Experience",
    duration: "45 minutes",
    views: 12543,
    thumbnail: "/stanford-main.jpg",
    description:
      "Take a comprehensive tour of Stanford's historic Main Quad, modern research facilities, and vibrant student spaces. This virtual experience includes detailed looks at the iconic Stanford Memorial Church, the Engineering Quad, and the Science and Engineering Complex.",
    lastVisited: "2025-01-10",
    featured: true,
    locations: [
      { name: "Memorial Church", type: "landmark" },
      { name: "Main Quad", type: "academic" },
      { name: "Green Library", type: "academic" },
      { name: "Tressider Union", type: "recreational" },
      { name: "Engineering Quad", type: "academic" },
    ],
    statistics: {
      completion: 89,
      avgTimeSpent: "38 minutes",
      rating: 4.9,
      totalReviews: 2341,
    },
    guideDetails: {
      name: "Prof. Sarah Chen",
      role: "Stanford Architecture Department",
    },
  },
  {
    id: "mit-campus-2025",
    universityName: "MIT",
    tourName: "Innovation Hub Tour",
    duration: "35 minutes",
    views: 9872,
    thumbnail: "/mit-innovation.jpg",
    description:
      "Explore MIT's cutting-edge research facilities and innovation spaces. Visit the Media Lab, Stata Center, and get an inside look at where breakthrough technologies are developed.",
    lastVisited: "2025-01-11",
    featured: true,
    locations: [
      { name: "Media Lab", type: "academic" },
      { name: "Stata Center", type: "academic" },
      { name: "Infinite Corridor", type: "landmark" },
      { name: "Student Center", type: "recreational" },
    ],
    statistics: {
      completion: 92,
      avgTimeSpent: "32 minutes",
      rating: 4.8,
      totalReviews: 1876,
    },
    guideDetails: {
      name: "Dr. James Wright",
      role: "MIT Media Lab Researcher",
    },
  },
  {
    id: "harvard-yard-2025",
    universityName: "Harvard University",
    tourName: "Historic Harvard Yard",
    duration: "40 minutes",
    views: 11234,
    thumbnail: "/harvard-yard.jpg",
    description:
      "Step through centuries of academic excellence as you explore Harvard Yard. Visit the iconic Widener Library, Massachusetts Hall, and experience the rich history of America's oldest university.",
    lastVisited: "2025-01-12",
    featured: true,
    locations: [
      { name: "Widener Library", type: "academic" },
      { name: "Massachusetts Hall", type: "academic" },
      { name: "Harvard Hall", type: "landmark" },
      { name: "John Harvard Statue", type: "landmark" },
      { name: "Science Center", type: "academic" },
    ],
    statistics: {
      completion: 87,
      avgTimeSpent: "35 minutes",
      rating: 4.7,
      totalReviews: 2103,
    },
    guideDetails: {
      name: "Dr. Emily Parker",
      role: "Harvard History Department",
    },
  },
];

const FeaturedTours: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const handleTourClick = (tour: Tour) => {
    setSelectedTour(tour);
    openModal();
  };

  const getLocationTypeColor = (type: Tour["locations"][0]["type"]) => {
    const colors = {
      academic: "bg-blue-500/20 text-blue-400",
      recreational: "bg-green-500/20 text-green-400",
      residential: "bg-yellow-500/20 text-yellow-400",
      landmark: "bg-purple-500/20 text-purple-400",
    };
    return colors[type];
  };

  return (
    <div
      {...divProps}
      className="w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Featured University Tours</h2>
          <span className="text-xs text-white/60">
            {tours.length} tours available
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => handleTourClick(tour)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-white/85">
                    {tour.universityName}
                  </h3>
                  <p className="text-xs text-white/60">
                    {tour.tourName} · {tour.duration}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-lg">
                      {tour.views.toLocaleString()} views
                    </span>
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-lg">
                      {tour.statistics.rating} ⭐
                    </span>
                  </div>
                </div>
                <BsPlay className="text-white/60 text-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={selectedTour?.tourName}
      >
        {selectedTour && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">
                {selectedTour.universityName}
              </h3>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <BsClock /> {selectedTour.duration}
                <BsCalendar /> Updated {selectedTour.lastVisited}
              </div>
            </div>

            <p className="text-sm">{selectedTour.description}</p>

            <div>
              <h4 className="text-sm font-medium mb-2">Key Locations</h4>
              <div className="flex flex-wrap gap-2">
                {selectedTour.locations.map((location) => (
                  <span
                    key={location.name}
                    className={`${getLocationTypeColor(location.type)} text-xs px-2 py-1 rounded-lg`}
                  >
                    {location.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs text-white/60">Completion Rate</p>
                <p className="text-lg font-medium">
                  {selectedTour.statistics.completion}%
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs text-white/60">Avg. Time Spent</p>
                <p className="text-lg font-medium">
                  {selectedTour.statistics.avgTimeSpent}
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-xs text-white/60">Tour Guide</p>
              <p className="text-sm font-medium">
                {selectedTour.guideDetails.name}
              </p>
              <p className="text-xs text-white/60">
                {selectedTour.guideDetails.role}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FeaturedTours;
